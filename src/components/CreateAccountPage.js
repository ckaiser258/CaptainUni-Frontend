import React, { useState } from "react";
import { api } from "../services/api";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { Typography } from "@material-ui/core";

//Destructure form components
const { Group, Label, Control } = Form;

function CreateAccountPage(props) {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  //Collect input for POST request
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //Clear form, verify valid credentials and POST user,
  //or throw error
  const createAccount = (e) => {
    e.preventDefault();
    setUser({});
    api.auth.createUser(user).then((res) => {
      if (res.error) return setError(res.error);
      login(user);
    });
  };

  //Issue token and redirect to home page
  const login = (user) => {
    api.auth.login(user).then((res) => {
      localStorage.setItem("token", res.jwt);
      props.history.push("/athletes");
      //Running into issue with athletes page not recognizing the user
      //until window refresh even after setting state. Temporary fix below
      window.location.reload();
    });
  };

  return (
    <>
      <div style={{ marginTop: 50, paddingTop: 30 }}>
        <Typography variant="h3">Create An Account</Typography>
      </div>
      <div>
        <Container style={{ marginTop: "4%", width: "40%" }}>
          <Form onSubmit={createAccount} style={{ marginBottom: 15 }}>
            <Group>
              <Label>First Name</Label>
              <Control
                name="first_name"
                type="name"
                placeholder="Enter first name"
                onChange={handleChange}
              />
            </Group>
            <Group>
              <Label>Last Name</Label>
              <Control
                name="last_name"
                type="name"
                placeholder="Enter last name"
                onChange={handleChange}
              />
            </Group>
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
              Create Account
            </Button>
          </Form>
          <Link to="/" style={{ marginTop: 20 }}>
            Back to Login
          </Link>
        </Container>
        {error ? <h5>{error}</h5> : null}
      </div>
    </>
  );
}

export default CreateAccountPage;
