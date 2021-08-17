import React from "react";
import { NavBar } from "./components/NavBar/navBar";
import { ItemListContainer } from "./components/Main/ItemListContainer";
import { ItemDetailContainer } from "./components/Main/ItemDetailContainer";

const greeting = {
  greeting: "Bienvenido a la tienda online de SunWater",
};

export const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={greeting.greeting} />
      <ItemDetailContainer />
    </div>
  );
};
