import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import withErrorHandler from '../../../hoc/withErrorHandler';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Modal from '../../../components/UI/Modal/Modal';
import Button from '../../../components/UI/Button/Button';
import classes from './Product.css'
import * as actions from '../../../store/actions/index';

const product = props => {

    const [purchasing, setPurchasing] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const id = window.location.pathname.slice(10);
    const { onSetProduct } = props;
    useEffect(() => {
        onSetProduct(id);
    }, [id, onSetProduct])


    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        if(props.isAuth){
        setPurchasing(true);
        }else {
            props.history.push('/auth')
        }
    } 



    let modal = null;



    let product = null;
    if (props.product) {
        const disabled = props.product.inStock;
        modal = (
            <Modal show={purchasing} modalClosed={purchaseCancelHandler} >
                <h2>{props.product.name}</h2>
                <h4>Quantity: {quantity <= 1}</h4>
                <div className={classes.ButtonHandler} >
                    <button disabled={disabled} onClick={() => setQuantity(quantity - 1)} className={classes.Button2} >-</button>
                    <input type="text" readOnly className={classes.Input} value={quantity} />
                    <button onClick={() => setQuantity(quantity + 1)} className={classes.Button2} >+</button>
                </div>
                <h4>Total Price: PKR {props.product.price * quantity}</h4>
                <Button clicked={purchaseCancelHandler} btnType="Danger" > Cancel</Button>
                <Link to="/checkout" onClick={() => props.onSetQuantity(quantity)} ><Button btnType="Success" > Continue</Button></Link>
            </Modal>
        );
        product = (
            <div className={classes.Product} >
                <img className={classes.Image} src={props.product.url} alt={props.product.name} />
                <div className={classes.Content} >
                    <h3>{props.product.name}</h3>
                    <h4>Price: PKR {props.product.price}</h4>
                    <h4
                        style={{ color: disabled ? "#5C9210" : "#944317" }}
                    >{props.product.inStock ? "In Stock" : "Out Of Stock"}</h4>
                </div>
                {disabled ?
                    <a className={classes.Button}
                        onClick={purchaseContinueHandler}><div>{props.isAuth?'Buy Now':'Sign Up To Order'}</div></a> : null}
            </div>
        )
    }

    if(props.loading){
        product = <Spinner />
    }


    return (
        <div>
            {modal}
            {product}
        </div>
    );

}

const mapStateToProps = state => {
    return {
        product: state.product.product,
        purchasing: state.product.purchasing,
        isAuth: state.auth.token !== null,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetProduct: (id) => dispatch(actions.setProduct(id)),
        onSetQuantity: (quantity) => dispatch(actions.setQuantity(quantity))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( product,axios));