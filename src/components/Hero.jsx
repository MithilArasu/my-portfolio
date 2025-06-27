// src/components/Hero.jsx
import React from "react";
import myImage from "../assets/myimage.png"; // Ensure this path is correct
import { FaLinkedin} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // LeetCode icon
 // Import the LinkedIn icon

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${myImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navbar */}
      <nav
        style={{ fontFamily: "Times New Roman, Times, serif" }}
        className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-10 text-white"
      >
        <div className="text-lg font-semibold">MA</div>
        <div className="flex space-x-8 text-gray-300 text-xl font-light tracking-wide">
          <a href="#about" className="hover:underline text-gray-300">
            About Me
          </a>
          <a href="#projects" className="hover:underline text-gray-300">
            Projects
          </a>
          <a href="#art" className="hover:underline text-gray-300">
            Art Gallery
          </a>
          <a href="#marathon" className="hover:underline text-gray-300">
            Marathon
          </a>
          <a href="#contact" className="hover:underline text-gray-300">
            Contact
          </a>
          
          {/* LinkedIn icon link */}
          <a
            href="https://www.linkedin.com/in/mithilarasu/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-gray-100"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://leetcode.com/u/mithilofficial17/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-gray-100"
            aria-label="leetcode"
          >
            <SiLeetcode size={20} />
          </a>
        </div>
      </nav>

      {/* Hero Text */}
      <div className="relative z-10 h-full flex items-center justify-start px-10">
        <div className="text-white max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#ffdd99]">Mithil Arasu</h1>
          <p className="text-lg md:text-xl font-light tracking-wide">
            Electronics & Communication Engineering Student • Creative Mind • Runner • Artist
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
