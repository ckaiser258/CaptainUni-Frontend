import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom"

import LoginPage from './components/LoginPage'
import CreateAccountPage from './components/CreateAccountPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Route 
        exact path="/"
        render={(props) => <LoginPage {...props} />}
        />
        <Route 
        exact path="/create-account"
        render={(props) => <CreateAccountPage {...props} />}
        />
      </Router>
    </div>
  );
}

export default App;
