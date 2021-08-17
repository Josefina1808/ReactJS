import React from "react";
import { Nav, Navbar, NavDropdown, Container, Carousel } from "react-bootstrap";
import Img0 from "../../img/bg-shop.jpg";
import "./navbar.css";
import Logo from "../../img/logo.svg";
import { Cart } from "./CartWidget";

export const NavBar = ({ greeting }) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img className="logo-nav" src={Logo} alt="logo de la marca" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Botellas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Accesorios
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Vasos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
            <Cart />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Img0} alt="First slide" />
          <Carousel.Caption>
            <h3>SunWater</h3>
            <p>{greeting}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
