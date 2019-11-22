import React from 'react';

import LanguageSelector from './LanguageSelector';
import UserCreate from './UserCreate';
import { useSettings } from '../context';

const blobStyle = colour => ({
  display: 'inline-block',
  backgroundColor: `${colour}`,
  width: '1rem',
  height: '1rem',
  marginLeft: '0.25rem',
});

const App = () => {
  const { setColour } = useSettings();

  return (
    <div className="ui container">
      <LanguageSelector />
      <div style={{ marginBottom: '1rem' }}>
        Colour:
        <div style={blobStyle('red')} onClick={() => setColour('red')} />
        <div style={blobStyle('blue')} onClick={() => setColour('blue')} />
        <div style={blobStyle('green')} onClick={() => setColour('green')} />
      </div>

      <UserCreate />
    </div>
  );
};

export default App;
