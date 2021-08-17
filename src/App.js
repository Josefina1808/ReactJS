import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/navBar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Main/Home/Home";
import { Contacto } from "./components/Main/Contacto/Contacto"
import { ItemListContainer } from "./components/Main/ItemListContainer";
import { ItemDetailContainer } from "./components/Main/ItemDetailContainer";

const greeting = {
  greeting: "Bienvenido a la tienda online de SunWater",
};

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar greeting={greeting.greeting} />
        <Switch>
          <Route exact path="/home" component={Home} />
        </Switch>
        <Switch>
          <Route exact path="/productos" component={ItemListContainer}/>
        </Switch>
        <Switch>
          <Route exact path="/contacto" component={Contacto} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
