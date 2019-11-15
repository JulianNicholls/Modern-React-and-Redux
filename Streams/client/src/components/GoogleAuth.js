import React, { useEffect, useState, useRef } from 'react';

const GoogleAuth = () => {
  const auth = useRef(null);
  const [isSignedIn, setIsSignedIn] = useState(null);

  const authChanged = () => {
    setIsSignedIn(auth.current.isSignedIn.get());
  };

  useEffect(() => {
    const gApi = window.gapi;

    console.log('Re-entered useEffect:', auth);
    if (!auth.current) {
      console.log('Loading client:auth2');
      gApi.load('client:auth2', () => {
        console.log('Calling client.init');
        gApi.client
          .init({
            clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
            scope: 'email',
          })
          .then(() => {
            auth.current = gApi.auth2.getAuthInstance();
            const isi = auth.current.isSignedIn;

            setIsSignedIn(isi.get());

            isi.listen(authChanged);

            // auth.signIn();
          });
      });
    }
  }, []);

  const renderAuthButton = () => {
    if (isSignedIn === null) return <small>Loading...</small>;
    else if (isSignedIn) return 'Logged IN';

    return 'Logged out';
  };

  return <div className="item">{renderAuthButton()}</div>;
};

export default GoogleAuth;
