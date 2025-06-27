import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    title: "Vehicle Parking App",
    description:
      "A full-stack application built with Flask and SQLite, allowing users to book parking slots and admins to manage parking lots.",
    techStack: ["Flask", "SQLite", "HTML/CSS", "Bootstrap"],
    image: "/images/parking-app.jpg",
    link: "https://github.com/MithilArasu/vehicle_parking_app",
  },
  {
    title: "Industrial Safety Rover",
    description:
      "A Raspberry Pi-based safety bot that uses AI for helmet and goggles detection and integrates with a Flutter app for alerts.",
    techStack: ["Raspberry Pi", "Python", "Flutter", "AI"],
    image: "/images/safety-rover.jpg",
    link: "https://github.com/yourrepo/safety-rover",
  },
  {
    title: "Quiz Master",
    description:
      "A multi-user quiz platform with admin control built using Flask. Users can participate in quizzes with real-time scoring.",
    techStack: ["Flask", "Jinja2", "Bootstrap", "SQLite"],
    image: "/images/quiz-master.jpg",
    link: "https://github.com/yourrepo/quiz-master",
  },
  {
    title: "Spice Dispenser",
    description:
      "An automated spice dispensing machine using embedded systems and mechanical design for precise cooking applications.",
    techStack: ["Arduino", "C++", "Sensors", "Motors"],
    image: "/images/spice-dispenser.jpg",
    link: "https://github.com/yourrepo/spice-dispenser",
  },
];

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleProjects = projects.slice(startIndex, startIndex + 3);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    if (startIndex + 3 < projects.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  return (
    <section id="projects" className="bg-gray-50 py-20 px-6 md:px-20 font-sans">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 font-serif"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="relative">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-sm"
                >
                  View Project ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + 3 >= projects.length}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
