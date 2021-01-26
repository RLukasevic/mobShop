import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Products from './containers/Products/Products';
import Product from './components/Product/Product';
//import * as actions from './Store/Actions/index';
//import { connect } from 'react-redux';


const App = () => {

  return (
    <div>
      <Switch>
        <Route path='/product/:id' component={Product} />
        <Route path='/products' exact component={Products} />
        <Redirect to='/products' />        
      </Switch>
    </div>
  );
}

export default withRouter(App);
