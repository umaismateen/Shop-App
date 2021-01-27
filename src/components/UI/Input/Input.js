import React from 'react';
import classes from './Input.css';
const input = props => {

    let inputElement = null;
    const labelClasses = [classes.Label];
    const spanClasses = [classes.Content];

    if (props.invalid && props.shouldValidate && props.touched) {
        labelClasses.push(classes.Invalid);
        spanClasses.push(classes.InvalidSpan);
    }

    inputElement = (
        <div className={classes.Container}>
            <input type={props.type} onChange={props.changed} className={classes.InputElement} value={props.value} required />
            <label className={labelClasses.join(' ')} >
                <span className={spanClasses.join(' ')} > {"  "+props.label}</span>
            </label>
        </div>
    )

    return inputElement;
   
}

export default input;