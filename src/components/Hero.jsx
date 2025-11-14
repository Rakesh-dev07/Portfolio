import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        w-full flex flex-col items-center text-center text-white
        pt-36 pb-24
        md:pt-40 md:pb-28
        lg:pt-48 lg:pb-32
      "
    >
      {/* Title */}
      <motion.h1
        className="
          text-3xl md:text-4xl lg:text-5xl 
          font-bold leading-tight
        "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I'm{" "}
        <span className="text-cyan-300">
          Rakesh
        </span>
      </motion.h1>

      {/* Typing Animation */}
      <motion.div
        className="
          mt-3 text-xl md:text-2xl lg:text-3xl font-semibold
          bg-clip-text text-transparent
          bg-linear-to-r from-blue-400 via-cyan-300 to-purple-400
        "
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <ReactTyped
          strings={[
            "Full-Stack Developer",
            "MERN Stack Developer",
            "Frontend Developer",
          ]}
          typeSpeed={55}
          backSpeed={35}
          loop
          showCursor={true}
          cursorChar="|"
        />
      </motion.div>

      {/* Badges */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mt-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {[
          "💼 Open to opportunities",
          "🌍 Remote Work",
          "🤝 Freelance",
          "🧑‍💻 Collaboration",
        ].map((text) => (
          <div
            key={text}
            className="
              px-4 py-2 rounded-full text-xs md:text-sm
              bg-black/40 backdrop-blur-md 
              border border-white/10
              text-gray-300
            "
          >
            {text}
          </div>
        ))}
      </motion.div>

      {/* Resume Button */}
      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-10 px-8 py-3 rounded-full
          flex items-center gap-2
          border border-white/20 bg-black/20 backdrop-blur-md
          text-blue-300
          transition-all duration-200
          hover:text-cyan-300
          hover:bg-white/10 hover:border-cyan-400
          hover:shadow-[0_0_12px_rgba(6,182,212,0.4)]
          text-sm md:text-base
        "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        Resume
      </motion.a>
    </section>
  );
};

export default Hero;
