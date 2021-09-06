import React, { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./main.css";
import { getFirestore } from "../../firebase/index";
//import products from "./products/products";

export const ItemDetailContainer = () => {
  const [state, setState] = useState([]);
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    const db = getFirestore();
        db.collection('products').doc(id)
        .get()
        .then(res => {
          setState({id:res.id, ...res.data()})
        })
      }, [id]);
      
      console.log(state);
  return (
    <div>
      {state && (
        <ItemDetail
        state={state}
        />
        )}
    </div>
  );
};

/* state={state.find((product) => (id) === product.id)} */
/* {state.length > 0 ? <ItemDetail state={state.find((product) => id === product.id)}/>
: <p>Cargando...</p>} */
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
