import React from "react";
import { render } from "@testing-library/react";
import ProductList from "./ProductList";
import { BrowserRouter } from "react-router-dom";

// Mock the `getProducts` function from the api
jest.mock("./api/api", () => ({
  getProducts: () => [
    {
      id: 1,
      name: "Camera",
      description: "Professional DSLR Camera",
      price: 1200.0,
      imageUrl: "camera.jpg",
    },
    {
      id: 2,
      name: "Headphone",
      description: "Studio Microphone",
      price: 300.0,
      imageUrl: "headphone.jpg",
    },
    {
      id: 3,
      name: "Wrist Watch",
      description: "Luxury Men's Watch",
      price: 7500.0,
      imageUrl: "watch.jpg",
    },
    // ...other products
  ],
}));

// Wrap component in BrowserRouter since it uses Link from react-router
const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: BrowserRouter });
};

describe("ProductList", () => {
  it("renders product list", () => {
    const { getByText, getAllByAltText } = renderWithRouter(<ProductList />);

    // Check for product names
    expect(getByText("Camera")).toBeInTheDocument();
    expect(getByText("Headphone")).toBeInTheDocument();
    expect(getByText("Wrist Watch")).toBeInTheDocument();

    // Check for product images
    const images = getAllByAltText(/product/i);
    expect(images).toHaveLength(3); // Assuming we have 3 products
  });

  // You can add more tests to check for other functionalities like clicking on product links, etc.
});
