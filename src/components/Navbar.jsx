import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "../styles/Navbar.css";

export default function Navbarr() {
  return (
    <div className="nav">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="name">
            Crown&Keys
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#deets">Home</Nav.Link>
              <Nav.Link href="#memes">About</Nav.Link>
              <Nav.Link href="#memes">Our Suits</Nav.Link>
              <Nav.Link href="#memes">Accessories</Nav.Link>

              <Button variant="outline-light">Contact us!</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
