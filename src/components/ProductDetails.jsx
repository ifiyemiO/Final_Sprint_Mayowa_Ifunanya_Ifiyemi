import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../components/api/api.js";
import ShoppingCart from "./ShoppingCart.jsx";

const ProductDetails = () => {
  // useParams hook to get the productId from the URL
  const { productId } = useParams();

  // Assuming getProductById is a synchronous function that fetches product by id
  // In a real-world app, this might be fetched asynchronously from an API
  const product = getProductById(parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-details-image"
      />
      <div className="product-details-info">
        <h2 className="product-details-title">{product.name}</h2>
        <p className="product-details-description">{product.description}</p>
        <p className="product-details-price">${product.price.toFixed(2)}</p>
        {<ShoppingCart />}
      </div>
    </div>
  );
};

export default ProductDetails;
