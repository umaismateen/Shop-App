import React from 'react';

// import Logo from '../../Logo/Logo';
import NavigationItems from '../../NavigationItems/NavigationItems';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../Auxiliry/Auxiliry';

import classes from './SideDrawer.css'

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div onClick={props.closed} className={attachedClasses.join(' ')}>
                {/* <Logo height="11%" /> */}
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth} />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;