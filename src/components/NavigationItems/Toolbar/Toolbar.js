import React from 'react';
import NavigationItems from '../NavigationItems';
import DrawerToggle from '../../UI/SideDrawer/DrawerToggler/DrawerToggler';
import classes from './Toolbar.css';
const toolbar = props => {
    return(
        <header className={classes.Toolbar}>
            <DrawerToggle toggle={props.toggle} />
            <div >
                <span>SHOP APP</span>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems isAuth={props.isAuth} />
            </nav>
        </header>
    );
}


export default toolbar;