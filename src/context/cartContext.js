import React, {useContext, useState, createContext} from 'react';

const CartContext = createContext([]);
const CartUpdateContext = createContext()


export const useCart = () => {
    return useContext(CartContext)
} 

export const useCartUpdate = () => {
    return useContext(CartUpdateContext)
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (counter, item) => {
        setCart([...cart, {item, counter}]);
    };

    const removeItem = (id) => {
        const newItem = cart.filter(item => item.id !== id)
        setCart(newItem)
    };
    
    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={addItem, removeItem, clearCart}>
            {children}
        </CartContext.Provider>
    )
}