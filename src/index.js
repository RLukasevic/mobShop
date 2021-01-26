import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers  } from 'redux';
import productsReducer from './redux/reducers/productsReducer';
import cartReducer from './redux/reducers/cartReducer';


const rootReducer = combineReducers({
  items: productsReducer,
  cart: cartReducer,
});

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
      <BrowserRouter basename="/">
          <App/>
      </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
