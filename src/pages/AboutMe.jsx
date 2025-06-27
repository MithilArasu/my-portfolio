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
            As an ECE student, I love building projects that solve real-world problems. Whether I’m sketching portraits, running marathons, or coding smart systems, I bring a creative and passionate energy to everything I do. I also believe in lifelong learning and constantly work on improving my technical and artistic skills.
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
