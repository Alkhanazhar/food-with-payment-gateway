import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  //   const [cart, setCart] = useState(null);
  const addToCart = (food) => {
    const existing = cartItems.find((item) => item._id === food._id);
    if (existing) {
      setCartItems(
        cartItems.map((item) => {
          return item._id === food._id
            ? { ...existing, qty: existing.qty + 1 }
            : item;
        })
      );
    } else {
      setCartItems([...cartItems, { ...food, qty: 1 }]);
    }
  };
  const removeFromCart = (food) => {
    const existing = cartItems.find((item) => item._id === food._id);
    if (existing) {
      if (existing.qty === 1) {
        setCartItems(cartItems.filter((item) => item._id !== food._id));
      } else {
        setCartItems(
          cartItems.map((item) => {
            return (item._id = food._id
              ? { ...existing, qty: item.qty - 1 }
              : item);
          })
        );
      }
    }
  };
  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};
export { useCartContext, CartContextProvider };
