import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  /*  const isInCart = (id) => {cart.includes(item.id === id)}; */

  const addItem = (item, counter) => {
    setCart([...cart, { item, counter }]);
  };

  const removeItem = (id) => {
    const newItem = cart.filter((item) => item.id !== id);
    setCart(newItem);
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ addItem, removeItem, clearCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

/*   */
