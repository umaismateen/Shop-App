import React from 'react';

import classes from './Product.css';

const product = props => (
    <div className={classes.Product}>
        <img className={classes.Image} src={props.url} alt={props.name} />
        <h3>{props.name}</h3>
        <h4>Price: PKR {props.price}</h4>
        <h5>{props.inStock?"In Stock" : "Out Of Stock"}</h5>
        <a href="" className={classes.Button}>Buy Now</a>
    </div>
);

export default product;