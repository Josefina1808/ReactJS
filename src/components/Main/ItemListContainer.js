import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { ItemList } from "./ItemList";
import products from "./products/products" //"Base de datos de productos"
import "./main.css";

export const ItemListContainer = () => {
  const [state, setState] = useState([]); // --> tu estado debe empezar como un array

  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 200);
  }); // --> aqui terminas de declarar la promesa

  useEffect(() => {
    // --> el useEffect recibe una función callback como parámetro
    task // --> aquí invocas la función
      .then((result) => {
        setState(result);
      });
  }, []); // --> y los corchetes para que no te genere un loop infinito
  console.log(state)
  return (
    <div>
      <Container>
        <ItemList state={state} />
      </Container>
    </div>
  );
};
