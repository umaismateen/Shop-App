import * as actionTypes from './actionTypes';
import axios from 'axios';



export const fetchCategoriesStart = ()=> {
    return {
        type: actionTypes.FETCH_CATEGORIES_START
    }
}

export const fetchCategoriesSuccess = (categories) => {
    return {
        type: actionTypes.FETCH_CATEGORIES_SUCCESS,
        categories: categories,
    }
}

export const fetchCategoriesFail = () => {
    return {
        type: actionTypes.FETCH_CATEGORIES_FAIL,
    }
}

export const fetchCategories = () =>{
    return dispatch => {
        dispatch(fetchCategoriesStart());
        axios.get("https://shop-app-780b7-default-rtdb.firebaseio.com/categories.json")
        .then(response => {
            const fetchCategories= [];
            for (let category in response.data){
               fetchCategories.push({
                   category: category,
                   url: response.data[category],
               });
            }
             dispatch(fetchCategoriesSuccess(fetchCategories));
        }).catch(err=>{
            console.log(err.message);
            dispatch(fetchCategoriesFail());
        })
    }
}

export const fetchCategoryItems = (category) => {
    return dispatch => {
        dispatch(fetchCategoryItemsStart());
        axios.get(`https://shop-app-780b7-default-rtdb.firebaseio.com/products.json?orderBy="category"&equalTo="${category}"`)
        .then((response)=>{
            const categorizedItems= [];
            for ( let key in response.data ) {
                categorizedItems.push({
                    ...response.data[key],
                    id:key,
                })
            }
            dispatch(fetchCategoryItemsSuccess(categorizedItems));
        }).catch(err=>{
            console.log(err.message);
            dispatch(fetchCategoryItemsFail())
        })
    }
}

export const fetchCategoryItemsStart = () => {
    return {
        type: actionTypes.FETCH_CATEGORY_ITEMS_START,
    }
}

export const fetchCategoryItemsSuccess = (categorizedItems)=> {
    return {
        type: actionTypes.FETCH_CATEGORY_ITEMS_SUCCESS,
        categorizedItems: categorizedItems,
    }
}

export const fetchCategoryItemsFail = () => {
    return {
        type: actionTypes.FETCH_CATEGORY_ITEMS_FAIL,
    }
}

