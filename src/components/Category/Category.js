import React from 'react';

import classes from './Category.css';

const category = props => {
    return (
        <div className={classes.Category} onClick={()=>props.categorySelector(props.name)} >
            <img className={classes.Image} src={props.url} alt={props.name} />
            <h3>{props.name}</h3>
        </div>
    )
}

export default category;