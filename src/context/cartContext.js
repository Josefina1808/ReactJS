import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, counter) => {
    const isInCart = cart.find((cart) => cart.item.id === item.id);

    if (isInCart) {
      const newQ = isInCart.counter + counter;
      const newCart = cart.filter((cart) => cart.item.id !== item.id);
      setCart([...newCart, { item, counter: newQ }]);
    } else {
      setCart([...cart, { item, counter }]);
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

/* FORMA NO OPTIMIZADA
const addItem = (item, counter) => {
    if (!isInCart(item.id)) {
      item.stock -= counter; 
      setCart([...cart, { item, counter }]);
    } else {
      setCart(cart.map((i) => {
        if (i.item.id === item.id) {
          i.counter = i.counter + counter; 
          i.item.stock =  i.item.stock - counter; 
        }
        return i
      }))
    }
  };
*/
