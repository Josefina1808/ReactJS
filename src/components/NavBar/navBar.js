import React from "react";
import { Nav, Navbar, Container, Carousel } from "react-bootstrap";
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
              <Nav.Link href="home">Inicio</Nav.Link>
              <Nav.Link href="productos">Productos</Nav.Link>
              <Nav.Link href="contacto">Contacto</Nav.Link>
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
