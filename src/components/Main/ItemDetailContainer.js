import React, { useState, useEffect } from "react";
import {ItemDetail} from "./ItemDetail"
import {useParams} from "react-router-dom"
import "./main.css";
import products from "./products/products"


export const ItemDetailContainer = () => {
  const [state, setState] = useState([]);
  const {id} = useParams();
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
  
  return (
    <div>
      {state.length && <ItemDetail state={state.find((product) => Number(id) === product.id)}/>}
      {/* {state.length > 0 ? <ItemDetail state={state.find((product) => id === product.id)}/>
      : <p>Cargando...</p>} */}
    </div>
  );
};


