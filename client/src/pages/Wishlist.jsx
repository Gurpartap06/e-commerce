
import React, { useState } from "react";
import { Link } from "react-router-dom";

import picc from "../men/1.webp";
import piccc from "../men/2.gif";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      _id: "1",
      brand: "over sized t- shirt",
      price: 2999,
      img: picc,
    },
    {
      _id: "2",
      brand: "over sized t- shirt",
      price: 25999,
      img: piccc,
    },

    {
      _id: "1",
      brand: "over sized t- shirt",
      price: 2999,
      img: picc,
    },
    {
      _id: "2",
      brand: "over sized t- shirt",
      price: 25999,
      img: piccc,
    },

    {
      _id: "1",
      brand: "over sized t- shirt",
      price: 2999,
      img: picc,
    },
    {
      _id: "2",
      brand: "over sized t- shirt",
      price: 25999,
      img: piccc,
    },

    {
      _id: "1",
      brand: "over sized t- shirt",
      price: 2999,
      img: picc,
    },
    {
      _id: "2",
      brand: "over sized t- shirt",
      price: 25999,
      img: piccc,
    },


    
  ]);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item._id !== id));
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <p className="text-xl font-semibold">Your Wishlist is Empty 💔</p>
        <Link to="/" className="mt-4 px-6 py-2 bg-black text-white rounded">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Wishlist ❤️</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={item.img}
              alt={item.brand}
              className="w-full h-48 object-contain p-4"
            />

            <div className="p-4">
              <p className="font-semibold">{item.brand}</p>
              <p className="text-red-500 font-bold">₹{item.price}</p>

              <button
                onClick={() => removeFromWishlist(item._id)}
                className="mt-3 w-full bg-red-500 text-white py-2 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
