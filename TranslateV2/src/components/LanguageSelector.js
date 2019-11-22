import React from 'react';

import LanguageContext from '../context/language';

const LanguageSelector = ({ setLanguage }) => {
  return (
    <LanguageContext.Consumer>
      {({ setLanguage }) => (
        <div style={{ margin: '1rem 0 0.5rem 0' }}>
          Language:{' '}
          <span className="select-language">
            <i className="flag gb uk" onClick={() => setLanguage('english')} />
            <i className="flag france" onClick={() => setLanguage('french')} />
            <i className="flag germany" onClick={() => setLanguage('german')} />
          </span>
        </div>
      )}
    </LanguageContext.Consumer>
  );
};

export default LanguageSelector;
