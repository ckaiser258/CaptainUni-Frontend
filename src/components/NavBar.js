import React from "react";
import { Navbar, Button } from "react-bootstrap";

function NavBar({ user, logout }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href={user ? "/athletes" : null}>
        <strong>CAPTAINUni</strong>
      </Navbar.Brand>
      <Navbar.Brand style={{ marginLeft: "auto" }}>
        {user.first_name ? `Hello, ${user.first_name}` : null}
      </Navbar.Brand>
      {user.id ? (
        <Button href="/" variant="outline-info" size="sm" onClick={logout}>
          Log Out
        </Button>
      ) : null}
    </Navbar>
  );
}

export default NavBar;
