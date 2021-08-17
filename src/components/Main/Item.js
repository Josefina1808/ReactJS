import React from "react";
import "./main.css";
import { ItemCount } from "./ItemCount";

function Item ({ x }) {
  return (
    <div className="card__product" id={x.id}>
      <div className="card_product--title_principal">
        <h3 className="card__product--title">{x.title}</h3>
        <p className="card__product--desc">{x.description}</p>
      </div>
      <div className="card__product--img">
        <img src={x.image} alt="Foto de producto"/>
      </div>
      <div className="card__product--cta">
        <div className="price">${x.price}</div>
        <ItemCount stock={x.stock}/>
      </div>
    </div>
  )
}
export default Item;
