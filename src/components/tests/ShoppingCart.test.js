import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ShoppingCartProvider } from "./ShoppingCartContext";
import ShoppingCart from "./ShoppingCart";

// Mock products data
const mockProducts = [
  {
    id: 1,
    name: "Camera",
    description: "Professional DSLR Camera",
    price: 1200.0,
  },
  // Add more mock products as needed for your tests
];

// Mock ShoppingCartContext
jest.mock("./ShoppingCartContext", () => ({
  useShoppingCart: () => ({
    cartItems: mockProducts,
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
    clearCart: jest.fn(),
  }),
}));

describe("ShoppingCart", () => {
  it("renders shopping cart with products", () => {
    const { getByText } = render(
      <ShoppingCartProvider>
        <ShoppingCart />
      </ShoppingCartProvider>
    );

    // Check that the Camera product renders
    expect(getByText("Camera")).toBeInTheDocument();
    expect(getByText("Professional DSLR Camera")).toBeInTheDocument();
    expect(getByText("$1200.00")).toBeInTheDocument();
  });

  it("handles removing an item from the cart", () => {
    const removeFromCart = jest.fn();
    const { getByText } = render(
      <ShoppingCartProvider value={{ removeFromCart }}>
        <ShoppingCart />
      </ShoppingCartProvider>
    );

    fireEvent.click(getByText("Remove"));
    expect(removeFromCart).toHaveBeenCalledWith(1);
  });
});
