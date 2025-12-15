import React from "react";
import { useNavigate } from "react-router-dom";


const Payment = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white w-full max-w-3xl p-6 sm:p-8 rounded-lg shadow-md">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Secure Checkout
          </h1>
          <p className="text-sm text-gray-500">
            Choose your preferred payment method
          </p>
        </div>

        {/* Card Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Cardholder Name
            </label>
            <input
              type="text"
              placeholder="Name on card"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              placeholder="**** **** **** 1111"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Expiry Date
            </label>
            <input
              type="month"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="password"
              placeholder="***"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Billing Details */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <p className="text-lg font-medium text-gray-800">
              Billing Details
            </p>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="abc@gmail.com"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              className="mt-1 w-full px-4 py-2 border rounded-md bg-white focus:ring-2 focus:ring-blue-500"
            >
              <option>Select a country</option>
              <option>India</option>
              <option>USA</option>
              <option>Australia</option>
              <option>Canada</option>
              <option>Europe</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-8">
          <button
            onClick={() => {alert("YOUR ORDER HAS BEEN PLACED ✅")
               navigate("/");
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
