import React, { useState } from 'react';

import UserCreate from './UserCreate';
import LanguageContext from '../context/language';

const App = () => {
  const [language, setLanguage] = useState('french');

  return (
    <div className="ui container">
      <div>
        Select a language: ({language}){' '}
        <span className="select-language">
          <i className="flag gb uk" onClick={() => setLanguage('english')} />
          <i className="flag france" onClick={() => setLanguage('french')} />
          <i className="flag germany" onClick={() => setLanguage('german')} />
        </span>
        <LanguageContext.Provider value={language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    </div>
  );
};

export default App;
