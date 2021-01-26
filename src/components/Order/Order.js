import React from 'react';

import classes from './Order.css'

const order = (props) => {
    return (
        <div className={classes.Order}>
            <h2>{props.name}</h2>
            <h3>Quantity: {props.quantity}</h3>
            <h3>Total Price: {props.totalPrice}</h3>
            <button onClick={()=>props.clicked(props.id)} className={classes.Button}>Cancel Order</button>
        </div>
    )
}

export default order;