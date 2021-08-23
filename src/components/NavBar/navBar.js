import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./navbar.css";
import Logo from "../../img/logo.svg";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="navbar-bg">
        <Container >
          <Navbar.Brand href="home">
            {" "}
            <img className="logo-nav" src={Logo} alt="logo de la marca" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
              <Nav.Link href="home">Inicio</Nav.Link>
              <Nav.Link href="productos">Productos</Nav.Link>
              <Nav.Link href="contacto">Contacto</Nav.Link>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
};
