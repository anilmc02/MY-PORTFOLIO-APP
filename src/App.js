// src/App.js
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import PersonalProjects from "./components/PersonalProjects"; // Keeping the import
import Footer from "./components/Footer";
import "./index.css";
import Tasks from "./components/Tasks";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Tasks />
      <PersonalProjects /> {/* Use the PersonalProjects component here */}
      <Contact /> {/* Add the Contact section */}
      <Footer />
    </>
  );
}

export default App;
