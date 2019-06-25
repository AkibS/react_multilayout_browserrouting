import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import styles from '../assets/layout/appLayoutStyle';

function Header(props) {

    const { handleDrawerStatus, classes, open,headerText } = props;
    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open
            })}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={handleDrawerStatus}
                    edge="start"
                    style={{alignItems: 'left'}}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                   {headerText}
                </Typography>
            </Toolbar>
        </AppBar>);
}

export default withStyles(styles)(Header);