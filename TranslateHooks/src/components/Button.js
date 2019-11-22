import React from 'react';

import { useSettings } from '../context';

const submits = {
  english: 'Submit',
  french: 'Envoyer',
  german: 'Senden',
};

const Button = () => {
  const { language, colour } = useSettings();

  return <button className={`ui button ${colour}`}>{submits[language]}</button>;
};

export default Button;
