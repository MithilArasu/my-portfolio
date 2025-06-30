import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaLinkedin, FaDownload } from 'react-icons/fa';

const ResumeAndContact = () => {
  return (
    <section id="resume-contact" className="bg-[#0d1117] text-white px-6 py-20 md:px-28 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row gap-12 items-center justify-between"
      >
        {/* Resume Box */}
        <div className="bg-[#161b22] p-8 rounded-2xl shadow-md w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4 font-lora text-gray-300">My Resume</h2>
          <p className="text-gray-300 mb-6">
            Get a detailed overview of my academic background, technical proficiencies, and accomplishments.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 border border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition"
          >
            <FaDownload />
            Download CV
          </a>
        </div>

        {/* Contact Box */}
        <div className="bg-[#161b22] p-8 rounded-2xl shadow-md w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4 font-lora text-gray-300">Contact</h2>
          <p className="text-gray-300 mb-6">
            Reach out for collaborations, queries, or just to connect!
          </p>

          <div className="space-y-4 text-gray-300 text-sm">
            <div className="flex items-center">
              <FaEnvelope className="text-blue-400 mr-3" />
              <a href="mailto:mithilofficial17@gmail.com" className="hover:underline">
                mithilofficial17@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FaLinkedin className="text-blue-500 mr-3" />
              <a
                href="https://www.linkedin.com/in/mithilarasu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <FaInstagram className="text-pink-500 mr-3" />
              <a
                href="https://www.instagram.com/im._.mithil?utm_source=qr&igsh=M3ZvM2M1eWtpNjNh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ResumeAndContact;
