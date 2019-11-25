import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

const App = () => {
  const [coords, setCoords] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setCoords(position.coords),
      error => setErrorMessage(error.message)
    );
  }, []);

  return (
    <div>
      {!(coords || errorMessage) && (
        <Spinner message="Please accept the location request" />
      )}
      {coords && <SeasonDisplay lat={coords.latitude} />}
      {errorMessage && <div>Error: {errorMessage}</div>}
    </div>
  );
};

render(<App />, document.getElementById('root'));
