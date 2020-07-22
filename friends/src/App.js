import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList';
import Navbar from './components/Navbar'
import AddFriend from './components/AddFriend'

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/add-friend'>
            <AddFriend />
          </PrivateRoute>
          <PrivateRoute path='/'>
            <Navbar />
            <FriendsList />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
