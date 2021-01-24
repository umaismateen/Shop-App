import * as actionTypes from './actionTypes';
import axios from 'axios';


export const purchaseProductStart = () => {
    return {
        type: actionTypes.PURCHASE_PRODUCT_START,
    }
}

export const purchaseProductSuccess = (id) => {
    return {
        type: actionTypes.PURCHASE_PRODUCT_SUCCESS,
    }
}

export const purchaseProductFail = () => {
    return {
        type: actionTypes.PURCHASE_PRODUCT_FAIL,
    }
}

export const purchaseProduct = orderData => {
    return dispatch => {
        dispatch(purchaseProductStart());
        axios.post("https://shop-app-780b7-default-rtdb.firebaseio.com/orders.json",orderData)
        .then(response => {
            console.log("order",response.data);
            dispatch(purchaseProductSuccess());
        }).catch (err => {
            console.log("order", err.message);
            dispatch(purchaseProductFail());
        } )
    }
} 