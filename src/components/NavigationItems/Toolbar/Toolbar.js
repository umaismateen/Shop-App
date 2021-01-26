import React from 'react';
import NavigationItems from '../NavigationItems';
import DrawerToggle from '../../UI/SideDrawer/DrawerToggler/DrawerToggler';
import classes from './Toolbar.css';
const toolbar = props => {
    return(
        <header className={classes.Toolbar}>
            <DrawerToggle toggle={props.toggle} />
            <div onClick={props.toggle} className={classes.Logo} >
                <span>LOGO</span>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems  />
            </nav>
        </header>
    );
}


export default toolbar;