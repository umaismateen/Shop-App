import React from 'react';

import classes from './OrderSummary.css';

const orderSummary = props => (
    <div className={classes.OrderSummary} >
        <h1>Order Summary</h1>
        <div className={classes.Content} >
            <h3>{props.name}</h3>
            <h5>Quantity: 1</h5>
            <h5>Total Price: {props.price}</h5>
        </div>
    </div>
);

export default orderSummary;