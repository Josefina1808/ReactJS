import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/navBar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Main/Home/Home";
import { Contacto } from "./components/Main/Contacto/Contacto";
import { Cart } from "./components/Main/Cart/Cart";
import { ItemListContainer } from "./components/Main/ItemListContainer";
import { ItemDetailContainer } from "./components/Main/ItemDetailContainer";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar  />
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/productos" component={ItemListContainer} />
          <Route exact path="/item/:id" component={ItemDetailContainer} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

/* DUDAS */
/* 
- Como mostrar itemDetailContainer, debo crear una ruta? (cómo es lo de categorías?)
- Como hacer con las fotos y la ruta al pasar al itemDetail
- Cómo llamar los datos en el item detail
- Desde Item le podría mandar el objeto a itemDetailContainer??

*/
