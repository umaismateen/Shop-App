import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import classes from './Product.css'
import * as actions from '../../../store/actions/index';

const product = props => {

    const id = window.location.pathname.slice(10);
    const {onSetProduct} = props;
    useEffect(() => {
        onSetProduct(id);
    }, [id, onSetProduct])

    let product = (
        <div>
           <h1>Loading...</h1>
        </div>);
    console.log(props.product)
    if (props.product) {
        product = (
            <div className={classes.Product} >
                <img className={classes.Image} src={props.product.url} alt={props.product.name} />
                <div className={classes.Content} >
                    <h3>{props.product.name}</h3>
                    <h4>Price: PKR {props.product.price}</h4>
                    <h4>{props.product.inStock? "In Stock": "Out Of Stock"}</h4>
                </div>
                <Link to="/browse" className={classes.Button}><div>Buy Now</div></Link>
            </div>
        )
    }
    console.log("helo", props.product);

    return (
        <div>
            {product}
        </div>
    );

}

const mapStateToProps = state => {
    return {
        product: state.product.product,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetProduct: (id) => dispatch(actions.setProduct(id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(product);