import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

const GoogleAuth = ({ auth, authLogin, authLogout }) => {
  const gAuth = useRef(null);

  const authChanged = isLoggedIn => {
    if (isLoggedIn) authLogin();
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

            authChanged(gAuth.current.isSignedIn.get());

            gAuth.current.isSignedIn.listen(authChanged);
          });
      });
    }
  });

  const renderAuthButton = () => {
    if (auth.isLoggedIn === null) return null;

    if (auth.isLoggedIn)
      return (
        <button
          className="ui red google button"
          onClick={() => gAuth.current.signOut()}
        >
          <i className="google icon" />
          Log out
        </button>
      );

    return (
      <button
        className="ui red google button"
        onClick={() => gAuth.current.signIn()}
      >
        <i className="google icon" />
        Log in with Google
      </button>
    );
  };

  return <div className="item">{renderAuthButton()}</div>;
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, actions)(GoogleAuth);
