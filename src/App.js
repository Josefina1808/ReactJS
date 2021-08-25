import React from "react";
import { CartProvider } from "./context/cartContext";
import { Router } from "./router/Router";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <div>
      <CartProvider>
        <Router />
      </CartProvider>
      <Footer />
    </div>
  );
};
