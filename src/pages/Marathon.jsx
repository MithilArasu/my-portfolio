import React from "react";
import { motion } from "framer-motion";
import { FaStrava } from "react-icons/fa"; // Import the Strava icon
import run from "../assets/10k-run.png";
import pr10k from "../assets/pr10k.png";
import mumbaimarathon from "../assets/mumbai.png";

const Marathon = () => {
  const raceStats = [
    {
      title: "Chennai Marathon",
      date: "Jan 5, 2025",
      distance: "10 km",
      time: "1:05:33",
      pace: "6:30/km",
      rank: "712 / 15,572",
      image: run,
    },
    {
      title: "PR 10K Run",
      date: "Mar 30, 2025",
      distance: "10 km",
      time: "59:30",
      pace: "5:57/km",
      image: pr10k,
    },
    {
      title: "Mumbai Marathon",
      date: "Jan 19, 2026",
      distance: "10 km",
      time: "1:05:35",
      pace: "6:29/km",
      image: mumbaimarathon,
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-20" id="marathon">
      <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center space-x-3">
        My Marathon Journey 
        <a
          href="https://www.strava.com/athletes/74545728" // <-- Replace with your actual Strava link
          target="_blank"
          rel="noreferrer"
          aria-label="Strava"
          className="text-orange-500 hover:text-orange-600"
        >
          <FaStrava size={35} />
        </a>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {raceStats.map((race, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-2xl shadow-md p-6 flex flex-col items-center"
          >
            <img
              src={race.image}
              alt={race.title}
              className="w-64 rounded-xl shadow-sm object-cover"
              style={{ aspectRatio: "9 / 16" }}
            />
            <h3 className="text-2xl font-semibold mt-4 text-blue-600">{race.title}</h3>
            <p className="text-gray-700 mt-2"><strong>Date:</strong> {race.date}</p>
            <p className="text-gray-700"><strong>Distance:</strong> {race.distance}</p>
            <p className="text-gray-700"><strong>Time:</strong> {race.time}</p>
            <p className="text-gray-700"><strong>Pace:</strong> {race.pace}</p>
            <p className="text-gray-700"><strong>Rank:</strong> {race.rank}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Marathon;
