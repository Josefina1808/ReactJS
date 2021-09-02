import React, {useContext} from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {Link} from "react-router-dom"
import "./navbar.css";
import Logo from "../../img/logo.svg";
import { CartWidget } from "./CartWidget";
import { CartContext } from "../../context/cartContext";

export const NavBar = () => {
  const {cart} = useContext(CartContext);
  return (
    <div>
      <Navbar bg="light" expand="lg" className="navbar-bg">
        <Container >
          <Link to="/">
            {" "}
            <img className="logo-nav" src={Logo} alt="logo de la marca" />{" "}
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
              <Link to="/">Inicio</Link>
              <Link to="/productos">Productos</Link>
              <Link to="/contacto">Contacto</Link>
            </Nav>
            {cart.length !== 0 && <CartWidget />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
};
