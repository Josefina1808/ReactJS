import React from "react";
import "./main.css";
import { ItemCount } from "./ItemCount";

function Item ({ id, title, description, price, image, stock }) {
  return (
    <div className="card__product" id={id}>
      <div className="card_product--title_principal">
        <h3 className="card__product--title">{title}</h3>
        <p className="card__product--desc">{description}</p>
      </div>
      <div className="card__product--img">
        <img src={image}/>
      </div>
      <div className="card__product--cta">
        <div className="price">${price}</div>
        <ItemCount stock={stock}/>
      </div>
    </div>
  )
}
export default Item;
