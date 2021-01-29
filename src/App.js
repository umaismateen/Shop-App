import React, { Component } from 'react';
import { Route, Switch,withRouter } from 'react-router-dom'
import {connect} from 'react-redux';

import classes from './App.css';
import Layout from './components/Layout/Layout';
import Products from './containers/Products/Products';
import Categories from './containers/Categories/Categories';
import CategoryItems from './containers/CategoryItems/CategoryItems';
import Product from './containers/Products/Product/Product';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

class App extends Component {

  componentDidMount(){
    this.props.onTryAutoSignup();
  }


  render() {
    return (
      <Layout>
        <div className={classes.App}>
          <Switch>
            <Route path="/browse" exact component={Categories} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/logout" exact component={Logout} />
            <Route path= "/browse/:category" component={CategoryItems}/> 
            <Route path= "/products/:id" component={Product}/> 
            <Route path="/" component={Products} />
          </Switch>
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps  = dispatch =>{
  return{
    onTryAutoSignup: ()=>dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(null,mapDispatchToProps)(App));