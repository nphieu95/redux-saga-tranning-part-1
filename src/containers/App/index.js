import { ThemeProvider, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import theme from '../../commons/Theme';
import TaskBoard from '../Taskboard';
import styles from './styles';

export class App extends Component {
  render() {
    // const {classes} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <TaskBoard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
