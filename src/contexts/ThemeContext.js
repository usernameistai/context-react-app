import React, { createContext } from 'react';
import useToggleState from '../hooks/useToggleState';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkMode, toggleTheme] = useToggleState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

/**
 * 
 * import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { isDarkMode: true };
    this.toggleTheme = this.toggleTheme.bind(this);
  };
  toggleTheme() {
    this.setState({ isDarkMode: !this.state.isDarkMode })
  }
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
        {this.props.children} {/**what's inside of it should be able to consume value={{}} *
        </ThemeContext.Provider>
        );
      }
    }
 */