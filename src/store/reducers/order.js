import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: false,
    purchased: false,
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_PRODUCT_START: return purchaseProductStart(state, action);
        case actionTypes.PURCHASE_PRODUCT_SUCCESS: return purchaseProductSuccess(state, action);
        case actionTypes.PURCHASE_PRODUCT_FAIL: return purchaseProductFail(state, action);

        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail(state, action);

        case actionTypes.DELETE_ORDER_START: return deleteOrderStart(state, action);
        case actionTypes.DELETE_ORDER_SUCCESS: return deleteOrderSuccess(state, action);
        case actionTypes.DELETE_ORDER_FAIL: return deleteOrderFail(state, action);

        default:
            return state;
    }

}

const purchaseProductStart = (state, action) => {
    return {
        ...state,
        loading: true,
    }
}
const purchaseProductSuccess = (state, action) => {
    return {
        ...state,
        purchased: true,
        loading: false,
    }
}
const purchaseProductFail = (state, action) => {
    return {
        ...state,
        purchased: false,
        loading: false,
    }
}

const fetchOrdersStart = (state, action) => {
    return {
        ...state,
        loading: true,
    }
}
const fetchOrdersSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        orders: action.orders,
    }
}
const fetchOrdersFail = (state, action) => {
    return {
        ...state,
        loading: false,
    }
}

const deleteOrderStart = (state, action) => {
    return {
        ...state,
        loading: true,
    }
}
const deleteOrderSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        orders: state.orders.filter(order => order.id !== action.id)
    }
}
const deleteOrderFail = (state, action) => {
    return {
        ...state,
        loading: false,
    }
}

export default reducer;