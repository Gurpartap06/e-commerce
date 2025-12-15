import React from "react";
import { Link } from "react-router-dom";

import one from "../mobile cover/1.webp";
import two from "../mobile cover/2.webp";
import three from "../mobile cover/3.webp";
import four from "../mobile cover/4.webp";
import five from "../mobile cover/5.webp";
import six from "../mobile cover/6.webp";
import seven from "../mobile cover/7.webp";
import eight from "../mobile cover/8.webp";
import nine from "../mobile cover/9.webp";
import ten from "../mobile cover/10.webp";
import elev from "../mobile cover/11.webp";
import twe from "../mobile cover/12.webp";

export const product = [
  { id: 1, title: "Bewakoof®", desc: "Dream Journal Premium Glass Cover for Apple", price: 1699, img: one },
  { id: 2, title: "Bewakoof®", desc: "Dream Journal Premium Glass Cover for Apple", price: 1699, img: two },
  { id: 3, title: "Bewakoof®", desc: "Dream Journal Premium Glass Cover for Apple", price: 1699, img: three },
  { id: 4, title: "Bewakoof®", desc: "Dream Journal Premium Glass Cover for Apple", price: 1699, img: four },
  { id: 5, title: "Bewakoof®", desc: "Dream Journal Premium Glass Cover for Apple", price: 1699, img: five },
  { id: 6, title: "Bewakoof®", desc: "Dream Journal Premium Glass Cover for Apple", price: 1699, img: six },
  { id: 7, title: "Bewakoof®", desc: "Dream Journal Premium Glass Cover for Apple", price: 1699, img: seven },
  { id: 8, title: "Bewakoof®", desc: "Dream Journal Premium Glass Cover for Apple", price: 1699, img: eight },
  { id: 9, title: "Bewakoof®", desc: "Dream Journal Premium Glass Cover for Apple", price: 1699, img: nine },
  { id: 10, title: "Bewakoof®", desc: "Dream Journal Premium Glass Cover for Apple", price: 1699, img: ten },
  { id: 11, title: "Bewakoof®", desc: "Dream Journal Premium Glass Cover for Apple", price: 1699, img: elev },
  { id: 12, title: "Bewakoof®", desc: "Dream Journal Premium Glass Cover for Apple", price: 1699, img: twe },
];

const MobileCover = () => {
  return (
    <>
      {/* Header */}
      <div className="bg-black text-center py-4">
        <h2 className="text-2xl font-bold text-yellow-300">
          MOBILE COVER SECTION
        </h2>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {product.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <Link to={`/MobileCover/${item.id}`}>
                <div className="w-full h-56 bg-gray-100 flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain p-3 hover:scale-105 transition"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="p-4 space-y-1">
                <p className="text-sm font-semibold">{item.title}</p>

                <p className="text-sm text-gray-500 line-clamp-2">
                  {item.desc}
                </p>

                <span className="text-lg font-bold text-red-500">
                  ₹{item.price}
                </span>

                <Link to={`/MobileCover/${item.id}`}>
                  <button className="mt-3 w-full bg-yellow-300 hover:bg-yellow-400 text-black font-medium py-2 rounded">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileCover;
