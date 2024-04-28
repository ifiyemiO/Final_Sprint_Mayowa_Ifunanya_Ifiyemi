import React, { useContext } from "react";
//import { getProducts } from "./api/api";
import products from "../components/api/api";
import { ShoppingCartContext } from "../components/context/ShoppingCartContext";
import { Link } from "react-router-dom";

const ProductList = () => {
  // Since products are being imported and not fetched from an API, we don't need useState or useEffect
  const { addToCart } = useContext(ShoppingCartContext);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.ImageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
          <Link to={`/products/${product.id}`}>View Details</Link>
          <br />
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
