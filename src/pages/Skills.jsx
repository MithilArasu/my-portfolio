import React from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiFlask,
  SiRaspberrypi,
  SiArduino,
} from "react-icons/si";

const skills = [
  {
    title: "Programming Languages",
    items: [
      { label: "Python", icon: <SiPython className="text-yellow-400" /> },
      { label: "Java", icon: null },
      { label: "C", icon: <SiC className="text-blue-500" /> },
      { label: "C++", icon: <SiCplusplus className="text-blue-400" /> },
      { label: "Embedded C", icon: null },
    ],
  },
  {
    title: "Frontend Technologies",
    items: [
      { label: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { label: "CSS", icon: <SiCss3 className="text-blue-500" /> },
      { label: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      { label: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { label: "Flask", icon: <SiFlask className="text-gray-300" /> },
    ],
  },
  {
    title: "IoT & Embedded Systems",
    items: [
      { label: "ESP32", icon: null },
      { label: "Raspberry Pi", icon: <SiRaspberrypi className="text-pink-400" /> },
      { label: "Arduino", icon: <SiArduino className="text-blue-500" /> },
    ],
  },
  {
    title: "EDA Software",
    items: [
      { label: "Cadence", icon: null },
      { label: "LTspice", icon: null },
    ],
  },
];

const Skills = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-20" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10"
      >
        <h2 className="text-5xl text-gray-600 font-extrabold tracking-tight relative mb-6">
          SKILLS<span className="text-rose-500">.</span>
          <span className="block w-14 h-1 bg-rose-500 mt-2"></span>
        </h2>
        
      </motion.h2>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-white ">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-2xl shadow-md p-6 hover:shadow-lg transition "
          >
            <h3 className="text-xl font-semibold text-gray-400 mb-4">
              {skill.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {skill.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  {item.icon && (
                    <span className="text-lg" title={item.label}>
                      {item.icon}
                    </span>
                  )}
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
