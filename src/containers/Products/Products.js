import React,{useEffect} from 'react';
import {connect} from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
import classes from './Products.css';
import Product from '../../components/Product/Product';

const products = props => {

    const { onFetchProducts } = props;

    useEffect(()=>{
        onFetchProducts();
        console.log(props.prodcuts);
    }, [onFetchProducts])

    let products = <Spinner/>

    if(!props.loading){
        products = props.prodcuts.map(
            product => (
                <Product
                id={product.id}
                key={product.id}
                price={product.price}
                name={product.name}
                url={product.url}
                 inStock={product.inStock} />
            )
        )
    }
    return(
        <div className={classes.Products} >
            <div className={classes.Products} >
          {products}
            </div>
        </div>
    );
};



const mapStateToProps = state => {
    return {
        prodcuts: state.product.products,
        loading: state.product.loading,
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: ()=> dispatch(actions.fetchProducts()),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(products);