import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [userId, setUserId] = useState(null);

  // Toggle theme functionality
  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.setAttribute("data-bs-theme", newTheme);
  };

  // Decode JWT to get user ID
  useEffect(() => {
    const token = localStorage.getItem("token"); // Replace with the actual key where the token is stored
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserId(decoded.userId); // Replace `userId` with the correct property from your token
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <a className="flex items-center text-white text-2xl font-bold" href="/">
          <img
            src="https://via.placeholder.com/50"
            alt="Logo"
            className="w-10 h-10 mr-2"
          />
          RuralConnect
        </a>

        {/* Navbar Toggle for Mobile */}
        <div className="lg:hidden">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Content */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Middle: Search Box */}
          <form className="flex items-center space-x-2 bg-white rounded-full px-3 py-1">
            <input
              className="px-3 py-1 rounded-full focus:outline-none"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600 transition duration-300">
              Search
            </button>
          </form>

          {/* Right Side: Buttons */}
          <div className="flex items-center space-x-4">
            {userId ? (
              // Show user ID if logged in
              <span className="text-white font-bold">User ID: {userId}</span>
            ) : (
              // Show "Sign Up" if not logged in
              <a href="/login">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                  data-bs-toggle="modal"
                  data-bs-target="#signupModal"
                >
                  Sign Up
                </button>
              </a>
            )}

            {/* Language Selector */}
            <select className="bg-gray-700 text-white rounded-full px-4 py-2">
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>

            {/* Theme Toggle Button */}
            <button
              id="themeToggle"
              className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition duration-300"
              onClick={handleThemeToggle}
            >
              {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
