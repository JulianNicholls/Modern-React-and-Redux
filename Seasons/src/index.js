import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { coords: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ coords: position.coords, errorMessage: '' }),
      error => {
        console.error({ error });
        this.setState({ coords: null, errorMessage: error.message });
      }
    );
  }

  render() {
    const { coords, errorMessage } = this.state;

    return (
      <div>
        Seasons
        {!(coords || errorMessage) && <div>Loading...</div>}
        {coords && (
          <div>
            <div>Lat: {coords.latitude}</div>
            <div>Long: {coords.longitude}</div>
            <div>+- {coords.accuracy}m</div>
          </div>
        )}
        {errorMessage && <div>Error: {errorMessage}</div>}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
