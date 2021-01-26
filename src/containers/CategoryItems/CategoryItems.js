import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import CategoryItem from '../../components/CategoryItem/CategoryItem';

import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './CategoryItems.css';
import category from '../../components/Category/Category';

const categoryItems = props => {


const {onFetchItems} = props;
    useEffect(()=>{
       const category = window.location.pathname.slice(8);
        onFetchItems(category);
    },[category,onFetchItems]);

    let items = <Spinner/>

    if (props.items && !props.loading ) {
         items = props.items.map(item => (
            <CategoryItem
                id={item.id}
                key={item.id}
                name={item.name}
                url={item.url}      
             />
        ))
    }
    return (
        <div className={classes.CategoryItems} >
            {items}
        </div>
    );


}


const mapStateToProps = state => {
    return {
        items: state.category.items,
        loading: state.category.loading,
    }
}

const  mapDispatchToProps = dispatch => {
    return {
        onFetchItems: (category) => dispatch(actions.fetchCategoryItems(category),),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(categoryItems);