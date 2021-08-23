import "./main.css";
import React from "react";
import { ItemCount } from "./ItemCount";
import { Container } from "react-bootstrap";

export const ItemDetail = ({ state }) => {
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
          <ItemCount stock={state.stock}/>
        </div>
        <button className="card__detail--btn_add">
          Agregar al carrito
        </button>
        <a className="card__detail--btn_finish" href="cart">
          Finalizar compra
        </a>
      </div>
    </Container>
  );
};
