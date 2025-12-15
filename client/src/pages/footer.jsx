import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-bold text-yellow-300 mb-4">
            CUSTOMER SERVICE
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>Return Order</li>
            <li>Cancel Order</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-bold text-yellow-300 mb-4">
            COMPANY
          </h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>We are Hiring</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-bold text-yellow-300 mb-4">
            CONNECT WITH US
          </h3>
          <ul className="space-y-2 text-sm">
            <li>ⓕ 4.7M People Like Us</li>
            <li>𝕏 1M Followers</li>
            <li>Instagram</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold text-yellow-300 mb-4">
            KEEP UP TO DATE
          </h3>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded text-black outline-none"
            />
            <button className="bg-yellow-300 text-black font-semibold py-2 rounded hover:bg-yellow-400 transition">
              Submit
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
