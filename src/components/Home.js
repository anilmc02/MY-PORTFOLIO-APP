// src/components/Home.js
import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gray-900 text-white flex justify-center items-center"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-2xl mt-4">I'm a Full Stack Developer.</p>
      </div>
    </section>
  );
};

export default Home;
