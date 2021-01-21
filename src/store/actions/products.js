import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchProductsStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_START,
    };
};

export const fetchProductsSuccess= (products) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        products: products,
    }
}

export const fetchProductsFail = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAIL,
    }
}

export const fetchProducts = ()=> {
    return dispatch => {
        dispatch(fetchProductsStart());
        axios.get("https://shop-app-780b7-default-rtdb.firebaseio.com/products.json")
        .then(response => {
            const fetchProducts=[];
            for(let id in response.data) {
                fetchProducts.push({
                    id:id,
                    ...response.data[id],
                });
            }
            dispatch(fetchProductsSuccess(fetchProducts));
        }).catch(err=>{
            console.log(err.message);
            dispatch(fetchProductsFail());
        });
    }
}



