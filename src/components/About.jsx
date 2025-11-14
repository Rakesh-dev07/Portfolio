import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 text-white flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-6 text-center"
      >
        {/* Subheading */}
        <span
          className="
            inline-block bg-gray-800 text-gray-300 
            px-4 py-1 rounded-full text-sm shadow-sm mb-4
          "
        >
          Who I Am
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About Me
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed">
          I’m <span className="text-cyan-400 font-semibold">Rakesh</span>, a
          self-taught web developer with a strong foundation in computer science
          and hands-on experience building full-stack applications. I enjoy
          turning ideas into clean, scalable, and intuitive digital experiences.
          <br /><br />
          My primary focus is the{" "}
          <span className="text-cyan-400 font-semibold">MERN Stack</span>, and I
          continuously refine my skills by working on real-world projects,
          solving challenges, and exploring modern tools that improve developer
          productivity.
          <br /><br />
          I’m always open to opportunities, collaboration, and learning new
          technologies that help me grow as a developer.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
