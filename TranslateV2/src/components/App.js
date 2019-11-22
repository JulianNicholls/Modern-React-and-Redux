import React, { useState } from 'react';

import LanguageSelector from './LanguageSelector';
import UserCreate from './UserCreate';
import { LanguageStore } from '../context/language';
import ColourContext from '../context/colour';

const blobStyle = colour => ({
  display: 'inline-block',
  backgroundColor: `${colour}`,
  width: '1rem',
  height: '1rem',
  marginLeft: '0.25rem',
});

const App = () => {
  const [colour, setColour] = useState('blue');

  return (
    <div className="ui container">
      <LanguageStore>
        <LanguageSelector />

        <div style={{ marginBottom: '1rem' }}>
          Colour:
          <div style={blobStyle('red')} onClick={() => setColour('red')} />
          <div style={blobStyle('blue')} onClick={() => setColour('blue')} />
          <div style={blobStyle('green')} onClick={() => setColour('green')} />
        </div>

        <ColourContext.Provider value={colour}>
          <UserCreate />
        </ColourContext.Provider>
      </LanguageStore>
    </div>
  );
};

export default App;
