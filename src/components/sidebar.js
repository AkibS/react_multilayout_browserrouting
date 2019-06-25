import React from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from '../assets/layout/appLayoutStyle';
import { MenuList } from '../data'
//import logo from '../assets/containers/login/logo.png'

function Sidebar(props) {
    const { classes, open, setHeaderText } = props;

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
            open={open}
        >
            <div className={classes.toolbar}>
                {/* <img src={logo} alt="Logo" className={classes.logoImage} /> */}
                Logo
            </div>
            <Divider />
            <List>
                {MenuList.map((item, index) => (
                    <Link to={item.url} className={classes.linkDecoration} key={index} onClick={(e)=>{e.stopPropagation(); setHeaderText(item.text)}}>
                        <ListItem button>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    </Link>

                ))}
            </List>
        </Drawer >
    );
}

export default withStyles(styles)(Sidebar)

