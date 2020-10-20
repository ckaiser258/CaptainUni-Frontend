import React, { useState } from "react";
import { api } from "../services/api";
import { Container, Form, Button } from "react-bootstrap";

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
    });
    props.history.push("/athletes");
  };

  return (
    <>
      <div style={{ marginTop: 50 }}>
        <h1>Create An Account</h1>
      </div>
      <div>
        <Container style={{ marginTop: 200, width: "30%" }}>
          <Form onSubmit={createAccount}>
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
        </Container>
        {error ? <h5>{error}</h5> : null}
      </div>
    </>
  );
}

export default CreateAccountPage;
