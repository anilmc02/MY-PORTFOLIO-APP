// src/components/Tasks.js
import React from "react";
import ProjectCard from "./ProjectCard";
import PersonalProjects from "./PersonalProjects";

const Tasks = () => {
  const tasks = [
    {
      title: "MERN Contact Form",
      description:
        "A simple contact form where users can submit their name, email, and message. The form integrates Web3Forms for form handling and stores the submissions in MongoDB.",
      technologies: ["React", "Express", "MongoDB", "Web3Forms", "CSS"],
      link: "https://github.com/anilmc02/MERN-CONTACT-FORM",
    },
    {
      title: "To-Do List App",
      description:
        "A simple To-Do List application that allows users to add, delete, and mark tasks as completed. This app features task creation, deletion, and a status display for all tasks.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Axios", "CSS"],
      link: "https://github.com/anilmc02/TO-DO-LIST-APP",
    },
    {
      title: "Simple Blogging Platform",
      description:
        "A simple blogging platform where users can register, log in, create, edit, and delete posts. This full-stack application features user authentication, post management, image uploads, and user profile viewing.",
      technologies: ["React", "Express", "MongoDB", "JWT", "Multer", "CSS"],
      link: "https://github.com/anilmc02/simple-blogging-platform",
    },
    {
      title: "Portfolio Website",
      description:
        "A portfolio website that showcases my personal projects, professional tasks, skills, and contact details. Built using React and Tailwind CSS, it highlights my development experience and design proficiency.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "HTML"],
      link: "https://github.com/anilmc02/MY-PORTFOLIO-APP",
    },
  ];

  // Function to handle the back to home button click
  const handleBackClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="tasks" className="py-20 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center">Tasks</h2>

        {/* Back to Home Button */}
        <button
          onClick={handleBackClick}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Home
        </button>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {tasks.map((task, index) => (
            <ProjectCard key={index} project={task} />
          ))}
        </div>

        {/* Add Personal Projects Section */}
        <PersonalProjects />
      </div>
    </section>
  );
};

export default Tasks;
