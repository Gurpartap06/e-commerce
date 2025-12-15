
import React, { useEffect, useState } from "react";

const Api = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-red-500">
        {error}
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.slice(0, 12).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-56 bg-gray-100 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain p-4"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              <h3 className="text-sm font-semibold line-clamp-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 line-clamp-2">
                {item.description}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-green-600">
                  ₹{Math.round(item.price * 80)}
                </span>

                <span className="text-sm text-gray-400">
                  ⭐ {item.rating.rate}
                </span>
              </div>

              <button className="w-full mt-3 bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Api;
