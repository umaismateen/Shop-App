import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect, useSelector } from 'react-redux';

import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import Products from './containers/Products/Products';
import Categories from './containers/Categories/Categories';
import CategoryItems from './containers/CategoryItems/CategoryItems';
import Product from './containers/Products/Product/Product';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const app = props => {

  const isAuth = useSelector(state => state.auth.token) !== null;

  const { onTryAutoSignup } = props;
  onTryAutoSignup();
  let routes = (
    <Switch>
      <Route path="/browse" exact component={Categories} />
      <Route path="/auth" exact component={Auth} />
      <Route path="/browse/:category" component={CategoryItems} />
      <Route path="/products/:id" component={Product} />
      <Route path="/" exact component={Products} />
      <Redirect to="/" />
    </Switch>
  )
  if (isAuth) {
    routes = (<Switch>
      <Route path="/checkout" exact component={Checkout} />
      <Route path="/orders" exact component={Orders} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/browse" exact component={Categories} />
      <Route path="/auth" exact component={Auth} />
      <Route path="/browse/:category" component={CategoryItems} />
      <Route path="/products/:id" component={Product} />
      <Route path="/" exact component={Products} />
      <Redirect to="/" />
    </Switch>
    )
  }
  
  


  return (
    <Layout>
      <div className={classes.App}>
        {routes}
      </div>
    </Layout>
  );

}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(app));