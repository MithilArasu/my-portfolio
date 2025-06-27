import React from 'react';

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-20 px-6 md:px-20 font-sans">
      <motion.h2
        className="text-4xl font-semibold text-center mb-12 font-lora"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        CONTACT
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-md font-light"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-xl text-gray-700 mb-6 font-medium">
          Feel free to reach out if you’d like to collaborate, have questions!
        </p>
        <div className="space-y-4">
          <div className="flex items-center text-gray-700">
            <FaEnvelope className="mr-3 text-blue-500" />
            <a href="mailto:mithilofficial17@gmail.com" className="hover:underline">
              mithilofficial17@gmail.com
            </a>
          </div>
          <div className="flex items-center text-gray-700">
            <FaPhone className="mr-3 text-green-500" />
            <span>xxxxxxxx</span>
          </div>
          <div className="flex items-center text-gray-700">
            <FaInstagram className="mr-3 text-pink-500" />
            <a
              href="https://www.instagram.com/im._.mithil?utm_source=qr&igsh=M3ZvM2M1eWtpNjNh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @mithil
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
