import React from "react";
import "./main.css";
import { Link } from "react-router-dom";

function Item({ x }) {
  
  
  return (
    <div className="card__product" id={x.id}>
      <div className="card_product--title_principal">
        <h3 className="card__product--title">{x.title}</h3>
        <p className="card__product--desc">{x.description}</p>
      </div>
      <div className="card__product--img">
        <img src={x.image} alt="Foto de producto" />
      </div>
      <div className="card__product--cta">
        <div className="price">${x.price}</div>
      </div>
      <div className="flex-row">
        <Link
          className="card__product--btn_add"
          to={`/item/${x.id}`}>
          Ver más
        </Link>
      </div>
    </div>
  );
}
export default Item;
