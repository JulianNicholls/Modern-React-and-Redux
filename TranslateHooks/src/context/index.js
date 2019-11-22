import React, { useState, useContext } from 'react';

const SettingsContext = React.createContext();

export const SettingsProvider = ({ children }) => {
  const [language, setLanguage] = useState('french');
  const [colour, setColour] = useState('blue');

  const state = {
    language,
    colour,
    setLanguage,
    setColour,
  };

  return (
    <SettingsContext.Provider value={state}>{children}</SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);

  if (context === undefined)
    throw new Error('useSettings() must be used within a SettingsProvider block');

  return context;
};
