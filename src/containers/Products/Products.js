import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Slider from '../../components/UI/Slider/Slider';
import withErrorHandler from '../../hoc/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
import classes from './Products.css';
import Product from '../../components/Product/Product';

const products = props => {

    const { onFetchProducts } = props;

    useEffect(() => {
        onFetchProducts();
    }, [onFetchProducts])

    let products = <Spinner />

    if (!props.loading) {
        products = props.prodcuts.map(
            product => (
                <Product
                    id={product.id}
                    key={product.id}
                    price={product.price}
                    name={product.name}
                    url={product.url}
                    inStock={product.inStock} />
            )
        )
    }
    return (
        <React.Fragment>
            <Slider />
            <h1 className={classes.Title}>All Products</h1>
            <div className={classes.Products} >
                {products}
            </div>
        </React.Fragment>
    );
};



const mapStateToProps = state => {
    return {
        prodcuts: state.product.products,
        loading: state.product.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: () => dispatch(actions.fetchProducts()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(products, axios));