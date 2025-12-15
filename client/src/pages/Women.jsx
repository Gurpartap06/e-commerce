import React from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../usecontext/Searchcontext";

import one from "../women/1.webp";
import two from "../women/2.webp";
import three from "../women/3.webp";
import four from "../women/4.webp";
import five from "../women/5.webp";
import six from "../women/6.webp";
import seven from "../women/7.webp";
import eight from "../women/8.webp";
import nine from "../women/9.webp";
import ten from "../women/10.webp";
import elev from "../women/11.webp";
import twe from "../women/12.webp";

export const product = [
  { id: 10, title: "Bewakoof®", desc: "Women's Freedom Sounds Graphic Printed", price: 1699, img: one },
  { id: 12, title: "Bewakoof®", desc: "Women's Oversized Printed Tee", price: 1699, img: two },
  { id: 13, title: "Bewakoof®", desc: "Stylish Women's T-Shirt", price: 1699, img: three },
  { id: 14, title: "Bewakoof®", desc: "Black Graphic Tee for Women", price: 1699, img: four },
  { id: 15, title: "Bewakoof®", desc: "Abstract Print Women's Tee", price: 1699, img: five },
  { id: 16, title: "Bewakoof®", desc: "Solid Black T-Shirt", price: 1699, img: six },
  { id: 17, title: "Bewakoof®", desc: "Quote Printed Tee for Women", price: 1699, img: seven },
  { id: 18, title: "Bewakoof®", desc: "Half-Sleeve Printed Tee", price: 1699, img: eight },
  { id: 19, title: "Bewakoof®", desc: "Urban Style Graphic Tee", price: 1699, img: nine },
  { id: 111, title: "Bewakoof®", desc: "Typography Black Tee", price: 1699, img: ten },
  { id: 112, title: "Bewakoof®", desc: "Printed Cotton T-Shirt", price: 1699, img: elev },
  { id: 113, title: "Bewakoof®", desc: "Cool Graphic Tee", price: 1699, img: twe },
];

const Women = () => {
  const { search } = useSearch();

  const filteredProducts = product.filter((item) =>
    `${item.title} ${item.desc} ${item.price}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      {/* Header */}
      <div className="bg-black text-center py-4">
        <h2 className="text-2xl font-bold text-yellow-300">
          WOMEN'S SECTION
        </h2>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <Link to={`/women/${item.id}`}>
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

                <Link to={`/women/${item.id}`}>
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

export default Women;
