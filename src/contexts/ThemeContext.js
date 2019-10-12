import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { isDarkMode: true };
  };
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, tasteLikeChicken: true }}>
        {this.props.children} {/**what's inside of it should be able to consume value={{}} */}
      </ThemeContext.Provider>
    )
  }
}