import React from 'react';
import ReactDOM from 'react-dom';
import MainAppBar from './MainAppBar'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const App = (props) => {
  return (
      <MuiThemeProvider>
          <MainAppBar />
      </MuiThemeProvider>
 
);
};

export default App;