import * as actionTypes from './actionTypes';
import axios from 'axios';
import urlKey from '../../Keys/urlKey';

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

export const purchaseProduct = (orderData,token) => {
    return dispatch => {
        dispatch(purchaseProductStart());
        axios.post(`${urlKey}/orders.json?auth=${token}`,orderData)
        .then(response => {
            dispatch(purchaseProductSuccess());
        }).catch (err => {
            dispatch(purchaseProductFail());
        } )
    }
} 


export const fetchOrdersStart= () => {
    return {
        type: actionTypes.FETCH_ORDERS_START,
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
         type: actionTypes.FETCH_ORDERS_SUCCESS,
         orders: orders,
    }
}

export const fetchOrdersFail = () => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
    }
}

export const fetchOrders = (token,userId) => {
    return  dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get(`${urlKey}/orders.json?auth=${queryParams}`)
            .then(response => {
                const fetchOrders = [];
                for (let id in response.data) {
                    fetchOrders.push({
                        id: id,
                        name:response.data[id].name,
                        quantity: response.data[id].quantity,
                        totalPrice: response.data[id].totalPrice,
                    });
                }
                dispatch(fetchOrdersSuccess(fetchOrders))
            }).catch(() => {
                dispatch(fetchOrdersFail());
            });
    }
}

 
export const deleteOrderSuccess = (id) =>{
    return {
        type: actionTypes.DELETE_ORDER_SUCCESS,
        id: id,
    }
}

export const deleteOrderFail = () => {
    return {
        type: actionTypes.DELETE_ORDER_FAIL,
    }
}

export const deleteOrderStart = () => {
    return {
        type: actionTypes.DELETE_ORDER_START,
    }
}

export const deleteOrder = (id) => {
    return dispatch =>{
        axios.delete(`${urlKey}/orders/${id}.json`)
        .then(response =>{
            dispatch(deleteOrderStart());
            dispatch(deleteOrderSuccess(id));
        }).catch(err => {
            dispatch(deleteOrderFail());
        })
    }
}
