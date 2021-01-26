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

export const fetchOrders = () => {
    return  dispatch => {
        dispatch(fetchOrdersStart());
        axios.get("https://shop-app-780b7-default-rtdb.firebaseio.com/orders.json")
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
                console.log(fetchOrders);
                dispatch(fetchOrdersSuccess(fetchOrders))
            }).catch(err => {
                console.log(err.message);
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
        axios.delete(`https://shop-app-780b7-default-rtdb.firebaseio.com/orders/${id}.json`)
        .then(response =>{
            dispatch(deleteOrderStart());
        console.log("order delete",response.data);
            dispatch(deleteOrderSuccess(id));
        }).catch(err => {
            dispatch(deleteOrderFail());
            console.log("order delete",err.message);
        })
    }
}
