import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";
import { ItemList } from "./ItemList";
import { getFirestore } from "../../../firebase/index";
import "../main.css";

export const ItemListContainer = () => {
  const [state, setState] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    let arr = [];
    getFirestore()
      .collection("products")
      .get()
      .then((doc) => {
        doc.docs.map((item) => arr.push({ id: item.id, ...item.data() }));
        if (category !== "all") {
          setState(arr.filter((item) => item.categoryName === category));
        } else {
          setState(arr);
        }
      });
    
  }, [category]);

  return (
    <div>
      <Container>
        {state.length > 0 ? <ItemList state={state} /> : <p>Cargando...</p>}
      </Container>
    </div>
  );
};

/* let products = data.docs.map((doc) => {
  let id = doc.id;
  let item = doc.data();
  return {id, ...item}
});
setState(products) */

/* PROMISE SIN FIREBASE
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
*/
