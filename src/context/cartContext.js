import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.find((item) => item.item.id === id);
  };

  const addItem = (item, counter) => {
    if (isInCart(item.id) === undefined) {
      setCart([...cart, { item, counter }]);
    } else {
      console.log(
        "El producto ya está en el carrito, debe aumentar el counter pero no agregarlo nuevamente"
      );
    }
  };

  const removeItem = (id) => {
    const newItem = cart.filter(({ item }) => item.id !== id);
    setCart(newItem);
  };

  const clearCart = () => setCart([]);

  const getSubtotal = (counter, price) => {
    let result = counter * price;
    return result;
  };

  function sumar(lista) {
    let resultado = 0;
    for (let i = 0; i < lista.length; i++) {
      resultado += lista[i];
    }
    return resultado;
  }

  const getTotal = () => {
    let subtotales = cart.map((item) => item.counter * item.item.price);
    return sumar(subtotales);
  };

  const itemQuantity = () => {
    let q = cart.map((item) => item.counter);
    let result = sumar(q);
    return result;
  };

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clearCart,
        cart,
        getSubtotal,
        getTotal,
        itemQuantity,
      }}
    >
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
