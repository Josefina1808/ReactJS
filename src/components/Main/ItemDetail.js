import "./main.css";
import React, { useEffect, useState } from "react";
import { ItemCount } from "./ItemCount";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export const ItemDetail = ({ state }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (counter, item) => {
    setCart([...cart, {item, counter}]);
  };
  console.log(cart);
  return (
    <Container className="card__detail" id={state.id}>
      <div className="card__detail--img">
        <img src={state.image} alt="Foto de producto" />
      </div>
      <div className="card__detail--info">
        <div className="card_product--title_principal">
          <h3 className="card__detail--title">{state.title}</h3>
          <p className="card__detail--desc">{state.description}</p>
        </div>

        <div className="card__detail--cta">
          <div className="price">${state.price}</div>
          <ItemCount item={state} addToCart={addToCart} />
        </div>
        {cart.length > 0 && 
          <Link className="card__detail--btn_finish" to="/cart">
            Finalizar compra
          </Link>
        }
      </div>
    </Container>
  );
};
