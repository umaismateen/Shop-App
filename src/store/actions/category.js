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
            console.log(fetchCategories);
             dispatch(fetchCategoriesSuccess(fetchCategories));
        }).catch(err=>{
            console.log(err.message);
            dispatch(fetchCategoriesFail());
        })
    }
}

