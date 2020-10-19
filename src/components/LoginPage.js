import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const { Group, Label, Control } = Form;

function LoginPage() {
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
              <Control type="email" placeholder="Enter username" />
            </Group>
            <Group>
              <Label>Password</Label>
              <Control type="email" placeholder="Enter password" />
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
