import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchProductsStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_START,
    };
};

export const fetchProductsSuccess = (products) => {
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

export const setProductsStart = () => {
    return {
        type: actionTypes.SET_PRODUCT_START,
    }
}

export const setProductSuccess = (product) => {
    return {
        type: actionTypes.SET_PRODUCT_SUCCESS,
        product: product,
    }
}


export const setProductFail = () => {
    return {
        type: actionTypes.SET_PRODUCT_FAIL,
    }
}

export const setQuantity = (quantity) => {
    return {
        type: actionTypes.SET_QUANTITY,
        quantity: quantity,
    }
}

export const setProduct = (id) => {
    return dispatch => {
        dispatch(setProductsStart());
        axios.get(`https://shop-app-780b7-default-rtdb.firebaseio.com/products/${id}.json`)
            .then(response => {
                const product = {
                    id, ...response.data
                };
                dispatch(setProductSuccess(product));
            }).catch(err => {
                console.log("error", err.message);
                dispatch(setProductFail());
            })
    }
}


export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsStart());
        axios.get("https://shop-app-780b7-default-rtdb.firebaseio.com/products.json")
            .then(response => {
                const fetchProducts = [];
                for (let id in response.data) {
                    fetchProducts.push({
                        id: id,
                        ...response.data[id],
                    });
                }
                dispatch(fetchProductsSuccess(fetchProducts));
            }).catch(err => {
                console.log(err.message);
                dispatch(fetchProductsFail());
            });
    }
}



