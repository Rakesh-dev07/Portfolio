// src/components/Projects.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../Data/Projects";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-20 text-white flex flex-col items-center">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <div className="flex items-center justify-center gap-3">
          <h2 className="text-4xl font-bold text-pink-400">Featured Projects</h2>
          <FaRocket className="text-pink-400 text-2xl" />
        </div>
        <p className="text-gray-400 mt-2">Built with modern tech & clean design</p>
      </motion.div>

      {/* Project Cards */}
      <div className="w-full max-w-6xl px-4 md:px-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </section>
  );
};

export default Projects;
