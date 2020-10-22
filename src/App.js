import React, { useEffect } from "react";
import "./App.css";
import { api } from "./services/api";
import { Route, BrowserRouter as Router } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import CreateAccountPage from "./components/CreateAccountPage";
import AthletesPage from "./components/AthletesPage";
import AthleteProfile from "./components/AthleteProfile";

function App() {

  //Fetch user component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.auth.getCurrentUser();
    }
  }, []);

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
        <Route
          exact
          path={`/athlete/:id`}
          render={(props) => <AthleteProfile id={props.match.params.id} />}
        />
      </Router>
    </div>
  );
}

export default App;
