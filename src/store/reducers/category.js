import * as actionTypes from '../actions/actionTypes';


const initialState = {
    loading: false,
    categories: [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CATEGORIES_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.FETCH_CATEGORIES_SUCCESS:
            return {
                loading: false,
                categories: action.categories,
            }
            case actionTypes.FETCH_CATEGORIES_FAIL: 
            return {
                ...state,
                loading: true,
            }
            default:
                return state;
    }
}

export default reducer;