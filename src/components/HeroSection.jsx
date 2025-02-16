'use client'
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
            className="font-bold mt-4 cursor-pointer text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
                backgroundImage: isHovered
                    ? "linear-gradient(90deg, #9FA9C4, #9FA9C4, #9FA9C4, #9FA9C4)"
                    : "linear-gradient(90deg, #A8B2CF, #bbbbbb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: isHovered ? "0px 0px 15px rgba(255, 255, 255, 0.8)" : "none"
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
        className="mt-6 px-6 py-3 rounded-full bg-gray-800 text-white text-lg font-semibold hover:bg-gray-700 transition relative overflow-hidden border-2 border-gray-600"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ position: "relative", overflow: "hidden" }}
      >
        Try Now for Free
        <motion.span
          className="absolute top-0 left-0 w-full h-full border-2 border-gray-400"
          initial={{ x: "-100%" }}
          animate={{ x: ["-100%", "100%", "-100%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </motion.button>
    </div>
  );
};

export default HeroSection;
