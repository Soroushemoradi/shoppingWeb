import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const exist = prevItems.find(item => item.id === product.id);
            if (exist) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, count: item.count + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, count: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    const updateCartItem = (id, newCount) => {
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.id === id ? { ...item, count: newCount } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItem }}>
            {children}
        </CartContext.Provider>
    );
};
