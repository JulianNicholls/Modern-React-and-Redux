import React from 'react';
import { render } from 'react-dom';

import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';
import useLocation from './components/useLocation';

const App = () => {
  const [coords, errorMessage] = useLocation();

  const content = () => {
    if (errorMessage) return <div>Error: {errorMessage}</div>;

    if (!(coords || errorMessage))
      return <Spinner message="Please accept the location request" />;

    return <SeasonDisplay lat={coords.latitude} />;
  };

  return <div>{content()}</div>;
};

render(<App />, document.getElementById('root'));
