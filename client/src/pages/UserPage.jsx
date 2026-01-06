

import React, { useState } from "react";
import axios from "axios";
import ab from "../loginn/login.jpg";
import { useNavigate } from "react-router-dom";

const Base_Url = "https://e-commerce-1-ftod.onrender.com";

const UserPage = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState(true);

  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    number: "",
    password: "",
  });

  // Input handler
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // SIGNUP
  const handleSignup = async () => {
    try {
      const res = await axios.post(`${Base_Url}/api/signup`, {
        username: formdata.username,
        email: formdata.email,
        number: formdata.number,
        password: formdata.password,
      });

      alert("Signup successful!");
      setLogin(true);
    } catch (err) {
      console.error(err);
      alert("Signup failed!");
    }
  };

  // LOGIN
  const handleLogin = async () => {
    try {
      const res = await axios.post(`${Base_Url}/api/loginWithUsername`, {
        username: formdata.username,
        password: formdata.password,
      });

      if (res.data.user && res.data.user._id) {
        localStorage.setItem("userId", res.data.user._id);
      }

      alert("Login successful!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Invalid Login!");
    }
  };

  // FINAL SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (login) {
      if (!formdata.username || !formdata.password) {
        alert("Please fill all required fields");
        return;
      }
      handleLogin();
    } else {
      if (!formdata.username || !formdata.email || !formdata.password) {
        alert("Please fill all fields");
        return;
      }
      handleSignup();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-2xl rounded-3xl flex w-[900px] max-w-full p-8">
        
        {/* Left Image */}
        <div className="w-1/2 hidden md:flex items-center justify-center">
          <img src={ab} alt="illustration" className="rounded-xl" />
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 w-full px-6 flex flex-col justify-center">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-6">
            {login ? "Login" : "Sign Up"}
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Username */}
            <label>USERNAME</label>
            <div className="relative mb-4">
              <input
                type="text"
                name="username"
                placeholder="@username"
                className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                value={formdata.username}
              />
              <i className="fa fa-user absolute left-4 top-3.5 text-gray-500"></i>
            </div>

            {/* Email (Signup only) */}
            {!login && (
              <>
                <label>E-MAIL</label>
                <div className="relative mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="email@gmail.com"
                    className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-400"
                    onChange={handleChange}
                    value={formdata.email}
                  />
                  <i className="fa fa-envelope absolute left-4 top-3.5 text-gray-500"></i>
                </div>
              </>
            )}

            {/* Phone (Signup only) */}
            {!login && (
              <>
                <label>PHONE</label>
                <div className="relative mb-4">
                  <input
                    type="number"
                    name="number"
                    placeholder="Enter phone number"
                    className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-400"
                    onChange={handleChange}
                    value={formdata.number}
                  />
                  <i className="fa fa-phone absolute left-4 top-3.5 text-gray-500"></i>
                </div>
              </>
            )}

            {/* Password */}
            <label>PASSWORD</label>
            <div className="relative mb-4">
              <input
                type="password"
                name="password"
                placeholder="@password"
                className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                value={formdata.password}
              />
              <i className="fa fa-lock absolute left-4 top-3.5 text-gray-500"></i>
            </div>

            {/* Submit */}
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold">
              {login ? "Login" : "Signup"}
            </button>
          </form>

          {/* Toggle */}
          <p className="text-center mt-5 text-gray-700">
            {login ? "Don't have an account? " : "Already have an account? "}
            <span
              onClick={() => setLogin(!login)}
              className="text-blue-600 cursor-pointer underline"
            >
              {login ? "Sign Up" : "Login"}
            </span>
          </p>

          <p className="text-center text-sm text-gray-500 mt-4">Or login with</p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-3">
            <button className="w-10 h-10 bg-blue-700 text-white rounded-full">f</button>
            <button className="w-10 h-10 bg-blue-400 text-white rounded-full">t</button>
            <button className="w-10 h-10 bg-red-600 text-white rounded-full">G</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
