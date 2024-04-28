import cameraImage from "../images/CAMERA_04.jpg";
import headphoneImage from "../images/HEADPHONES_01.jpg";
import watchImage from "../images/WATCH_05.jpg";
import dressesImage from "../images/DRESSES_01.jpg";
import lotionImage from "../images/LOTION_01.jpg";
import computerImage from "../images/COMPUTER_04.jpg";
import shoesImage from "../images/SHOES_01.jpg";
import drillImage from "../images/DRILL_01.png";
import dumbbellImage from "../images/DUMBBELLS_01.jpg";
import cosmeticImage from "../images/COSMETCIS_01.jpg";
import smartphoneImage from "../images/SMARTPHONE_01.jpg";
import televisionImage from "../images/TELEVISION_01.jpg";

const products = [
  {
    id: 1,
    name: "Camera",
    description: "Professional DSLR Camera",
    price: 1200.0,
    ImageUrl: cameraImage,
  },
  {
    id: 2,
    name: "Headphone",
    description: "Studio Microphone",
    price: 300.0,
    ImageUrl: headphoneImage,
  },

  {
    id: 3,
    name: "Wrist Watch",
    description: "Luxury Men's Watch",
    price: 7500.0,
    ImageUrl: watchImage,
  },
  {
    id: 4,
    name: "Fashion",
    description: "Elegant Evening Gown",
    price: 599.99,
    ImageUrl: dressesImage,
  },
  {
    id: 5,
    name: "Essential Oil ",
    description: "Spearmint Essential Oil ",
    price: 24.99,
    ImageUrl: lotionImage,
  },
  {
    id: 6,
    name: "Mobile device",
    description: "High Performance Laptop",
    price: 1500.0,
    ImageUrl: computerImage,
  },
  {
    id: 7,
    name: "Shoes",
    description: "Nike Athletic Shoes",
    price: 120.0,
    ImageUrl: shoesImage,
  },
  {
    id: 8,
    name: "Cosmetic",
    description: "Long-lasting Lipstick",
    price: 35.0,
    ImageUrl: cosmeticImage,
  },
  {
    id: 9,
    name: "Television",
    description: "Samsung Smart HD",
    price: 999.99,
    ImageUrl: televisionImage,
  },
  {
    id: 10,
    name: "Drill set",
    description: "Dewalt Powerful Cordless Drill",
    price: 199.99,
    ImageUrl: drillImage,
  },
  {
    id: 11,
    name: "Smartphone",
    description: "Samsung Galaxy A23",
    price: 499.99,
    ImageUrl: smartphoneImage,
  },
  {
    id: 12,
    name: "Fitness Tool",
    description: "Durable Skipping Rope",
    price: 14.99,
    ImageUrl: dumbbellImage,
  },
];
export const getProducts = () => products;

export const getProductById = (productId) =>
  products.find((product) => product.id === productId);

export default products;
