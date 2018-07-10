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
        <Grid item xs={12} md={6}>
         {isLoading(this.props.memsStore.isLoading)}
          
          <GridList cols={1} cellHeight={240} className={classes.gridList} style={{backgroundColor: "#fff", display: (this.props.memsStore.isLoading) ? 'none':''}}>
            {this.props.memsStore.mems.map(item => {
                return (
                    <GridListTile key="Subheader" cols={1} key={item.photoUrl}>
                        <img src={"/mems/"+item.photoUrl+".jpg"} alt={item.photoUrl} />
                        <GridListTileBar
                            title={item.name}
                            subtitle={<span>by: {item.autor}</span>}
                        />
                    </GridListTile>
                )   
              }) 
            }
          </GridList>
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