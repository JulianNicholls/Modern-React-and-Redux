import React from 'react';
import { render } from 'react-dom';

import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

class App extends React.Component {
  state = {
    coords: null,
    errorMessage: '',
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ coords: position.coords }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  static latLong(value, directions) {
    return (
      Math.abs(value).toFixed(4) + (value > 0.0 ? directions[0] : directions[1])
    );
  }

  render() {
    const { coords, errorMessage } = this.state;

    return (
      <div>
        {!(coords || errorMessage) && (
          <Spinner message="Please accept the location request" />
        )}
        {coords && <SeasonDisplay lat={coords.latitude} />}
        {errorMessage && <div>Error: {errorMessage}</div>}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
