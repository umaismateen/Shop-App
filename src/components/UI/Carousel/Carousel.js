// import React from 'react';

// // import { Carousel } from 'react-responsive-carousel';
// // import "react-responsive-carousel/lib/styles/carousel.min.css";
// // import 'react-responsive-carousel/lib/styles/carousel.min.css';
// // import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // import Carousel from 'react-bootstrap/Carousel';
// import { image1, image2, image3 } from '../../../assets/Image';
// // import './Car.scss';
// // import { Carousel } from 'reactstrap';
// // import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/js/dist/carousel';
// import Carousel from 'react-bootstrap/Carousel';

// const urls = [image1, image2, image3];

// const carousel = () => {
//     const images = urls.map((url,index) => (
//         <div><img key={index} src={url} /></div>
//     ))
//     return (

        
      

//     )
// };

// export default carousel;


import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
            >
                <Slider>
                    <Slide index={0}>I am the first Slide.</Slide>
                    <Slide index={1}>I am the second Slide.</Slide>
                    <Slide index={2}>I am the third Slide.</Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        );
    }
}