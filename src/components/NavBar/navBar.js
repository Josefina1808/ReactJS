import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {Link} from "react-router-dom"
import "./navbar.css";
import Logo from "../../img/logo.svg";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="navbar-bg">
        <Container >
          <Link to="/home">
            {" "}
            <img className="logo-nav" src={Logo} alt="logo de la marca" />{" "}
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
              <Link to="/home">Inicio</Link>
              <Link to="/productos">Productos</Link>
              <Link to="/contacto">Contacto</Link>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
};
