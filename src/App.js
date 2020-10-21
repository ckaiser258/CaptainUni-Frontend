import React, { useState, useEffect } from "react";
import "./App.css";
import { api } from "./services/api";
import { Route, BrowserRouter as Router } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import CreateAccountPage from "./components/CreateAccountPage";
import AthletesPage from "./components/AthletesPage";
import AthleteProfile from "./components/AthleteProfile";

function App() {
  const [athletes, setAthletes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAthletes = () => {
    setLoading(true);
    api.athletes.getAthletes().then((res) => {
      setAthletes(res);
      setLoading(false);
    });
  };

  //Fetch user's athletes upon component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchAthletes();
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
        <Route
          exact
          path="/athletes"
          render={(props) => (
            <AthletesPage athletes={athletes} loading={loading} {...props} />
          )}
        />
        {athletes.map((athlete) => {
          return (
            <Route
              key={athlete.id}
              exact
              path="/athlete/:id"
              render={(props) => (
                <AthleteProfile
                  image={athlete.image}
                  name={athlete.full_name}
                  phone_number={athlete.phone_number}
                  address={athlete.address}
                  height={athlete.height}
                  weight={athlete.weight}
                  birthday={athlete.birthday}
                  positions={athlete.positions}
                  high_school={athlete.high_school}
                  graduation_year={athlete.graduation_year}
                  gpa={athlete.gpa}
                />
              )}
            />
          );
        })}
      </Router>
    </div>
  );
}

export default App;
