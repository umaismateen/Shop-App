import React, {useState} from 'react'
import {connect} from 'react-redux';

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
            <Toolbar isAuth={props.isAuth} toggle={toggleSideDrawerHandler} />
            <SideDrawer
                isAuth={props.isAuth}
                open={showSideDrawer} closed={sideDrawerClosedHandler} />
            {props.children}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !==null,
    }
}

export default connect(mapStateToProps)(layout);