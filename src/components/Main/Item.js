import React from "react";
import "./main.css";
import { ItemCount } from "./ItemCount";
import Swal from "sweetalert2";
import { ItemDetailContainer } from "./ItemDetailContainer";
import { Link } from "react-router-dom";

function Item({ x }) {
  const alertAdd = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto añadido al carrito",
      showConfirmButton: false,
      timer: 1400,
    });
  };
  console.log(x)
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
        <ItemCount stock={x.stock} />
      </div>
      <div className="flex-row">
        <button className="card__product--btn_add" onClick={alertAdd}>
          Agregar al carrito
        </button>

        <Link
          className="card__product--btn_add"
          href={ItemDetailContainer()}>
          Ver más
        </Link>
      </div>
    </div>
  );
}
export default Item;
