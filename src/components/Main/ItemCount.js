import React, { useState } from "react";
import "./main.css";


export const ItemCount = ({ item, addToCart }) => {
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
      <div className="card__product--btn_qty">
        <button onClick={onDecrease}>-</button>
        <p>{counter}</p>
        <button onClick={onAdd}>+</button>
      </div>
      <button className="card__detail--btn_add" onClick={() => addToCart(counter,item)}>Agregar al carrito</button>
    </div>
  );
};
