
import React from 'react';
import { useParams } from 'react-router-dom';
import { product } from './Men';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/Cartslice';

const Men2 = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedProduct = product.find((item) => item.id === parseInt(id));

  if (!selectedProduct) {
    return <p className="text-center text-red-500 mt-10">Product not found</p>;
  }

  const handleAdd = () => {
    dispatch(addToCart(selectedProduct));
  };

  return (
    <div className="mt-8 mb-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={selectedProduct.img}
            alt={selectedProduct.title}
            className="w-full max-w-md rounded-lg object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Brand */}
          <h2 className="text-xl font-semibold text-gray-600 uppercase">{selectedProduct.title}</h2>

          {/* Title / Description */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {selectedProduct.desc}
          </h1>

          {/* Pricing */}
          <div className="space-y-1">
            <div className="text-2xl font-bold text-red-500">₹699</div>
            <div className="text-sm text-gray-500">
              <span className="line-through mr-2">₹2,199</span>
              <span className="text-green-600 font-medium">68% OFF</span>
            </div>
            <p className="text-sm text-gray-400">Inclusive of all taxes</p>
          </div>

          {/* Sizes */}
          <div>
            <p className="text-lg font-medium mb-2">Select Size:</p>
            <div className="flex flex-wrap gap-3">
              {['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map((size) => (
                <button
                  key={size}
                  className="bg-green-700 text-white hover:bg-blue-800 font-medium rounded-full px-4 py-2 transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Extra Offers */}
          <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-700 p-3 rounded">
            🎉 Get an extra 10% OFF on prepaid orders!
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAdd}
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded shadow"
            >
              Add to Cart
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded shadow">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Men2;
