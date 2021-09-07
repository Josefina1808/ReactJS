import React, { useState, useContext } from "react";
import "../main.css";
import {CartContext} from "../../../context/cartContext"


export const ItemCount = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [counter, setCounter] = useState(1);
  
  const onAdd = () => {
    if (counter < item.stock) {
      setCounter(counter + 1);
    }
  };

  const onDecrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <div className="card__product--btn_qty card__detail--btn_qty">
        <button onClick={onDecrease}>-</button>
        <p>{counter}</p>
        <button onClick={onAdd}>+</button>
      </div>
      <button className="card__detail--btn_add btn" onClick={() => addItem(item, counter)}>Agregar al carrito</button>
    </div>
  );
};
