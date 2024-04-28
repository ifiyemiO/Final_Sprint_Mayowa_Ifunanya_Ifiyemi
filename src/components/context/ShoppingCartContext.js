import React, { createContext, useState, useContext } from "react";

// Create the context
export const ShoppingCartContext = createContext();

// Provider component
export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if the item is already in the cart
      const itemExists = prevItems.find((i) => i.id === item.id);

      // If it exists, update the quantity
      if (itemExists) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }

      // If it doesn't exist, add the new item
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Function to remove items from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Function to clear the shopping cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate the total number of items in the cart
  const cartItemCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, cartItemCount }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Custom hook to use the shopping cart context
export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (context === undefined) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};
