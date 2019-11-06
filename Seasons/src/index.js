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
    return (
      <div>
        Seasons
        {this.state.coords && (
          <div>
            <div>Lat: {this.state.coords.latitude}</div>
            <div>Long: {this.state.coords.longitude}</div>
            <div>+- {this.state.coords.accuracy}m</div>
          </div>
        )}
        {this.state.errorMessage && <div>Error: {this.state.errorMessage}</div>}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
