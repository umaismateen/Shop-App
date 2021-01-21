import React, { Component } from 'react';
import classes from './App.css';
import Layout from './components/Layout/Layout';
import Products from './containers/Products/Products';

class App extends Component {
  render() {
    return (
      <Layout>
        <div className={classes.App}>
          <Products/>
        </div>
      </Layout>
    );
  }
}

export default App;
