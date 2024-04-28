import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductDetails from "./ProductDetails";

// Mock the `getProductById` function from the api
jest.mock("./api/api", () => ({
  getProductById: jest.fn((id) => ({
    id,
    name: "Camera",
    description: "Professional DSLR Camera",
    price: 1200.0,
    imageUrl: "camera.jpg",
  })),
}));

describe("ProductDetails", () => {
  it("displays the product details", () => {
    // Setup and render ProductDetails inside a router because it uses useParams
    const productId = 1; // Example product ID
    render(
      <BrowserRouter>
        <ProductDetails />
      </BrowserRouter>
    );

    // Assert that product details are displayed
    expect(screen.getByText("Camera")).toBeInTheDocument();
    expect(screen.getByText("Professional DSLR Camera")).toBeInTheDocument();
    expect(screen.getByText("$1200.00")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "camera.jpg");
  });

  // Add more tests here as needed
});
