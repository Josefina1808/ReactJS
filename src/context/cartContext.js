import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

   const isInCart = (id) => {cart.includes(({item}) => item.id === id)}; 
   /* Siempre es undefined por lo tanto siempre se ejecuta el addItem */

  const addItem = (item, counter) => {
    if (isInCart(item.id) === undefined) {
      setCart([...cart, { item, counter }]);
    } else {
      console.log(isInCart(item.id))
    }
    console.log(isInCart(item.id))
  };
 

  const removeItem = (id) => {
    const newItem = cart.filter(({item}) => item.id !== id);
    setCart(newItem);
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ addItem, removeItem, clearCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

/* DUDAS
- Debería quitar "agregar al carrito" de ItemCount? y solo dejar que la forma para agregar al carrito sea clickeando el "+"
- Cómo imprimo los objetos del array cart en el Cart.js?
- No pude hacer la lógica que impide el duplicado de productos
- Y tampoco sé si el removeItem va a funcionar
*/
