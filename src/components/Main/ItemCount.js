import React, { useState } from "react";
import "./main.css";

export const ItemCount = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  const onAdd = () => {
    //Este condicional está comentado pq no funciona, nunca suma; porque "nunca" se cumple la condición
    if (counter < stock) {
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
      <button className="card__product--btn_add">Agregar al carrito</button>
    </div>
  );
};
