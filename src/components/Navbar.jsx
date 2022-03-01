import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "../styles/Navbar.css";
import logo from "../images/logo.jpg";
export default function Navbarr() {
  return (
    <div className="nav">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <img src={logo} alt="logo" style={{
            marginRight: "5rem",
            height: "3rem",
            justifyItems: "left",
            borderRadius: "55px"
          }} />{" "}
          <Navbar.Brand href="#home" className="name">
            Crown&Keys
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Oursuits">Our Suits</Nav.Link>
              <Nav.Link href="#Accessories">Accessories</Nav.Link>

              <Button className="btn-grad1" variant="outline-light">Contact us!</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
