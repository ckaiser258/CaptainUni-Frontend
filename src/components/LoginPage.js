import React, { useState } from "react";
import { api } from "../services/api";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const { Group, Label, Control } = Form;

function LoginPage(props) {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //Set user state to username and passwords fields
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const issueTokenOrThrowError = (res) => {
    if (res.message) {
      return setError(res.message);
    } else {
      localStorage.setItem("token", res.jwt);
      props.history.push("/athletes");
    }
  };

  const login = () => {
    setLoading(true)
    api.auth
    .login(user)
    .then((res) => {
      issueTokenOrThrowError(res);
    })
    .then(() => setLoading(false));
  }

  //Verify user, initiate loading page, and then issue token and redirect to home page,
  //or throw error
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.username.value && e.target.password.value) {
      setUser({});
      login()
    } else {
      setError("Please enter a username and password.");
    }
  };

  return (
    <>
      <div style={{ marginTop: 50 }}>
        <h1>Welcome To CaptainUni</h1>
      </div>
      <div>
        <Container style={{ marginTop: 200, width: "30%" }}>
          <Form onSubmit={handleSubmit}>
            <Group>
              <Label>Username</Label>
              <Control
                name="username"
                type="name"
                placeholder="Enter username"
                onChange={handleChange}
              />
            </Group>
            <Group>
              <Label>Password</Label>
              <Control
                name="password"
                type="password"
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
              (For long-term user experience: <em>Username: user</em>,{" "}
              <em>Password: 12345</em>)
            </strong>
          </small>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
