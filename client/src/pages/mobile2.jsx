
import React from 'react';
import { useParams } from 'react-router-dom';
import { product } from './MobileCover';
import { addToCart } from '../slice/Cartslice';
import { useDispatch } from 'react-redux';

const Sample = () => {
  const { id } = useParams();
  const dispatch=useDispatch()
  const ab = product.find((item) => item.id === parseInt(id));

  if (!ab) {
    return <p className="text-center text-red-500 mt-10">Product not found</p>;
  }

const handleAdd =()=>{
dispatch(addToCart(ab))
}

  return (
    <div className="mt-8 mb-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={ab.img}
            alt={ab.title}
            className="w-full max-w-md rounded-lg object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center space-y-6">

          {/* Brand */}
          <h2 className="text-xl font-semibold text-gray-600 uppercase">{ab.title}</h2>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Men's Black Freedom Sounds Graphic Printed Oversized Acid Wash T-shirt
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

          {/* Extra Offers */}
          <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-700 p-3 rounded">
            🎉 Get an extra 10% OFF on prepaid orders!
          </div>

          {/* Buttons */}
          <div onClick={handleAdd} className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded shadow">
              <button>Add to Cart
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
