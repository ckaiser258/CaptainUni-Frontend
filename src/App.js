import React, { useState, useEffect } from "react";
import "./App.css";
import { api } from "./services/api";
import { Route, BrowserRouter as Router } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import CreateAccountPage from "./components/CreateAccountPage";
import AthletesPage from "./components/AthletesPage";
import AthleteProfile from "./components/AthleteProfile";

function App() {
  const [athletes, setAthletes] = useState({});
  const [loading, setLoading] = useState(false);

  //Fetch user's athletes upon component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoading(true)
      api.athletes.getAthletes().then((res) => {
        setAthletes(res);
        setLoading(false)
      });
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
        <Route
          exact
          path="/athletes"
          render={(props) => <AthletesPage athletes={athletes} loading={loading} {...props} />}
        />
        <Route exact path="/athlete/:id" component={AthleteProfile} />
      </Router>
    </div>
  );
}

export default App;
