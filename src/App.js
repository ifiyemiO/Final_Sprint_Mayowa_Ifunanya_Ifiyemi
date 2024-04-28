// Name: Ifunanya Ejeckam, Mayowa Ogunyemi, Ifiyemi Owi
// Assignment: Final Sprint
// Date April 28, 2024

// Importing necessary components
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import Checkout from "./components/Checkout.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import { ShoppingCartProvider } from "./components/context/ShoppingCartContext";
//import AppContent from "./components/AppContent"; // This is where your Routes and main app content will be

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <div className="App">
          <header className="App-header">{<Header />}</header>
          <Routes>
            <Route exact path="./components/" component={<productList />} />
            <Route path="/product/:productId" component={<ProductDetails />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

          <aside className="sidebar">
            <h1>Categories</h1>
            <Link to="/category/home-gardening">Home & Gardening</Link>
            <Link to="/category/clothing">Clothing</Link>
            <Link to="/category/beauty-cosmetics">Beauty & Cosmetics</Link>
            <Link to="/category/electronics">Electronics</Link>
            <Link to="/cart">Shopping Cart</Link>
            <Link to="/checkout">Checkout</Link>
          </aside>

          <main className="App-content">
            <Link>
              <div className="product-grid">
                <ProductList />
              </div>
            </Link>
          </main>
        </div>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
