import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Post from './Post';
import PostDetails from './PostDetails';
import Navigation from './Navigation';
import Contactme from './Contactme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div class="App">
        <Navigation />
        <Switch>
          <Route path="/postdetails">
            <PostDetails />
          </Route>

          <Route path="/contactme">
            <Contactme />
          </Route>

          <Route path='/'>
            <Header />
            <Post />
          </Route>
        </Switch>

      </div>

    </Router>
  );
}

export default App;
