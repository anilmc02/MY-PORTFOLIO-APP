// src/components/ProjectCard.js
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
      <p className="mb-4">{project.description}</p>
      <p className="font-medium">Technologies Used:</p>
      <ul className="list-disc list-inside mb-4">
        {project.technologies.map((tech, idx) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
