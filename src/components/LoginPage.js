import React, { useState } from "react";
import { api } from "../services/api";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const { Group, Label, Control } = Form;

function LoginPage() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  //Set user state to username and passwords fields
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //Verify user and then issue token and redirect to home page,
  //or throw error
  const login = (e) => {
    e.preventDefault();
    setUser({});
    api.auth.login(user).then((res) => {
      if (res.message) return setError(res.message);
      localStorage.setItem("token", res.jwt);
    });
    this.props.history.push("/home");
  };

  return (
    <>
      <div style={{ marginTop: 50 }}>
        <h1>Welcome To CaptainUni</h1>
      </div>
      <div>
        <Container style={{ marginTop: 200, width: "30%" }}>
          <Form onSubmit={login}>
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
