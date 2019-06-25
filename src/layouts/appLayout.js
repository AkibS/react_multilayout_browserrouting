import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

//app components
import styles from '../assets/layout/appLayoutStyle';
import Header from '../components/header'
import Sidebar from '../components/sidebar'


class AppLayout extends React.Component {

  constructor(props) {
    super();

    this.state = {
      open: true,
      headerText: "Dashboard"
    };

  }

  handleDrawerStatus() {
    this.setState({ open: !this.state.open });
  }

  setHeaderText(value) {
    this.setState({ headerText: value })
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header handleDrawerStatus={this.handleDrawerStatus.bind(this)} open={this.state.open} headerText={this.state.headerText}/>
        <Sidebar handleDrawerStatus={this.handleDrawerStatus.bind(this)} open={this.state.open} setHeaderText={this.setHeaderText.bind(this)} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }

}

export default withStyles(styles)(AppLayout)