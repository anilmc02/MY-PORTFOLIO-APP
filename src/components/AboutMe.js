// src/components/AboutMe.js
import React from "react";

const AboutMe = () => {
  const handleBackClick = () => {
    // Scroll back to the home section
    const homeSection = document.getElementById("home");
    homeSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto text-center">
        {/* Profile Picture */}
        <div className="mb-6">
          <img
            src="/assets/gradu.jpeg"
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Profile Details */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">ANIL KUMAR MC</h2>
          <p className="text-lg text-gray-600">anilmc002@gmail.com</p>
        </div>

        {/* About Description */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h3 className="text-3xl font-semibold mb-4">About Me</h3>
          <p className="text-lg leading-relaxed">
            I am a passionate developer with experience in React, Express,
            MongoDB, and more. I enjoy creating applications that solve
            real-world problems and constantly seek to improve my skills.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-center mb-8">Skills</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <div>
              <h4 className="text-2xl font-bold mb-4">Languages</h4>
              <ul>
                <SkillItem label="C" level={5} />
                <SkillItem label="C++" level={5} />
                <SkillItem label="Java" level={5} />
                <SkillItem label="JavaScript" level={5} />
                <SkillItem label="Python" level={5} />
                <SkillItem label="HTML" level={5} />
                <SkillItem label="SQL" level={5} />
                <SkillItem label="MongoDB" level={5} />
              </ul>
            </div>

            {/* Software Tools */}
            <div>
              <h4 className="text-2xl font-bold mb-4">Software Tools</h4>
              <ul className="list-disc list-inside">
                <li>JDK Tool</li>
                <li>PyCharm</li>
                <li>Cisco Packet Tracer</li>
                <li>Neo4j</li>
                <li>Django</li>
                <li>Linux</li>
                <li>VS Code</li>
                <li>React App</li>
                <li>NodeJS</li>
                <li>AWS Cloud</li>
              </ul>
            </div>

            {/* Coursework */}
            <div>
              <h4 className="text-2xl font-bold mb-4">Coursework</h4>
              <ul className="list-disc list-inside">
                <li>Data Structures</li>
                <li>Advanced Algorithms</li>
                <li>Graph Theory</li>
                <li>LLM (Large Language Models)</li>
                <li>TDL</li>
                <li>OOADJ</li>
                <li>Cloud Computing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <button
          onClick={handleBackClick}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    </section>
  );
};

// Reusable SkillItem component to display proficiency with bars
const SkillItem = ({ label, level }) => {
  return (
    <li className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-lg font-medium">{label}</span>
        <span>{level}/5</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className="bg-blue-500 h-2 rounded"
          style={{ width: `${(level / 5) * 100}%` }}
        />
      </div>
    </li>
  );
};

export default AboutMe;
