import React from "react";
import { NavBar } from "./components/NavBar/navBar";
import { ItemListContainer } from "./components/Main/ItemListContainer";
import { ItemList } from "./components/Main/ItemList"

const greeting = {
  greeting: "Bienvenido a la tienda online de SunWater",
};

export const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={greeting.greeting} />
    </div>
  );
};
