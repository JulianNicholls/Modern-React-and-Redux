import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = { coords: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ coords: position.coords }),
      error => this.setState({ errorMessage: error.message })
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
              <div>Lat: {coords.latitude}</div>
              <div>Long: {coords.longitude}</div>
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
