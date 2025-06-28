import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import handeercel from "../assets/handeercel.png";
import vijay from "../assets/vijay.png";
import tony from "../assets/tony.png";
import wolverin from "../assets/wolverin.png";

const artworks = [
  {
    image: handeercel,
    title: "Portrait of a Memory",
    description: "Graphite on paper. Inspired by a serene moment.",
  },
  {
    image: tony,
    title: "Midnight Calm",
    description: "Ink sketch capturing the calmness of solitude.",
  },
  {
    image: vijay,
    title: "Boundless",
    description: "Charcoal work symbolizing freedom.",
  },
  {
    image: wolverin,
    title: "Vision",
    description: "Pencil sketch reimagining resilience.",
  },
];

const ArtCard = ({ artwork }) => (
  <div className="flex flex-col items-center">
    <img
      src={artwork.image}
      alt={artwork.title}
      className="rounded-2xl shadow-md"
      style={{
        aspectRatio: "2 / 3",
        objectFit: "cover",
        maxWidth: "280px",
        width: "100%",
      }}
    />
    <p className="text-gray-600 text-center mt-3">{artwork.description}</p>
  </div>
);

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
    transition: { duration: 0.4 },
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
    transition: { duration: 0.3 },
  }),
};

const ArtGallery = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const visibleArtworks = artworks.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < artworks.length) {
      setDirection(1);
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setDirection(-1);
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section id="art" className="min-h-screen px-6 md:px-24 py-16 bg-gray-100 relative overflow-hidden">
      <h1 className="text-4xl font-bold mb-12 text-center font-serif">ART GALLERY</h1>

      <div className="flex justify-between mb-6">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="text-black disabled:opacity-30"
        >
          <FaArrowLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + 3 >= artworks.length}
          className="text-vlack disabled:opacity-30"
        >
          <FaArrowRight size={24} />
        </button>
      </div>

      <div className="relative h-[450px]"> {/* Needed for smooth slide */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={startIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {visibleArtworks.map((art, idx) => (
              <ArtCard key={idx} artwork={art} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ArtGallery;
