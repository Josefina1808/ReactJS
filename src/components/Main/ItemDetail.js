import "./main.css";
import React, {useContext} from "react";
import { ItemCount } from "./ItemCount";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {CartContext} from "../../context/cartContext"


export const ItemDetail = ({ state }) => {
  const { cart } = useContext(CartContext)
  
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
          <ItemCount item={state} />
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
