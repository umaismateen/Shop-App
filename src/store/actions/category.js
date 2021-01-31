import * as actionTypes from './actionTypes';
import axios from 'axios';

import urlKey from '../../Keys/urlKey';


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
        axios.get(`${urlKey}/categories.json`)
        .then(response => {
            const fetchCategories= [];
            for (let category in response.data){
               fetchCategories.push({
                   category: category,
                   url: response.data[category],
               });
            }
             dispatch(fetchCategoriesSuccess(fetchCategories));
        }).catch(()=>{
            dispatch(fetchCategoriesFail());
        })
    }
}

export const fetchCategoryItems = (category) => {
    return dispatch => {
        dispatch(fetchCategoryItemsStart());
        axios.get(`${urlKey}/products.json?orderBy="category"&equalTo="${category}"`)
        .then((response)=>{
            const categorizedItems= [];
            for ( let key in response.data ) {
                categorizedItems.push({
                    ...response.data[key],
                    id:key,
                })
            }
            dispatch(fetchCategoryItemsSuccess(categorizedItems));
        }).catch(()=>{
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

