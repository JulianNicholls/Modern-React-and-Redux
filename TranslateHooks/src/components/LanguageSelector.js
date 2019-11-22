import React from 'react';

import { useSettings } from '../context';

const LanguageSelector = () => {
  const { setLanguage } = useSettings();

  return (
    <div style={{ margin: '1rem 0 0.5rem 0' }}>
      Language:{' '}
      <span className="select-language">
        <i className="flag gb uk" onClick={() => setLanguage('english')} />
        <i className="flag france" onClick={() => setLanguage('french')} />
        <i className="flag germany" onClick={() => setLanguage('german')} />
      </span>
    </div>
  );
};

export default LanguageSelector;
