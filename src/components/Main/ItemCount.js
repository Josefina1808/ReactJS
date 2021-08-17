import React, { useState } from "react";
import "./main.css";
import Swal from 'sweetalert2'

export const ItemCount = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  const onAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const onDecrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

 const alertAdd = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto añadido al carrito',
      showConfirmButton: false,
      timer: 1400
    })
  }

  return (
    <div>
      <div className="card__product--btn_qty">
        <button onClick={onDecrease}>-</button>
        <p>{counter}</p>
        <button onClick={onAdd}>+</button>
      </div>
      <button className="card__product--btn_add" onClick={alertAdd}>Agregar al carrito</button>
    </div>
  );
};
