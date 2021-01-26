import React, {useState} from 'react'
import Toolbar from '../NavigationItems/Toolbar/Toolbar';

import SideDrawer from '../UI/SideDrawer/SideDrawer';


const layout = props => {

    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }
    const toggleSideDrawerHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

    return (
        <div>
            <Toolbar toggle={toggleSideDrawerHandler} />
            <SideDrawer
                // isAuth={props.isAuthenticated}
                open={showSideDrawer} closed={sideDrawerClosedHandler} />
            {props.children}
        </div>
    )
}

export default layout;