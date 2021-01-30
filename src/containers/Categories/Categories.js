import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Category from '../../components/Category/Category';
import withErrorHandler from '../../hoc/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Categories.css';
import * as actions from '../../store/actions/index';

const categories = props => {
    const { onfetchCategories } = props;
    useEffect(() => {
        onfetchCategories();
    }, [onfetchCategories])


    const onClickHandler = (category) => {
        props.history.push({
            pathname: `/browse/${category}`
        })
    }

    let categories =<Spinner/>
    if (!props.loading) {
        categories = props.categories.map(
            category => (
                <Category 
                    categorySelector={(category)=>onClickHandler(category)}
                    key={category.category}
                    name={category.category}
                    url={category.url}
                />
            )
        )
    }
    return (
        <div className={classes.Categories} >
            {categories}
        </div >
    );
}


const mapStateToProps = state => {
    return {
        categories: state.category.categories,
        loading: state.category.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onfetchCategories: () => dispatch(actions.fetchCategories()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( categories,axios));