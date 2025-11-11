import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-6 bg-black/30 border border-white/10 rounded-2xl p-6 md:p-8 mb-10 backdrop-blur-md shadow-lg hover:shadow-cyan-500/10 transition-all"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5, type: "spring" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Left Side — Image */}
      <div className="w-full md:w-[45%] rounded-xl overflow-hidden shadow-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Right Side — Text Content */}
      <div className="flex flex-col justify-between w-full md:w-[55%] text-left space-y-4">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-800 text-gray-200 text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links — stay fixed in place */}
        <div className="flex items-center gap-6 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-all"
          >
            <FaGithub /> <span>GitHub</span>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all"
          >
            <FaGlobe /> <span>Live</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
