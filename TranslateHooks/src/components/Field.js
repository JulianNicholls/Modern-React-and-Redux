import React from 'react';

import { useSettings } from '../context';

const names = {
  english: 'Name',
  french: 'Nom',
  german: 'Namen',
};

const Field = () => {
  const { language } = useSettings();

  return (
    <div className="ui field">
      <label htmlFor="name">{names[language]}</label>
      <input id="name" type="text" />
    </div>
  );
};

export default Field;
