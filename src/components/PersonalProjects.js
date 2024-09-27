// src/components/PersonalProjects.js
import React from "react";
import ProjectCard from "./ProjectCard";

const PersonalProjects = () => {
  const personalProjects = [
    {
      title: "Stress Detection Using ML and Image Processing Techniques",
      description:
        "This project detects stress in IT professionals using Machine Learning and Image Processing techniques. It applies ML algorithms like KNN classifiers to classify stress based on survey responses and image uploads.",
      technologies: ["Django", "OpenCV", "Scikit-learn", "HTML", "CSS"],
      link: "https://github.com/anilmc02/stress-detection-in-it-professionals-by-ml-and-image-processing",
    },
    // {
    //   title: "Weather App",
    //   description:
    //     "A weather application that fetches data from a weather API and displays current weather conditions based on user location.",
    //   technologies: ["React", "Axios", "CSS"],
    //   link: "https://github.com/anilmc02/weather-app",
    // },
    // Add more personal projects here if needed
  ];

  return (
    <section id="personal-projects" className="py-20 bg-gray-300">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center">Personal Projects</h2>
        {/* Back to Home Button */}
        <a
          href="#home"
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Home
        </a>
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {personalProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
