import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/mems';
import {
  Link
} from 'react-router-dom'
import { CircularProgress } from 'material-ui/Progress';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import GridList from 'material-ui/GridList';
import GridListTile from 'material-ui/GridList';
import GridListTileBar from 'material-ui/GridList';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Store from 'material-ui-icons/Store';
import { withStyles } from 'material-ui/styles';
import mainStyles from '../styles/mainStyles';

class Mems extends React.Component {
  componentDidMount() {
    this.props.getMems();
  }



  render() {
    const { classes, theme } = this.props;
    return(
      <main>
        <Grid container >
            <Grid item xs={6} sm={3}>
            </Grid>
         <Grid item xs={12} sm={6}>
         {isLoading(this.props.memsStore.isLoading)}
          
          <List className={classes.gridList} style={{backgroundColor: "#fff", display: (this.props.memsStore.isLoading) ? 'none':''}}>
            {this.props.memsStore.mems.map(item => {
                return (
                    <ListItem key="Subheader" cols={1} key={item.photoUrl}>
                        <img src={"/mems/"+item.photoUrl+".jpg"} alt={item.photoUrl} />
                        <ListItemText
                            primary={item.name}
                            secondary={<span>by: {item.autor}</span>}
                        />
                    </ListItem>
                )   
              }) 
            }
          </List>
          </Grid>
            <Grid item xs={6} sm={3}>
            </Grid>
          </Grid>
      </main>
    );

  }
}

const  isLoading = (isLoading) => {
  if(isLoading) {
    return <Grid item xs={12} md={12} style={{textAlign: "center"}}><CircularProgress /></Grid>
  }
 }

const mapStateToProps = (state) => {
  return {
    ...state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (data) => dispatch(actions.setData(data)),
    getMems: () => dispatch(actions.getMems())
  };
}


export default withStyles(mainStyles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(Mems));