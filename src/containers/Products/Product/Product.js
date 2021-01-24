import React, { useEffect,useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Modal from '../../../components/UI/Modal/Modal';
import Button from '../../../components/UI/Button/Button';

import classes from './Product.css'
import * as actions from '../../../store/actions/index';

const product = props => {

    const [purchasing, setPurchasing] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const id = window.location.pathname.slice(10);
    const {onSetProduct} = props;
    useEffect(() => {
        onSetProduct(id);
    }, [id, onSetProduct])


    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler= ()=>{
        setPurchasing(true);
    }



    let modal= null;

    const disabled = quantity<=1;

    if(purchasing){
        modal= (
            <Modal show={purchasing} modalCLosed={purchaseCancelHandler} >
                <h2>{props.product.name}</h2>
                <h4>Quantity: {quantity}</h4>
                <div className={classes.ButtonHandler} >
                <button disabled={disabled} onClick={() => setQuantity(quantity - 1)} className={classes.Button2} >-</button>
                <input type="text" className={classes.Input} value={quantity}  />
                <button onClick={()=>setQuantity(quantity+1)} className={classes.Button2} >+</button>
                </div>
                <h4>Total Price: PKR {props.product.price*quantity}</h4>
                <Button clicked={purchaseCancelHandler} btnType="Danger" > Cancel</Button>
                <Link to="/checkout" ><Button btnType="Success" > Continue</Button></Link>
            </Modal>
        )
    }

    let product = ( <div>
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
                <a onClick={purchaseContinueHandler} className={classes.Button}><div>Buy Now</div></a>
            </div>
        )
    }
    console.log("helo", props.product);

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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetProduct: (id) => dispatch(actions.setProduct(id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(product);