import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../usecontext/Searchcontext";

const ProductApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { searchedProducts } = useSearch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://e-commerce-oz7e.onrender.com/api/productApi/getAll"
        );
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        {error}
      </div>
    );

  const productsToShow = searchedProducts ?? data;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsToShow.slice(0, 12).map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* Image */}
            <Link to={`/ProductApiDetails/${product._id}`}>
              <div className="w-full h-56 bg-gray-100 flex items-center justify-center">
                <img
                  src={`https://e-commerce-oz7e.onrender.com/assests/images/${product.avatar}`}
                  alt={product.brand}
                  className="w-full h-full object-contain p-3 hover:scale-105 transition"
                />
              </div>
            </Link>

            {/* Content */}
            <div className="p-4 space-y-2">
              <h3 className="text-base font-semibold text-gray-800">
                {product.brand}
              </h3>

              <p className="text-sm text-gray-500 line-clamp-2">
                {product.description}
              </p>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.oldPrice}
                </span>
                <span className="text-lg font-bold text-green-600">
                  ₹{product.price}
                </span>
              </div>

              <button className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductApi;
