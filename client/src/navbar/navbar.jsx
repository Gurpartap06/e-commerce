
import React, { useState } from "react";
import bwkuf from "../assets/bwkuf.svg";
import { FcLike } from "react-icons/fc";
import { IoBagHandle } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useSearch } from "../usecontext/Searchcontext";
import { useTheme } from "../usecontext/Themecontext";
import { useSelector } from "react-redux";
import axios from "axios";

const BASE_URL = "http://localhost:9090";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const { search, setSearch, setSearchedProducts } = useSearch();
  const cartItems = useSelector((state) => state.cart.items);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  const handleLogout = async () => {
    try {
      await axios.post(`${BASE_URL}/api/logoutbyid/${userId}`);
      localStorage.removeItem("userId");
      navigate("/Login");
    } catch {
      alert("Logout failed");
    }
  };

  const handleSearch = async (value) => {
    setSearch(value);

    if (!value.trim()) {
      setSearchedProducts(null);
      return;
    }

    try {
      const res = await axios.get(
        `${BASE_URL}/api/productApi/searchbybrand`,
        { params: { brand: value } }
      );
      setSearchedProducts(res.data.products);
    } catch (err) {
      console.error("Search error", err);
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 text-black dark:text-white shadow-md px-4 py-3 relative">
      <div className="flex items-center justify-between">

        {/* Logo + Links */}
        <div className="flex items-center gap-6">
          <Link to="/">
            <img src={bwkuf} alt="logo" className="w-28 sm:w-32 md:w-40" />
          </Link>

          <ul className="hidden md:flex gap-6 font-medium">
            <Link to="/"><li>Home</li></Link>
            <Link to="/Men"><li>Men</li></Link>
            <Link to="/Women"><li>Women</li></Link>
            <Link to="/MobileCover"><li>Mobile Cover</li></Link>
            <Link to="/Product"><li>Product</li></Link>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-4">

          {/* Search */}
          <input
            type="text"
            className="hidden md:block h-9 px-3 rounded border dark:bg-gray-800"
            placeholder="Search products"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />

          <Link to = {"/Wishlist "}><FcLike size={22} /></Link>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <IoBagHandle size={22} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-300 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>

          <Link to="/productApi">
            <CgProfile size={22} />
          </Link>

          {/* Settings / Logout */}
          <div className="relative mt-2">
            <button onClick={() => setShowLogout(!showLogout)}>
              <IoMdSettings size={22} />
            </button>

            {userId && showLogout && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-700 shadow rounded p-2 z-50">
                <button
                  className="text-red-500 text-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}

            {!userId && (
              <Link to="/setting" className="absolute inset-0" />
            )}
          </div>

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="px-2 py-1 text-sm rounded bg-gray-200 dark:bg-gray-600"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg p-4 z-40">
          <input
            type="text"
            className="w-full h-9 px-3 mb-3 rounded border dark:bg-gray-800"
            placeholder="Search products"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />

          <ul className="flex flex-col gap-3 font-medium">
            {["/", "/Men", "/Women", "/MobileCover", "/Product"].map((path) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="py-2 border-b"
              >
                {path === "/" ? "Home" : path.replace("/", "")}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
