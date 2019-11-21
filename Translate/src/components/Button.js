import React from 'react';

import LanguageContext from '../context/language';

const submits = {
  english: 'Submit',
  french: 'Envoyer',
  german: 'Senden',
};

class Button extends React.Component {
  static contextType = LanguageContext;

  render() {
    return <button className="ui button primary">{submits[this.context]}</button>;
  }
}

export default Button;
