import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [],
    loading: false,
    product: null,
    quantity: 1,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS_START: return fetchProductsStart(state,action);
        case actionTypes.FETCH_PRODUCTS_SUCCESS: return fetchProductsSuccess(state,action);
        case actionTypes.FETCH_PRODUCTS_FAIL: return fetchProductsFail(state,action);

        case actionTypes.SET_PRODUCT_START: return setProductsStart(state,action);
        case actionTypes.SET_PRODUCT_SUCCESS: return setProductSuccess(state,action);
        case actionTypes.SET_PRODUCT_FAIL: return setProductFail(state,action);

        case actionTypes.SET_QUANTITY: return setQuantity(state,action);

        default:
            return state;
    }

}


const fetchProductsStart = (state, action) => {
    return {
        ...state,
        loading: true,
    }
}
const fetchProductsSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        products: action.products,
    }
}
const fetchProductsFail = (state, action) => {
    return {
        ...state,
        loading: false,
    }
}
const setProductsStart = (state, action) => {
    return {
        ...state,
        loading: true,
    }
}
const setProductSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        product: action.product,
    }
}
const setProductFail = (state, action) => {
    return {
        ...state,
        loading: false,
        product: null,
    }
}
const setQuantity = (state, action) => {
    return {
        ...state,
        quantity: action.quantity,
    }
}

export default reducer;