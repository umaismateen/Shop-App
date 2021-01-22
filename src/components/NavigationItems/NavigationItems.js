import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const navigationItems = props => (

    <ul className={classes.NavigationItems}>
        {/* <NavigationItem link="/" >Logout</NavigationItem> */}
        <NavigationItem link="/browse" >Browse</NavigationItem>
        <NavigationItem link="/"  >Buy</NavigationItem>
    </ul>

    );


export default navigationItems;