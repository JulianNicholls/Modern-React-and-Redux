import React, { useState } from 'react';

import UserCreate from './UserCreate';
import LanguageContext from '../context/language';
import ColourContext from '../context/colour';

const blobStyle = colour => ({
  display: 'inline-block',
  backgroundColor: `${colour}`,
  width: '1rem',
  height: '1rem',
  marginLeft: '0.25rem',
});

const App = () => {
  const [language, setLanguage] = useState('french');
  const [colour, setColour] = useState('blue');

  return (
    <div className="ui container">
      <div style={{ margin: '1rem 0 0.5rem 0' }}>
        Language:{' '}
        <span className="select-language">
          <i className="flag gb uk" onClick={() => setLanguage('english')} />
          <i className="flag france" onClick={() => setLanguage('french')} />
          <i className="flag germany" onClick={() => setLanguage('german')} />
        </span>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        Colour:
        <div style={blobStyle('red')} onClick={() => setColour('red')} />
        <div style={blobStyle('blue')} onClick={() => setColour('blue')} />
        <div style={blobStyle('green')} onClick={() => setColour('green')} />
      </div>
      {/* This is SO the wrong way to do it! See README. */}
      <ColourContext.Provider value={colour}>
        <LanguageContext.Provider value={language}>
          <UserCreate />
        </LanguageContext.Provider>
      </ColourContext.Provider>
    </div>
  );
};

export default App;
