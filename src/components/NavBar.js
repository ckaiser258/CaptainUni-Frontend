import React from "react";
import { Navbar } from "react-bootstrap";

function NavBar({ firstName }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
      <Navbar.Brand style={{ marginLeft: "auto" }}>
        {firstName ? `Hello, ${firstName}` : null}
      </Navbar.Brand>
    </Navbar>
  );
}

export default NavBar;
