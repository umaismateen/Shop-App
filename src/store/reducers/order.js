import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: false,
    purchased: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_PRODUCT_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.PURCHASE_PRODUCT_SUCCESS: {
            return {
                ...state,
                purchased: true,
                loading: false,
            }
        }
        case actionTypes.PURCHASE_PRODUCT_FAIL:
            return {
                ...state,
                purchased: false,
                loading: false,
            }
        case actionTypes.FETCH_PRODUCTS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.orders,
            }
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false,
            }
        case actionTypes.DELETE_ORDER_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.DELETE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: state.orders.filter(order => order.id !== action.id)
            }
        case actionTypes.DELETE_ORDER_FAIL:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }

}

export default reducer;