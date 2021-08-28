import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar/navBar";
import { Home } from "../components/Main/Home/Home";
import { Contacto } from "../components/Main/Contacto/Contacto";
import { Cart } from "../components/Main/Cart/Cart";
import { ItemListContainer } from "../components/Main/ItemListContainer";
import { ItemDetailContainer } from "../components/Main/ItemDetailContainer";
import { CartProvider } from "../context/cartContext";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/productos" component={ItemListContainer} />
            <Route exact path="/item/:id" component={ItemDetailContainer} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};
