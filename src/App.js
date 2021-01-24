import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import classes from './App.css';
import Layout from './components/Layout/Layout';
import Products from './containers/Products/Products';
import Categories from './containers/Categories/Categories';
import CategoryItems from './containers/CategoryItems/CategoryItems';
import Product from './containers/Products/Product/Product';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <Layout>
        <div className={classes.App}>
          <Switch>
            <Route path="/browse" exact component={Categories} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path= "/browse/:category" component={CategoryItems}/> 
            <Route path= "/products/:id" component={Product}/> 
            <Route path="/" component={Products} />
          </Switch>
        </div>
      </Layout>
    );
  }
}

export default App;
