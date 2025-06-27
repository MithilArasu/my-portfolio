import React from 'react';

import { motion } from "framer-motion";
import { FaCode, FaMicrochip, FaPaintBrush, FaRunning } from "react-icons/fa";

const skills = [
  {
    icon: <FaCode size={28} className="text-blue-500" />,
    title: "Programming & Web",
    items: ["Python", "Flask", "JavaScript", "React.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    icon: <FaMicrochip size={28} className="text-green-500" />,
    title: "Electronics & Projects",
    items: ["Raspberry Pi", "IoT Projects", "AI on Edge", "Embedded Systems"],
  },
  {
    icon: <FaPaintBrush size={28} className="text-pink-500" />,
    title: "Art & Design",
    items: ["Portrait Sketching", "Digital Illustration"],
  },
  {
    icon: <FaRunning size={28} className="text-red-500" />,
    title: "Marathon & Fitness",
    items: ["10K & Half Marathon Training", "Fitness Discipline", "Pace Planning"],
  },
];

const Skills = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12 text-gray-800"
      >
        🧠 My Skills
      </motion.h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
          >
            <div className="flex items-center mb-4">
              {skill.icon}
              <h3 className="text-xl font-semibold ml-3 text-gray-700">{skill.title}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-600">
              {skill.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
