import React, { useState, useEffect } from "react";
import {ItemDetail} from "./ItemDetail"
import "./main.css";
import products from "./products/products"
//import ItemDetail from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [state, setState] = useState([]);

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 200);
  });

  useEffect(() => {
    getItem.then((result) => {
      setState(result);
    });
  }, []);

  return (
    <div>
        <ItemDetail state={state}/>
    </div>
  );
};


