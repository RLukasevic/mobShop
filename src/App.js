import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
//import * as actions from './Store/Actions/index';
//import { connect } from 'react-redux';


const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route path='/product/:id' render={(props) => (<Product {...props}/>)}  />
        <Route path='/products' exact component={Products} />
        <Redirect to='/products' />        
      </Switch>
    </div>
  );
}

export default withRouter(App);
