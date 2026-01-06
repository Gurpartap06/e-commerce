import React, { useState } from 'react';
import ab from "../loginn/login.jpg";
import "./login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Base_Url = "https://e-commerce-1-ftod.onrender.com";

const Login = () => {

  const navigate = useNavigate();
  const [login, setLogin] = useState(true);

  const [formdata, setFormData] = useState({
    username: '',
    email: '',
    number: '',
    password: ''
  });

  // SIGNUP API
  const handleSignup = async () => {
    try {
      const response = await axios.post(`${Base_Url}/api/signup`, {
  username: formdata.username,
  email: formdata.email,
  password: formdata.password
});

      console.log("Signup Success:", response.data);
      alert("Signup Successful!");
      setLogin(true); // go to login
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Signup Failed!");
    }
  };

  // LOGIN API
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${Base_Url}/api/loginWithUsername`, {
        username: formdata.username,
        password: formdata.password
      });
      console.log("response",response)

      console.log("Login Success:", response.data);
      alert("Login Successful!");
if (response.data.user && response.data.user._id) {
      localStorage.setItem("userId", response.data.user._id);
    }
      navigate("/");
    } catch (error) {
      console.error("Login Error:", error);
      alert("Invalid login!");
    }
  };


  const handleToggle = () => {
    setLogin(prev => !prev);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // FORM SUBMIT CONTROLLER
  const handlesubmit = (e) => {
    e.preventDefault();

    if (login) {
      if (!formdata.username || !formdata.password) {
        alert("Please enter email and password");
        return;
      }
      handleLogin();      // ✅ call login API
    } else {
      if (!formdata.username || !formdata.email || !formdata.password) {
        alert("Please fill all fields");
        return;
      }
      handleSignup();     // ✅ call signup API
    }
  };

  return (
    <div className='flex'>
      <div className='h-90 w-190 pl-10 pt-5'>
        <img className='w-500 h-170 object-fit' src={ab} alt="login visual" />
      </div>

      <form onSubmit={handlesubmit}>
        <div className='loginn pt-30'>
          <p className='sign'><b>{login ? "Login" : "Signup"}</b></p><br />
          <p>Join us now to be a part of Bewakoof® family.</p><br />

         
              <label>USERNAME</label><br />
              <input
                className='abc'
                type="text"
                placeholder="@username"
                name='username'
                onChange={handleChange}
                value={formdata.username}
              /><br />
           
{!login && (
            <div>
          <label>Email</label><br />
          <input
            className='abc'
            type="email"
            placeholder='email'
            name='email'
            onChange={handleChange}
            value={formdata.email}
          /><br />
          </div>
          )}

          {!login && (
            <div>
              <label>Phone</label><br />
              <input
                className='abc'
                type="number"
                placeholder="Enter phone number"
                name='number'
                onChange={handleChange}
                value={formdata.number}
              /><br />
            </div>
          )}

          <label>Password</label><br />
          <input
            className='abc'
            type='password'
            placeholder='@password'
            name='password'
            onChange={handleChange}
            value={formdata.password}
          /><br /><br />

          {/* BUTTON MUST NOT HAVE onSubmit */}
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-m px-9 py-2.5"
          >
            {login ? "Login" : "Signup"}
          </button>

          <p>--------------------------OR------------------------</p>
          <span>
            {login ? "Don't have an account? " : "Already have an account? "}
            <a onClick={handleToggle} href="#" style={{ color: "blue", cursor: "pointer" }}>
              {login ? "Signup" : "Login"}
            </a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
