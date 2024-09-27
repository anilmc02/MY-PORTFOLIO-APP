// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-2xl font-bold">My Portfolio</div>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About Me
            </a>
          </li>
          <li>
            <a href="#tasks" className="hover:underline">
              Tasks
            </a>
          </li>
          <li>
            <a href="#personal-projects" className="hover:underline">
              Personal Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
