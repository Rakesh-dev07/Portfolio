import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        w-full flex flex-col items-center text-center text-white
        pt-40 pb-20
        md:pt-36 md:pb-28
        lg:pt-55 lg:pb-32
      "
    >
      {/* Avatar (optional) */}
      {/* <motion.img
        src="/avatar.png" // replace with your image if needed
        alt="Avatar"
        className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      /> */}

      {/* Title */}
      <motion.h1
        className="
          text-3xl font-bold
          md:text-4xl
          lg:text-5xl
        "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I'm <span className="text-cyan-400">Rakesh</span>
      </motion.h1>

      {/* Typing Animation */}
      <motion.div
        className="
          mt-3 text-xl font-semibold
          md:text-2xl
          lg:text-3xl
          text-transparent bg-clip-text 
          bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400
        "
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <ReactTyped
          strings={[
            "Full-Stack Developer",
            "MERN Stack Developer",
            "Frontend Developer",
            // "React & Node.js Developer"
          ]}
          typeSpeed={60}
          backSpeed={30}
          loop
          showCursor={true}
          cursorChar="|"
        />

      </motion.div>

      {/* Badges */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
      
        {["💼 Open to opportunities", "🌍 Remote Work", "🤝 Freelance", "🧑‍💻 Collaboration"].map(
          (text) => (
            <div
              key={text}
              className="
                px-4 py-2 rounded-full text-sm
                bg-gray-900 backdrop-blur-md border border-white/10
                flex items-center gap-2
              "
            >
              {text}
            </div>
          )
        )}
      </motion.div>

      {/* Resume Button */}
      <motion.a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-10 px-8 py-3 rounded-full
    flex items-center gap-2
    border border-white/20
    bg-black/20 backdrop-blur-md
    text-blue-400
    transition-all
    hover:text-cyan-300
    hover:bg-white/10
    hover:border-cyan-400
    hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]
    text-sm md:text-base
  "
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, delay: 0.4 }}
>
  Resume
</motion.a>


    </section>
  );
};

export default Hero;
