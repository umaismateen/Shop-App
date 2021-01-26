import React from 'react';

import classes from './Spinner.css';

const spinner = props => (
    <div className={classes.wrap}>
        <div className={classes.spinnerWrap}>
            <div className={classes.spinner}>
                <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
            </div>
        </div>
    </div>
)

export default spinner;