import React from "react";
import "./main.css";
import Item from "./Item"
import IMG from "../../img/products/1.jpg";

//array con productos
const products = [
    {id:"1",title:"Botella Flor de la Vida", description:"Botella para solarizar", price:"1000", image:"../../img/products/1.jpg", stock:"100"},
    {id:"2",title:"Botella Metatrón", description:"Botella para solarizar", price:"1000", image:"../../img/products/2.jpg", stock:"100"},
    {id:3,title:"Posa Botella Metatrón", description:"Para solarización", price:469, image:"../../img/products/3.jpg", stock:50},
    {id:4,title:"Posa Botella Flor", description:"Para solarización", price:469, image:"../../img/products/4.jpg", stock:50},
    {id:5,title:"Pulsera Metratón", description:"Pulsera con energía positiva", price:439, image:"../../img/products/5.jpg", stock:20},
    {id:6,title:"Pulsera Flor de la Vida", description:"Pulsera con energía positiva", price:439, image:"../../img/products/6.jpg", stock:20},
    {id:7,title:"Vaso cristal azul", description:"Capacidad: 600cc", price:969, image:"../../img/products/7.jpg", stock:48},
    {id:8,title:"Copa cristal azul", description:"Capacidad: 600cc", price:1136, image:"../../img/products/8.jpg", stock:36},
    {id:9,title:"Agua mineral Sola´n de Cabras", description:"500 ml - Botella de vidrio", price:533, image:"../../img/products/9.jpg", stock:12},
    {id:10,title:"Agua mineral Sola´n de Cabras", description:"750 ml - Botella de vidrio", price:789, image:"../../img/products/10.jpg", stock:12},
    {id:10,title:"Agua mineral Sola´n de Cabras", description:"1000 ml - Botella de vidrio", price:996, image:"../../img/products/11.jpg", stock:12},
]
const task = () => {
    new Promise (({resolve, reject}) => {
        setTimeout(() => {
            resolve(products);
        }, 200);
    });
    task()
    .then (result => {
        console.log(result);
    },
    (err) => console.log(err)
    )
    .finally (() => console.log("finalizado"));
}

export const ItemList = () => {
    return (
        <div className="productos container">
            <Item id="1"title="Botella Metatrón"  description="Botella azul para solarizar" price="890" stock="6" image={IMG}/>
        </div>
    )
}
