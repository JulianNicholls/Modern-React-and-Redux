import React from 'react';

import LanguageContext from '../context/language';

const names = {
  english: 'Name',
  french: 'Nom',
  german: 'Namen',
};

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div className="ui field">
        <label htmlFor="name">{names[this.context]}</label>
        <input id="name" type="text" />
      </div>
    );
  }
}

export default Field;
