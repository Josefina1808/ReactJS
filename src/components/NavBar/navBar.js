import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../img/logo.svg";
import { CartWidget } from "./CartWidget";
import { WishIcon } from "./WishIcon";

export const NavBar = () => {
  
  return (
    <div>
      <Navbar bg="light" expand="lg" className="navbar-bg">
        <Container>
          <Link to="/">
            {" "}
            <img className="logo-nav" src={Logo} alt="logo de la marca" />{" "}
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
              <Link to="/">Inicio</Link>
              <NavDropdown title="Productos" className="dropdown">
                <Link to="/productos/all">Todos</Link>
                <NavDropdown.Divider />
                <Link to="/productos/botellas">Botellas</Link>
                <Link to="/productos/posadores">Posadores</Link>
                <Link to="/productos/vajilla">Vajilla</Link>
                <Link to="/productos/pulseras">Accesorios</Link>
                <Link to="/productos/aguas">Agua</Link>
              </NavDropdown>
              <Link to="/contacto">Contacto</Link>
            </Nav>
            <div className="alig-right">
              <WishIcon />
              <CartWidget />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
