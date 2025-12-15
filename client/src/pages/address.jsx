import React from "react";
import { Link } from "react-router-dom";

const Address = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white w-full max-w-3xl p-6 sm:p-8 rounded-lg shadow-md">
        
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
          SHIPPING DETAILS
        </h1>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Phone */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address Line 1 */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Address Line 1
            </label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address Line 2 */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Address Line 2
            </label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Locality */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Locality
            </label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Pincode */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pin Code
            </label>
            <input
              type="number"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <div className="sm:col-span-2 mt-4">
            <Link to="/payment">
              <button
                type="button"
                onClick={() => alert("Are you sure you want to continue?")}
                className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Proceed To Payment
              </button>
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Address;
