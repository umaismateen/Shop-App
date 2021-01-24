import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Product.css';

const product = props => (
    <div className={classes.Product}>
        <img className={classes.Image} src={props.url} alt={props.name} />
        <h3>{props.name}</h3>
        <h4>Price: PKR {props.price}</h4>
        <h5>{props.inStock?"In Stock" : "Out Of Stock"}</h5>
        <Link to={`/products/${props.id}`} className={classes.Button}>Buy Now</Link>
    </div>
);

export default product;
