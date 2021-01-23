import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [],
    loading: false,
    product: null,
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS_START:
            return {
                ...state,
                loading: true,
            }
            case actionTypes.FETCH_PRODUCTS_SUCCESS: 
            return{
                ...state,
                loading: false,
                products: action.products,
            }
            case actionTypes.FETCH_PRODUCTS_FAIL: 
            return {
                ...state,
                loading: false,
            }
            case actionTypes.SET_PRODUCT: 
                 const product = state.products.find(product=> product.id ===action.id); 
                 console.log(product);      
            return {
                ...state,
                product: product,
            }
        default:
            return state;
    }

}


export default reducer;