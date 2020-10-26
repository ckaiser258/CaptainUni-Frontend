import React, { useState } from "react";
import { api } from "../services/api";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import TypeIt from "typeit-react";

const { Group, Label, Control } = Form;

function LoginPage({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //Set state to username and passwords fields
  const handleChange = (e) => {
    e.target.name === "username"
      ? setUsername(e.target.value)
      : setPassword(e.target.value);
  };

  //Issue token and redirect to home page or throw error
  const issueTokenOrThrowError = (res) => {
    if (res.message) {
      setError(res.message);
    } else {
      localStorage.setItem("token", res.jwt);
      history.push("/athletes");

      //Running into issue with athletes page not recognizing the username
      //until window refresh even after setting state. Temporary fix below
      window.location.reload();
    }
  };

  const login = () => {
    //Create user object with input fields as values
    let user = {};
    user = { username: username, password: password };
    //Pass object to login() api function for authentication
    api.auth.login(user).then((res) => {
      issueTokenOrThrowError(res);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.username.value && e.target.password.value) {
      login();
    } else {
      setError("Please enter a username and password.");
    }
  };

  return (
    <>
      <div style={{ marginTop: 50, paddingTop: 50 }}>
        <Typography variant="h2">
          <TypeIt>Welcome To CaptainUni</TypeIt>
        </Typography>
      </div>
      <div>
        <Container style={{ width: "50%", marginTop: "6%" }}>
          <Form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
            <Group>
              <Label>Username</Label>
              <Control
                name="username"
                type="name"
                value={username}
                placeholder="Enter username"
                onChange={handleChange}
              />
            </Group>
            <Group>
              <Label>Password</Label>
              <Control
                name="password"
                type="password"
                value={password}
                placeholder="Enter password"
                onChange={handleChange}
              />
            </Group>
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </Form>
          Don't have an account? <Link to="/create-account">Click Here</Link>
        </Container>
        {error ? <h5>{error}</h5> : null}
        <br />
        <p className="text-center">
          <small>
            <strong>
              (For long-term username experience: <em>Username: user</em>,{" "}
              <em>Password: 12345</em>)
            </strong>
          </small>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
