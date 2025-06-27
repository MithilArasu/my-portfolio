import React from 'react';

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-20 md:px-20" id="resume">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-800">📄 My Resume</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          You can download my resume below to learn more about my academic background, technical skills, and achievements.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-blue-600 text-white font-medium py-3 px-8 rounded-full shadow hover:bg-blue-700 transition"
        >
          ⬇️ Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Resume;
