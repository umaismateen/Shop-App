import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Category from '../../components/Category/Category';

import classes from './Categories.css';
import * as actions from '../../store/actions/index';

const categories = props => {
    const { onfetchCategories } = props;
    useEffect(() => {
        onfetchCategories();
        console.log(props.categories);
    }, [onfetchCategories])



    let categories = <p>loading...</p>
    if (!props.loading) {
        categories = props.categories.map(
            category => (
                <Category 
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

export default connect(mapStateToProps, mapDispatchToProps)(categories);