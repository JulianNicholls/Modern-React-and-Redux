import React, { useEffect, useState, useRef } from 'react';

const GoogleAuth = () => {
  const auth = useRef(null);
  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    const gApi = window.gapi;

    if (!auth.current) {
      gApi.load('client:auth2', () => {
        gApi.client
          .init({
            clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
            scope: 'email',
          })
          .then(() => {
            auth.current = gApi.auth2.getAuthInstance();

            authChanged();

            auth.current.isSignedIn.listen(authChanged);
          });
      });
    }
  }, []);

  const authChanged = () => {
    setIsSignedIn(auth.current.isSignedIn.get());
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) return null;

    if (isSignedIn)
      return (
        <button
          className="ui red google button"
          onClick={() => auth.current.signOut()}
        >
          <i className="google icon" />
          Log out
        </button>
      );

    return (
      <button
        className="ui red google button"
        onClick={() => auth.current.signIn()}
      >
        <i className="google icon" />
        Log in with Google
      </button>
    );
  };

  return <div className="item">{renderAuthButton()}</div>;
};

export default GoogleAuth;
