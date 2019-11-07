import React from 'react';
import { render } from 'react-dom';

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
      <div className="ui container">
        <h1>Seasons</h1>
        {!(coords || errorMessage) && <div>Loading...</div>}
        {coords && (
          <div className="ui card">
            <div className="content">
              <div>
                Position: {App.latLong(coords.latitude, 'NS')},{' '}
                {App.latLong(coords.longitude, 'EW')}
              </div>
              <div>+- {coords.accuracy}m</div>
            </div>
          </div>
        )}
        {errorMessage && <div>Error: {errorMessage}</div>}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
