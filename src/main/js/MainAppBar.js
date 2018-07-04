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
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import DashboardIcon from 'material-ui-icons/Dashboard';
import DirectionsRunIcon from 'material-ui-icons/DirectionsRun';
import Store from 'material-ui-icons/Store';
import SettingsIcon from 'material-ui-icons/Settings';
import ExitToApp from 'material-ui-icons/ExitToApp';
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
                <Toolbar disableGutters={!this.state.open}>
                  <Typography type="title" color="inherit" noWrap>
                    memy 
                  </Typography>
                  
                </Toolbar>
              </AppBar>
              <Drawer
                type="permanent"
                classes={{
                  paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                }}
                open={this.state.open}
              >
                <div className={classes.drawerInner}>
                  <Divider />
                  <List className={classes.list}>
                    <NavLink to="" className={classes.menuLink}>
                      <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Memy"  />
                      </ListItem>
                    </NavLink>
                    <NavLink to="/memy" className={classes.menuLink}>
                      <ListItem button>
                        <ListItemIcon>
                          <Store />
                        </ListItemIcon>  
                        <ListItemText primary="Memy" />
                      </ListItem>
                    </NavLink>
                  </List>
                  <Divider />
                </div>
              </Drawer>
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