import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import CreateAccountPage from "./components/CreateAccountPage";
import AthletesPage from "./components/AthletesPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={(props) => <LoginPage {...props} />} />
        <Route
          exact
          path="/create-account"
          render={(props) => <CreateAccountPage {...props} />}
        />
        <Route
          exact
          path="/athletes"
          render={(props) => <AthletesPage {...props} />}
        />
      </Router>
    </div>
  );
}

export default App;
