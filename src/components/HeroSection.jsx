import { useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black to-gray-900 text-white text-center px-4">
      <motion.div
        className="text-sm uppercase tracking-wide bg-gray-800 px-4 py-1 rounded-full"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AI Development Partner
      </motion.div>

      <motion.h1
        className="text-6xl font-bold mt-4 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          backgroundImage: isHovered
            ? "linear-gradient(90deg, #ff6a00, #ee0979, #00c6ff, #0072ff)"
            : "linear-gradient(90deg, #ffffff, #bbbbbb)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        transition={{ duration: 0.5 }}
      >
        adTask.ai
      </motion.h1>

      <p className="text-lg mt-4 max-w-xl">
        AdTask AI is your intelligent companion that transforms how developers code, test, and deploy.
        Say goodbye to repetitive tasks and hello to accelerated productivity.
      </p>

      <motion.button
        className="mt-6 px-6 py-3 rounded-full bg-gray-800 text-white text-lg font-semibold hover:bg-gray-700 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Try Now for Free
      </motion.button>
    </div>
  );
};

export default HeroSection;
