import React from 'react';
import {Link} from 'react-router-dom';
import classes from './CategoryItem.css';

const categoryItem = props => {

    return (
        <Link className={classes.CategoryItem} to={`/products/${props.id}`} >
            <div className={classes.Item} >
                <img className={classes.Image} src={props.url} alt={props.name} />
                <h3>{props.name}</h3>
            </div>
            <div className={classes.ArrowRight} ></div>
        </Link>
    )
}

export default categoryItem;