import React from 'react';
import {BrowserRouter as Router,Route,Switch}from "react-router-dom";
import Home from './Home';
import Jobs from '../pages/JobsPage'
import Login from '../pages/LoginPage'
import Register from '../pages/RegisterPage'

// eslint-disable-next-line import/no-anonymous-default-export
export default  () => (
  <Router >
    <div>
      <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/jobs" component={Jobs}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    </Switch>
  </div>
  </Router>
)
