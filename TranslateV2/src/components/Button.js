import React from 'react';

import LanguageContext from '../context/language';
import ColourContext from '../context/colour';

const submits = {
  english: 'Submit',
  french: 'Envoyer',
  german: 'Senden',
};

const Button = () => {
  return (
    <ColourContext.Consumer>
      {colour => (
        <button className={`ui button ${colour}`}>
          <LanguageContext.Consumer>
            {({ language }) => submits[language]}
          </LanguageContext.Consumer>
        </button>
      )}
    </ColourContext.Consumer>
  );
};

export default Button;
