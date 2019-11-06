import React from 'react';
import { render } from 'react-dom';

const App = () => {
  const buttonText = 'Click me';
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
  };

  return (
    <div>
      <label htmlFor="name" className="label">
        Enter name:
      </label>
      <input type="text" id="name" />
      <button style={buttonStyle}>{buttonText}</button>
    </div>
  );
};

render(<App />, document.querySelector('#root'));
