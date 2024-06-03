import React from "react";
import logo from '../../assets/logo.jpg'
const Navbar = () => {
  return (
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex items-center justify-between">
        {/* <!-- Left side: Logo --> */}
        <div class="flex items-center">
          <img src={logo} alt="Logo" class="h-10 w-10" />
        </div>
        {/* <!-- Right side: Navigation Links --> */}
        <ul class="flex space-x-6 text-white">
          <li class="hover:text-gray-300">
            <a href="#home">Home</a>
          </li>
          <li class="hover:text-gray-300">
            <a href="#about">About</a>
          </li>
          <li class="hover:text-gray-300">
            <a href="#services">Services</a>
          </li>
          <li class="hover:text-gray-300">
            <a href="#cart">Cart</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
