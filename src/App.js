import React, { Component } from 'react';
import classes from './App.css';
import Layout from './components/Layout/Layout';
// import Products from './containers/Products/Products';
import Categories from './containers/Categories/Categories';
class App extends Component {
  render() {
    return (
      <Layout>
        <div className={classes.App}>
          <Categories/>
        </div>
      </Layout>
    );
  }
}

export default App;
