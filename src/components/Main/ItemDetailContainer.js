import React, { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./main.css";
import { getFirestore } from "../../firebase/index";
//import products from "./products/products";

export const ItemDetailContainer = () => {
  const [state, setState] = useState([]);
  const { id } = useParams();

  /* const q = query(collection(getFirestore, "products"), where("id", "==", id)); */
  useEffect(() => {
    getFirestore()
      .collection("products")
      .where("id", "==", Number(id))
      .get()
      .then((data) => {
        const product = data.docs.map((doc) => doc.data());
        setState(product);
      });
  }, [id]);

  console.log(state);
  return (
    <div>
      {state.length && (
        <ItemDetail
          /* state={state.find((product) => Number(id) === product.id)} */
          state={state[0]}
        />
      )}
      {/* {state.length > 0 ? <ItemDetail state={state.find((product) => id === product.id)}/>
      : <p>Cargando...</p>} */}
    </div>
  );
};

/* PROMESA sin Firebase
const getItem = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 200);
});

useEffect(() => {
  getItem.then((result) => {
    setState(result);
  }); 
}, [id]); 
*/
