import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';
import styles from './styles/NavBarStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';

const content = {
  english: {
    search: "Search",
    flag: "🇬🇧"
  },
  french: {
    search: "Chercher",
    flag: "🇫🇷"
  },
  spanish: {
    search: "Buscar",
    flag: "🇪🇸"
  }
};

function Navbar(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { classes } = props;
  const { search, flag } = content[language];
  return (
    <div className={classes.root}>
      <AppBar 
        position="static" 
        color={isDarkMode ? "default" : "primary"}
      >
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span>{flag}</span>
          </IconButton>
          <Typography 
            className={classes.title} 
            variant="h6" 
            color="inherit"
          >
            App title
          </Typography>
          <Switch onChange={toggleTheme} /> {/**Adds toggle button in this case to go from dark to light */}
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase  // look it up
              placeholder={`${search}...`} 
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);

/**
 * import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ThemeContext } from './contexts/ThemeContext';
import { withLanguageContext } from './contexts/LanguageContext';
import styles from './styles/NavBarStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';

const content = {
  english: {
    search: "Search",
    flag: "🇬🇧"
  },
  french: {
    search: "Chercher",
    flag: "🇫🇷"
  },
  spanish: {
    search: "Buscar",
    flag: "🇪🇸"
  }
};

class Navbar extends Component {
  static contextType = ThemeContext; /** It says look up and see if you are nested inside of a theme
  context provider, if you are inside more than one find the nearest one 
  render() {
    const { isDarkMode, toggleTheme } = this.context; // console.log(this.context);
    const { classes } = this.props;
    const { language } = this.props.languageContext; // passed dowen through HOC
    const { search, flag } = content[language];
    return (
      <div className={classes.root}>
        <AppBar 
          position="static" 
          color={isDarkMode ? "default" : "primary"}
        >
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span>{flag}</span>
            </IconButton>
            <Typography 
              className={classes.title} 
              variant="h6" 
              color="inherit"
            >
              App title
            </Typography>
            <Switch onChange={toggleTheme} /> {/**Adds toggle button in this case to go from dark to light *}
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase  // look it up
                placeholder={`${search}...`} 
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withLanguageContext(withStyles(styles)(Navbar));

 */
