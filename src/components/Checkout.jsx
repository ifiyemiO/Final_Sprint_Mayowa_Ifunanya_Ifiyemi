import React, { useState, useContext } from "react";
import { ShoppingCartContext } from "../components/context/ShoppingCartContext";

const Checkout = () => {
  const { cartItems, clearCart } = useContext(ShoppingCartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Dummy function to simulate order placement
  const placeOrder = (event) => {
    event.preventDefault();
    // Here, you would handle the order placement logic,
    // which might involve sending data to a backend service.
    console.log("Order placed:", cartItems);
    setOrderPlaced(true);
    clearCart(); // Clear the cart after placing the order
  };

  if (orderPlaced) {
    return <div>Thank you for your order!</div>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={placeOrder}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <br />
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />
        </div>
        <br />
        <div>
          <label htmlFor="card">Card#:</label>
          <input type="number" id="card" name="card" required />
        </div>
        <br />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
