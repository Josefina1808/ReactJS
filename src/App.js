import React from "react";
import { NavBar } from "./components/NavBar/navBar";
import { ItemListContainer } from "./components/Main/ItemListContainer";
import { ItemList } from "./components/Main/ItemList"

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
      <ItemList id='12' title="Botella Metatrón" description="Botella azul para solarizar" price="890" stock="5"/>
    </div>
  );
};
