// src/components/AboutMe.jsx
import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about-pic.jpg'; // Replace with your actual image

const AboutMe = () => {
  return (
    <section id="about" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl text-gray-500 font-extrabold tracking-tight relative mb-6">
            ABOUT<span className="text-rose-500">.</span>
            <span className="block w-16 h-1 bg-rose-500 mt-2"></span>
          </h2>
          <p className="font-semibold text-lg mb-4">
            I'm passionate about electronics, innovation, and creating impact.
          </p>
          <p className="text-gray-300 leading-relaxed">
            As an ECE student, I love building projects that solve real-world problems. I'm a passionate and detail-oriented developer with strong expertise in Python, C++, Java, and web development. I build full-stack applications using Flask, HTML/CSS, JavaScript, Bootstrap, and SQLite, and I have experience developing real-time, user-friendly interfaces. I'm also skilled in embedded systems and IoT development, working with platforms like Raspberry Pi and Arduino to integrate hardware with intelligent software. My interests include building scalable backend systems, developing automation tools, and exploring AI-based solutions that solve real-world problems. I enjoy taking ownership of projects from concept to deployment and continuously improving my skill set across both software and systems engineering.
          </p>

          {/* Skills Section */}
          <div className="mt-10">
            <h2 className="text-4xl text-gray-700 font-extrabold tracking-tight relative mb-6">
              SKILLS<span className="text-rose-500">.</span>
              <span className="block w-16 h-1 bg-rose-500 mt-2"></span>
            </h2>
            <ul className="text-gray-300 space-y-3 text-lg">
              <li><span className="font-bold">Programming Languages:</span> Python, Java, C, C++, Embedded C</li>
              <li><span className="font-bold">Frontend Technologies:</span> HTML, CSS, JavaScript</li>
              <li><span className="font-bold">Backend & Databases:</span> MySQL, Flask</li>
              <li><span className="font-bold">IoT & Embedded Systems:</span> ESP32, Raspberry Pi, Arduino</li>
              <li><span className="font-bold">EDA Software:</span> Cadence, LTspice</li>
              <li><span className="font-bold">Soft Skills:</span> Leadership, Team Collaboration, Problem Solving</li>
            </ul>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImg}
            alt="About"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
