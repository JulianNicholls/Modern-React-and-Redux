import React from 'react';

import LanguageContext from '../context/language';

const submits = {
  english: 'Submit',
  french: 'Envoyer',
  german: 'Senden',
};

const Button = () => {
  return (
    <LanguageContext.Consumer>
      {value => <button className="ui button primary">{submits[value]}</button>}
    </LanguageContext.Consumer>
  );
};

export default Button;
