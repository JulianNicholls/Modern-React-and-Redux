import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = { position: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ position });
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
        {this.state.position && (
          <div>
            <div>Lat: {this.state.position.coords.latitude}</div>
            <div>Long: {this.state.position.coords.longitude}</div>
            <div>+- {this.state.position.coords.accuracy}m</div>
          </div>
        )}
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));
