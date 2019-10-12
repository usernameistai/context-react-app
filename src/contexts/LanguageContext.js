import React, { Component, createContext } from 'react';

export const LanguageContext  = createContext();

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { language: "french"};
    this.changeLanguage = this.changeLanguage.bind(this);
  };
  changeLanguage(e) {
    this.setState({ language: e.target.value});
  };
  render() {
    return(
      <LanguageContext.Provider value={{ ...this.state, changeLanguage: this.changeLanguage }}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export const withLanguageContext = Component => props => ( // HOC higher order component
  <LanguageContext.Consumer>
    {value => <Component languageContext={value} {...props} />}
  </LanguageContext.Consumer>
);