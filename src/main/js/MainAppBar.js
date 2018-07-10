import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import DashboardIcon from 'material-ui-icons/Dashboard';

import Store from 'material-ui-icons/Store';

import mainStyles from './styles/mainStyles';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
  } from 'react-router-dom';

  import Mems from './Mems/Mems';
  class MainAppBar extends React.Component {
    state = {
      open: false
    };
    render() {
        const { classes, theme } = this.props;
        return (

        <Router>
          <div className={classes.root}>
          <Switch>
          <Route path="" render={props => (

            <div className={classes.appFrame}>
              <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                <Toolbar>
                  <Typography type="title" color="inherit" noWrap>
                    memy
                  </Typography>

                </Toolbar>
              </AppBar>
              <main className={classes.content}>
                  <div>
                      <Route exact path="/" component={Mems} />
                      <Route exact path="/memy" component={Mems} />
                  </div>
              </main>
            </div>

           )}/>
             </Switch>
             </div>
         </Router>

        );
      }
    }
    
    MainAppBar.propTypes = {
      classes: PropTypes.object.isRequired,
      theme: PropTypes.object.isRequired,
    };
    
    export default withStyles(mainStyles, { withTheme: true })(MainAppBar);