import React from 'react';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';

const  isLoading = (isLoading) => {
    if(isLoading) {
      return <Grid item xs={12} md={12} style={{textAlign: "center"}}><CircularProgress /></Grid>
    }
}

export default isLoading;