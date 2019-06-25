
import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import styles from '../assets/layout/loginLayoutStyle'
import { withStyles } from '@material-ui/core/styles';

class LoginLayout extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
       <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
          {this.props.children}
        </Grid>
        <Grid item xs={false} sm={4} md={8} className={classes.image} />
      </Grid>
    );
  }
}

export default withStyles(styles)(LoginLayout);