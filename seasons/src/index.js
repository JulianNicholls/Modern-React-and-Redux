import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = { coords: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ coords: position.coords });
      },
      error => {
        console.error({ error });
      }
    );
  }

  render() {
    return (
      <div>
        Seasons start
        {this.state.coords && (
          <div>
            <div>Lat: {this.state.coords.latitude}</div>
            <div>Long: {this.state.coords.longitude}</div>
            <div>+- {this.state.coords.accuracy}m</div>
          </div>
        )}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
