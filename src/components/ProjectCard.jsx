import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}

      className="
        bg-black/30 backdrop-blur-md
        rounded-2xl border border-white/10 
        shadow-md overflow-hidden
        p-6 
        flex flex-col 
        lg:flex-row
        gap-8
        mb-5   /* ➜ spacing between project cards */
      "
    >
      {/* Left: Image */}
      <div
        className="
          lg:w-1/2 
          flex justify-center items-center 
        "
      >
        <div
          className="
            w-full 
            h-48 sm:h-56 md:h-64 lg:h-80  /* ➜ equal height on large screens */
            rounded-xl overflow-hidden
          "
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="
              w-full h-full object-cover
              transition-transform duration-500 
              hover:scale-105
            "
          />
        </div>
      </div>

      {/* Right: Text Content */}
      <div
        className="
          lg:w-1/2
          flex flex-col justify-center  /* ➜ centers text vertically */
        "
      >
        <h3 className="text-2xl font-bold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-gray-300 text-base mb-5 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="
                px-3 py-1 rounded-full text-xs
                bg-white/10 border border-white/20 
                text-cyan-300
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-3">
          <a
            href={project.github}
            target="_blank"
            className="
              px-4 py-2 rounded-full 
              border border-white/20 bg-black/20 
              text-gray-200 text-sm
              hover:bg-white/10 hover:border-cyan-400 hover:text-cyan-300
              transition-all
            "
          >
            GitHub
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="
                px-4 py-2 rounded-full 
                border border-white/20 bg-black/20 
                text-gray-200 text-sm
                hover:bg-white/10 hover:border-cyan-400 hover:text-cyan-300
                transition-all
              "
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
