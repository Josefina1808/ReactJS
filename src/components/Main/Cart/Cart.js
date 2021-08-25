import React from "react";
import {
  CartContextProvider,
  useCart,
  useCartUpdate,
} from "../../../context/cartContext";
import { Container } from "react-bootstrap";
import "./Cart.css";
import { ItemCount } from "../ItemCount";
import { Link } from "react-router-dom";

export const Cart = () => {
  const cart = useCart();
  console.log("cart", cart);
  return (
    <Container>
      <h1>UNA SECCIÓN VACÍA</h1>
      <Container className="card__cart" id="1">
        <div className="card__cart--info">
          <div className="card__cart--img">
            <img
              src="https://res.cloudinary.com/josefina18/image/upload/v1629760750/1_gzg7gb.jpg"
              alt="Foto de producto"
            />
          </div>
          <div className="card_product--title_principal">
            <h3 className="card__cart--title">Botella Flor de la Vida</h3>
            <p className="card__cart--desc">Botella para solarizar</p>
          </div>
        </div>
        <div className="card__cart--actions">
          <ItemCount /* item={state} addToCart={addToCart} */ />
          <div className="price">$1000</div>
          <button className="btn_remove btn">X</button>
        </div>
      </Container>
    </Container>
  );
};

/* {cart.length > 0 && (
  <Link className="card__cart--btn_finish" to="/cart">
    Finalizar compra
  </Link>
)} */