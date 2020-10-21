import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import CreateAccountPage from "./components/CreateAccountPage";
import AthletesPage from "./components/AthletesPage";
import AthleteProfile from "./components/AthleteProfile";

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
        <Route exact path="/athletes" component={AthletesPage} />
        <Route exact path="/athlete/:id" component={AthleteProfile} />
      </Router>
    </div>
  );
}

export default App;
