import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <PrivateRoute path='/'>
          <h1>Welcome to friends</h1>
        </PrivateRoute>
      </Switch>
    </Router>
    
  );
}

export default App;
