import React from "react";
import { Navbar, Button, Nav } from "react-bootstrap";

function NavBar({ user, logout }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href={user.first_name ? "/athletes" : "/"}>
        CAPTAIN<span id="u">U</span>ni
      </Navbar.Brand>
      {user.id ? (
        <>
          <Nav>
            <Nav.Link href="/athletes" style={{ color: "white", fontSize: 20 }}>
              Athletes
            </Nav.Link>
          </Nav>
          <Navbar.Brand style={{ marginLeft: "auto" }}>
            Hello, {user.first_name}
          </Navbar.Brand>
          <Button href="/" variant="outline-info" size="sm" onClick={logout}>
            Log Out
          </Button>
        </>
      ) : null}
    </Navbar>
  );
}

export default NavBar;
