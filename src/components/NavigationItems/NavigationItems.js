import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const navigationItems = props => (

    <ul className={classes.NavigationItems}>
        {/* <NavigationItem link="/" >Logout</NavigationItem> */}
        <NavigationItem link="/"  >Home</NavigationItem>
        <NavigationItem link="/browse" >Browse</NavigationItem>
       {props.isAuth? <NavigationItem link="/orders" >Orders</NavigationItem> :null}
        {
            !props.isAuth ? <NavigationItem link="/auth" >Login</NavigationItem>
           : <NavigationItem link="/logout" >Logout</NavigationItem>
        }
    </ul>

);


export default navigationItems;