// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          Contact:{" "}
          <a href="mailto:anilmc002@gmail.com" className="text-blue-400">
            anilmc002@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
