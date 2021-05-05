import './App.css';

import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Login from './components/User/Login';
import Register from './components/User/Register';
import Profile from './components/User/Profile';
import AddMoney from './components/Main/Authorize/Wallet/AddMoney';
import ProgramPage from './components/Main/Programs/ProgramPage';
import ModeratorPrograms from './components/Moderator/Programs/Programs';
import Moderators from './components/Moderator/Moderators/Moderators';
import ProgramsAdd from './components/Moderator/Programs/ProgramsAdd/ProgramsAdd';
import ProgramsEdit from './components/Moderator/Programs/ProgramsEdit/ProgramsEdit';
import ModeratorsEdit from './components/Moderator/Moderators/ModeratorsEdit/ModeratorsEdit';

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
              <Redirect to='/' />
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
    <Router>
    <div>
    <Header />
    <Switch>
      <ProtectedRouteAuthroize exact path="/register" component={Register}></ProtectedRouteAuthroize>
      <ProtectedRouteAuthroize exact path="/login" component={Login}></ProtectedRouteAuthroize>
      <Route exact path="/"  component={Main}></Route>
      <ProtectedRouteUnAuthroize exact path="/profile"  component={Profile}></ProtectedRouteUnAuthroize>
      <ProtectedRouteUnAuthroize exact path="/add_money"  component={AddMoney}></ProtectedRouteUnAuthroize>
      <ProtectedRouteUnAuthroize exact path="/program/:id"  component={ProgramPage}></ProtectedRouteUnAuthroize>
      <ProtectedRouteUnAuthroize exact path="/god_mode/programs"  component={ModeratorPrograms}></ProtectedRouteUnAuthroize>
      <ProtectedRouteUnAuthroize exact path="/god_mode/moderators"  component={Moderators}></ProtectedRouteUnAuthroize>
      <ProtectedRouteUnAuthroize exact path="/god_mode/program_add"  component={ProgramsAdd}></ProtectedRouteUnAuthroize>
      <ProtectedRouteUnAuthroize exact path="/god_mode/program/:id"  component={ProgramsEdit}></ProtectedRouteUnAuthroize>
      <ProtectedRouteUnAuthroize exact path="/god_mode/moderator/:id"  component={ModeratorsEdit}></ProtectedRouteUnAuthroize>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
