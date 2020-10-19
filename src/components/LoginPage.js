import React, { useState } from "react";
import {api} from '../services/api'
import { Container, Form, Button } from "react-bootstrap";

const { Group, Label, Control } = Form;

function LoginPage() {

    const [user, setUser] = useState({})
    const [error, setError] = useState(false)

    //Set user state to username and passwords fields
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    
  return (
    <>
      <div style={{marginTop: 50}}>
        <h1>Welcome To CaptainUni</h1>
      </div>
      <div>
        <Container style={{ marginTop: 200, width: "30%" }}>
          <Form>
            <Group>
              <Label>Username</Label>
              <Control name="username" type="email" placeholder="Enter username" onChange={handleChange}/>
            </Group>
            <Group>
              <Label>Password</Label>
              <Control name="password" type="password" placeholder="Enter password" onChange={handleChange}/>
            </Group>
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default LoginPage;
