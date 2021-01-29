import React from 'react';

import classes from './Order.css'

const order = (props) => {
    return (
        <div className={classes.Order}>
            <h2>{props.name}</h2>
            <p>Quantity: <b>{props.quantity}</b></p>
            <p>Total Price: <b>{props.totalPrice} PKR</b></p>
            <button onClick={()=>props.clicked(props.id)} className={classes.Button}>Cancel Order</button>
        </div>
    )
}

export default order;