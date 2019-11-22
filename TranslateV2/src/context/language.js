import React from 'react';

const Context = React.createContext();

export class LanguageStore extends React.Component {
  state = { language: 'french' };

  setLanguage = language => {
    this.setState({ language });
  };

  render() {
    const store = {
      ...this.state,
      setLanguage: this.setLanguage,
    };

    const { children } = this.props;

    return <Context.Provider value={store}>{children}</Context.Provider>;
  }
}

export default Context;
