import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

const product = props => {

    const id = window.location.pathname.slice(10);
    useEffect(() => {
        if (!props.product) {
            props.onInitProducts(id);
        }
    }, [id])

    let product = (
        <div>
            <p>hello </p>
            <p>hello </p>
            <p>hello </p>
            <p>hello </p>
            <p>hello </p>
            <p>hello </p>
        </div>);
    console.log(props.product)
    if (props.product) {
        product = (
            <div>
                <div>
                    <h2>loly</h2>
                    <h2>loly</h2>
                    <h2>loly</h2>
                    <h2>loly</h2>
                    <h2>{props.product.name}</h2>
                    <h4>{props.product.price}</h4>
                    <h4>{props.product.inStock}</h4>
                </div>
                <img url={props.product.url} />
            </div>
        )
    }
    console.log("helo", product);

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
        onInitProducts: (id) => dispatch(actions.initProduct(id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(product);