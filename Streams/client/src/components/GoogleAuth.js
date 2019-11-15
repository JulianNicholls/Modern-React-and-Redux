import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

const GoogleAuth = ({ isLoggedIn, authLogin, authLogout }) => {
  const gAuth = useRef(null);

  const authChanged = isLoggedIn => {
    if (isLoggedIn) authLogin(gAuth.current.currentUser.get().getId());
    else authLogout();
  };

  useEffect(() => {
    const gApi = window.gapi;

    if (!gAuth.current) {
      gApi.load('client:auth2', () => {
        gApi.client
          .init({
            clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
            scope: 'email',
          })
          .then(() => {
            gAuth.current = gApi.auth2.getAuthInstance();
            const isi = gAuth.current.isSignedIn;

            authChanged(isi.get());

            isi.listen(authChanged);
          });
      });
    }
  });

  const renderAuthButton = () => {
    if (isLoggedIn === null)
      return <button className="ui loading button">Loading</button>;

    if (isLoggedIn)
      return (
        <button
          className="ui small red button"
          onClick={() => gAuth.current.signOut()}
        >
          Log out
        </button>
      );

    return (
      <button
        className="ui small red labeled icon button"
        onClick={() => gAuth.current.signIn()}
      >
        <i className="google icon" />
        Log in
      </button>
    );
  };

  return <div className="item">{renderAuthButton()}</div>;
};

const mapStateToProps = ({ auth }) => ({ isLoggedIn: auth.isLoggedIn });

export default connect(mapStateToProps, actions)(GoogleAuth);
