import React, { useState, useEffect } from "react";
import "./App.css";
import { api } from "./services/api";
import { Container, Paper } from "@material-ui/core";
import { Route, BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/NavBar";
import LoginPage from "./components/LoginPage";
import CreateAccountPage from "./components/CreateAccountPage";
import AthletesPage from "./components/AthletesPage";
import AthleteProfile from "./components/AthleteProfile";

function App() {
  const [user, setUser] = useState({});
  // const [error, setError] = useState("")

  // const issueTokenOrThrowError = (res) => {
  //   if (res.message) {
  //     return setError(res.message);
  //   } else {
  //     localStorage.setItem("token", res.jwt);
  //   }
  // };

  // const login = (user) => {
  //   //Create POST request to api login function with
  //   //state being sent from LoginPage
  //   api.auth.login(user).then((res) => {
  //     issueTokenOrThrowError(res)
  //     //first_name needs to be set in state ahead of time
  //     //to interact with the navbar without refreshing
  //     user.first_name = res.user.first_name
  //     setUser(res.user)
  //     console.log(error)
  //   })
  // };

  const logout = () => {
    localStorage.removeItem("token");
    setUser({});
  };

  //Fetch user on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.auth.getCurrentUser().then((res) => setUser(res.user));
    }
  }, []);

  return (
    <div
      className="App"
      style={{ paddingBottom: "25%", backgroundColor: "#EEEEEE" }}
    >
      <NavBar user={user} logout={logout} />
      <Container>
        <Paper square className="paper-margins">
          <Router>
            <Route
              exact
              path="/"
              render={(props) => (
                <LoginPage
                  {...props}
                  // login={login}
                  // error={error}
                />
              )}
            />
            <Route
              exact
              path="/create-account"
              render={(props) => <CreateAccountPage {...props} />}
            />
            <Route
              exact
              path="/athletes"
              render={() => <AthletesPage user={user} />}
            />
            <Route
              exact
              path={`/athlete/:id`}
              render={(props) => <AthleteProfile id={props.match.params.id} />}
            />
          </Router>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
