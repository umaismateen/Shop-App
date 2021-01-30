import React from 'react';

import images from '../../../assets/Image';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import classes from './slider.css';

const items = images.map((image, index) => (
    <Paper className={classes.Image} style={{backgroundColor: "#222"}} key={index}>
        <img className={classes.Img} src={image} />
    </Paper>
))

function slider(props) {

    return (
        <div className={classes.Slider}>
            <Carousel indicators={false} navButtonsAlwaysVisible >
                {items}
            </Carousel>
        </div>
    )
}
export default slider;
