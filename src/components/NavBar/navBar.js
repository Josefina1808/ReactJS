import React, { useContext } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../img/logo.svg";
import { CartWidget } from "./CartWidget";
import { CartContext } from "../../context/cartContext";

export const NavBar = () => {
  const { cart } = useContext(CartContext);
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
                <Link to="/productos/all" >Todos</Link>
                <NavDropdown.Divider />
                <Link to="/productos/botellas">Botellas</Link>
                <NavDropdown.Divider />
                <Link to="/productos/posadores">Posadores</Link>
                <NavDropdown.Divider />
                <Link to="/productos/vajilla">Vajilla</Link>
                <NavDropdown.Divider />
                <Link to="/productos/pulseras">Accesorios</Link>
                <NavDropdown.Divider />
                <Link to="/productos/aguas">Agua</Link>
              </NavDropdown>
              <Link to="/contacto">Contacto</Link>
            </Nav>
            {cart.length !== 0 && <CartWidget />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
