import './App.css';

import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header/Header';
import Main from './components/unlogin/Main';
// import Wallet from './components/Wallet/Wallet';
import Login from './components/Login/Login';
import Register from './components/Login/Register';

function App() {
  class ProtectedRouteUnAuthroize extends Component {
    render() {
      const { component: Component, ...props } = this.props
  
      return (
        <Route 
          {...props} 
          render={props => (
            localStorage.getItem('jwtToken') ?
              <Component {...props} /> :
              <Redirect to='/login' />
          )} 
        />
      )
    }
  }
  
  class ProtectedRouteAuthroize extends Component {
    render() {
      const { component: Component, ...props } = this.props
  
      return (
        <Route 
          {...props} 
          render={props => (
            localStorage.getItem('jwtToken') ?
            <Redirect to='/' />
            :
            <Component {...props} />
          )} 
        />
      )
    }
  }

  return (
    // <div className="App">
    //   <Header />
    //   <Main />
    //   <Wallet />

      
    // </div>

    <Router>
    <div>
     <Header />
    <Switch>
      <ProtectedRouteAuthroize exact path="/register" component={Register}></ProtectedRouteAuthroize>
      <ProtectedRouteAuthroize exact path="/login" component={Login}></ProtectedRouteAuthroize>
      {/* <ProtectedRouteUnAuthroize exact path="/update_profile" component={UpdateProfile}></ProtectedRouteUnAuthroize> */}
      <ProtectedRouteUnAuthroize exact path="/"  component={Main}></ProtectedRouteUnAuthroize>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
