import React, { useEffect, useContext } from "react";
import { CartContext } from "../../../context/cartContext"
import { Container } from "react-bootstrap";
import "./Cart.css";

export const Cart = () => {
  const CartContext = useContext(CartContext)
  
  return (
    <Container>
        <h1>UNA SECCIÓN VACÍA</h1>
    </Container>
  );
};