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
        default:
            return state;
    }

}

export default reducer;