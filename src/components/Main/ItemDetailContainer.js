import React, { useState, useEffect } from "react";
import {ItemDetail} from "./ItemDetail"
import "./main.css";
//import ItemDetail from "./ItemDetail";

const productsDetail = [
  {
    id: "1",
    title: "Botella Flor de la Vida",
    description:
      "Botella para solarizar agua con el poder del crital azul. La capacidad de la botella es de 750ml. Se puede intencionar con dieferentes palabras. Las opciones son: gracias, equilibrio, amor y coherencia.",
    price: "1000",
    image: "../../img/products/1.jpg",
    stock: "100",
  },
];

export const ItemDetailContainer = () => {
  const [state, setState] = useState([]);

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productsDetail);
    }, 200);
  });

  useEffect(() => {
    getItem.then((result) => {
      setState(result);
    });
  }, []);

  console.log(state);
  return (
    <div>
        <ItemDetail state={state}/>
    </div>
  );
};


