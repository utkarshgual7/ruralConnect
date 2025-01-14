import React, { useState } from "react";
import { Link } from "react-router-dom";

const Store = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is a product description",
      price: "$20",
      image: "https://via.placeholder.com/150", // Add a valid image URL
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is a product description",
      price: "$25",
      image: "https://via.placeholder.com/150", // Add a valid image URL
    },
    // Add more products as needed
  ];

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-lg font-bold text-gray-800 mt-4">
                {product.price}
              </p>
              <div className="mt-4">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="p-4 border-t">
              <Link
                to={`/product/${product.id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Your Cart</h2>
        <div className="mt-4">
          {cart.length > 0 ? (
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="mb-2">
                  {item.name} - {item.price}
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Store;
