import * as actionTypes from '../actions/actionTypes';


const initialState = {
    loading: false,
    categories: [],
    items: [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CATEGORIES_START: return fetchCategoriesStart(state, action);
        case actionTypes.FETCH_CATEGORIES_SUCCESS: return fetchCategoriesSuccess(state, action);
        case actionTypes.FETCH_CATEGORIES_FAIL: return fetchCategoriesFail(state, action);
        case actionTypes.FETCH_CATEGORY_ITEMS_START: return fetchCategoryItemsStart(state, action);
        case actionTypes.FETCH_CATEGORY_ITEMS_SUCCESS: return fetchCategoryItemsSuccess(state, action);
        case actionTypes.FETCH_CATEGORY_ITEMS_FAIL: return fetchCategoryItemsFail(state, action);
        default:
            return state;
    }
}
const fetchCategoriesStart = (state, action) => {
    return {
        ...state,
        loading: true,
    }
}
const fetchCategoriesFail = (state, action) => {
    return {
        ...state,
        loading: false,
    }
}
const fetchCategoriesSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        categories: action.categories,
    }
}
const fetchCategoryItemsFail = (state, action) => {
    return {
        ...state,
        loading: false,
    }
}
const fetchCategoryItemsSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        items: action.categorizedItems,
    }
}
const fetchCategoryItemsStart = (state, action) => {
    return {
        ...state,
        loading: true,
    }
}

export default reducer;