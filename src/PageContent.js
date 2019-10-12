import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
// this is basically a wrapper component
export default class PageContent extends Component {
  static contextType= ThemeContext;
  render() {
    const { isDarkMode } = this.context;
    const styles={
      backgroundColor: isDarkMode ? "darkslategrey" : "#f5f5f5",
      height: "100vh",
      width: "100vw"
    };
    return (
      <div style={styles}>
        {this.props.children} {/** anything nested inbetween pageContent */}
      </div>
    );
  }
}
