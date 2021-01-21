import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import productReducer from './store/reducers/products';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    product: productReducer,
})

const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store} >
       <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
