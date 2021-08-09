import React from "react";
import { NavBar } from "./components/NavBar/navBar";
import { ItemListContainer } from "./components/Main/ItemListContainer";
import { ItemCount } from "./components/Main/ItemCount"

const greeting = {
  greeting: "Bienvenido a la tienda online de SunWater",
};

const stock = {
    stock: 5,
}

export const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={greeting.greeting} />
      <ItemCount stock={stock.stock}/>
    </div>
  );
};
