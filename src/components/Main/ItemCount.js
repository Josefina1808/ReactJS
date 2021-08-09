import React, {useState} from "react";
import "./main.css";

export const ItemCount = ({stock}) => {
    const [counter, setCounter ] = useState(1);

    const onAdd = () => {
        setCounter(counter + 1)
        //Este condicional está comentado pq no funciona, nunca suma; porque "nunca" se cumple la condición
        /* if (counter < Number({stock})) {
            setCounter(counter + 1)
        } else {
            console.log('Stock insuficiente')
        } */
    }

    const onDecrease = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        } else {
            console.log('No se puede restar')
        }
    }

    return (
        <div className="productos">
          <div className="card__product">
            <div className="card_product--title_principal">
              <h3 className="card__product--title">Producto</h3>
              <p className="card__product--desc">Descripción del producto</p>
            </div>
            <div className="card__product--btn_qty">
              <button onClick={onDecrease}>-</button>
              <p>{counter}</p>
              <button onClick={onAdd}>+</button>
            </div>
            <button className="card__product--btn_add">Agregar al carrito</button>
          </div>
        </div>
      );
}
