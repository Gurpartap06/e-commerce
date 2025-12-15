import React from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../usecontext/Searchcontext";

import one from "../men/1.webp";
import two from "../men/2.gif";
import three from "../men/3.webp";
import four from "../men/4.webp";
import five from "../men/5.webp";
import six from "../men/6.webp";
import seven from "../men/7.webp";
import eight from "../men/8.webp";
import nine from "../men/9.webp";
import ten from "../men/10.webp";
import elev from "../men/11.webp";
import twe from "../men/12.webp";

export const product = [
  { id: 1, title: "Bewakoof®", desc: "Men's Black Freedom Sounds Graphic Printed", price: 1699, discount: 2699, img: one },
  { id: 2, title: "Bewakoof®", desc: "Men's Oversized Anime Printed T-Shirt", price: 2699, img: two },
  { id: 3, title: "Bewakoof®", desc: "Men's Stylish Streetwear Tee", price: 3699, img: three },
  { id: 4, title: "Bewakoof®", desc: "Men's Black Oversized Graphic Tee", price: 1699, img: four },
  { id: 5, title: "Bewakoof®", desc: "Men's Abstract Printed T-Shirt", price: 2699, img: five },
  { id: 6, title: "Bewakoof®", desc: "Men's Classic Solid Black Tee", price: 3699, img: six },
  { id: 7, title: "Bewakoof®", desc: "Men's Quote Printed T-Shirt", price: 1699, img: seven },
  { id: 8, title: "Bewakoof®", desc: "Men's Half-Sleeve Printed Tee", price: 2699, img: eight },
  { id: 9, title: "Bewakoof®", desc: "Men's Urban Style Graphic Tee", price: 3699, img: nine },
  { id: 10, title: "Bewakoof®", desc: "Men's Typography Black Tee", price: 4699, img: ten },
  { id: 11, title: "Bewakoof®", desc: "Men's Printed Cotton T-Shirt", price: 4699, img: elev },
  { id: 12, title: "Bewakoof®", desc: "Men's Cool Graphic Tee", price: 4699, img: twe },
];

const Men = () => {
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
          MEN'S SECTION
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
              <Link to={`/men/${item.id}`}>
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

                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-red-500">
                    ₹{item.price}
                  </span>
                  {item.discount && (
                    <span className="text-sm text-gray-400 line-through">
                      ₹{item.discount}
                    </span>
                  )}
                </div>

                <Link to={`/men/${item.id}`}>
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

export default Men;
