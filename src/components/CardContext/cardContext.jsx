import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    const removeFromCard=(id)=>{
        setCartItems((prevItems)=>{
            const index=prevItems.findIndex(item=>item.id===id)
            if(index >= 0){
                const updateItems=[...prevItems]
                updateItems.splice(index,1)
                return updateItems
            }
            return prevItems
        })
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCard }}>
            {children}
        </CartContext.Provider>
    );
};