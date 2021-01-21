import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './Products.css';
import Product from './Product/Product';

const products = props => {

    const { onFetchProducts } = props;

    useEffect(()=>{
        onFetchProducts();
        console.log(props.prodcuts);
    }, [onFetchProducts])

    let products = <p>loading...</p>
    if(!props.loading){
        products = props.prodcuts.map(
            product => (
                <Product
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