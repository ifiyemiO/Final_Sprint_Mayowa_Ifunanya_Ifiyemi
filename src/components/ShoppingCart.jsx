import React, { useContext } from "react";
import { ShoppingCartContext } from "../components/context/ShoppingCartContext";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useContext(ShoppingCartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.ImageUrl} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price per item: ${item.price.toFixed(2)}</p>
          <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
          <button onClick={() => removeFromCart(item.id)}>
            Remove from Cart
          </button>

          <Link to="/checkout" className="checkout-button">
            Go to Checkout
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
