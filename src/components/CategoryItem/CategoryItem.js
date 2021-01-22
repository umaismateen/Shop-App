import React from 'react';

import classes from './CategoryItem.css';

const categoryItem = props => {

    return (
        <div className={classes.CategoryItem} >
            <img className={classes.Image} src={props.url} alt={props.name} />
            <h3>{props.name}</h3>
        </div>
    )
}



export default categoryItem;