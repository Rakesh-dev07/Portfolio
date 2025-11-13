// src/components/Skills.jsx
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const skills = [
  { name: "React", icon: "https://skillicons.dev/icons?i=react" },
  { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
  { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
  { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
  { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
  { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
  { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
  { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
  { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
  { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
  { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
  { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
];

const containerVariants = {
  hidden: {},
  visible: {},
};

const itemVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.3, type: "spring", stiffness: 120 },
  }),
};

function Skills() {
  const controls = useAnimation();
  const ref = useRef(null);

  // useInView returns true/false depending on whether ref is visible.
  // amount: 0.25 -> when 25% of the element is visible
  const inView = useInView(ref, { amount: 0.35 });

  useEffect(() => {
    if (inView) {
      // when section enters viewport -> animate to "visible"
      controls.start("visible");
    } else {
      // when section leaves viewport -> animate to "hidden" so it will replay next time
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-transparent flex flex-col items-center text-center text-white overflow-hidden"
    >
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center mb-10"
      >
        <span className="bg-gray-800 text-gray-300 px-4 py-1 rounded-full text-sm mb-3 shadow-sm">
          My Arsenal
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Tech Stack</h2>
        <div className="h-[3px] w-20 bg-cyan-400 rounded" />
      </motion.div>

{/* Skills Section */}
<div className="w-full flex flex-col items-center gap-10 mt-10">

  {/* Small Devices → 3-column grid */}
  <div className="grid grid-cols-3 gap-8 sm:gap-10 md:hidden">
    {skills.map((skill, i) => (
      <motion.div
        key={skill.name}
        custom={i}
        initial="hidden"
        animate={controls}
        variants={itemVariant}
        className="relative group flex flex-col items-center"
      >
        <div className="p-4 rounded-xl transition-all hover:scale-110 hover:drop-shadow-[0_0_10px_#06B6D4]">
          <img src={skill.icon} alt={skill.name}
            className="w-14 h-14 opacity-90 group-hover:opacity-100 transition-all" />
        </div>

        <span className="absolute top-full mt-2 text-sm text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {skill.name}
        </span>
      </motion.div>
    ))}
  </div>

  {/* Tablet Layout → evenly centered, auto-balanced */}
  <div className="hidden md:flex lg:hidden flex-wrap justify-center gap-10 max-w-3xl">
    {skills.map((skill, i) => (
      <motion.div
        key={skill.name}
        custom={i}
        initial="hidden"
        animate={controls}
        variants={itemVariant}
        className="relative group flex flex-col items-center"
      >
        <div className="p-4 rounded-xl transition-all hover:scale-110 hover:drop-shadow-[0_0_10px_#06B6D4]">
          <img src={skill.icon} alt={skill.name}
            className="w-14 h-14 opacity-90 group-hover:opacity-100 transition-all" />
        </div>

        <span className="absolute top-full mt-2 text-sm text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {skill.name}
        </span>
      </motion.div>
    ))}
  </div>

  {/* Large Screens → 2-row "hero layout" (9 + 3 split) */}
  <div className="hidden lg:flex flex-col items-center gap-10 w-full">
    {/* Row 1 (9 icons) */}
    <div className="flex flex-wrap justify-center gap-10 max-w-6xl">
      {skills.slice(0, 9).map((skill, i) => (
        <motion.div
          key={skill.name}
          custom={i}
          initial="hidden"
          animate={controls}
          variants={itemVariant}
          className="relative group flex flex-col items-center"
        >
          <div className="p-4 rounded-xl transition-all hover:scale-110 hover:drop-shadow-[0_0_10px_#06B6D4]">
            <img src={skill.icon} alt={skill.name}
              className="w-14 h-14 opacity-90 group-hover:opacity-100 transition-all" />
          </div>

          <span className="absolute top-full mt-2 text-sm text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>

    {/* Row 2 (remaining icons) */}
    <div className="flex flex-wrap justify-center gap-10 max-w-3xl">
      {skills.slice(9).map((skill, i) => (
        <motion.div
          key={skill.name}
          custom={i + 9}
          initial="hidden"
          animate={controls}
          variants={itemVariant}
          className="relative group flex flex-col items-center"
        >
          <div className="p-4 rounded-xl transition-all hover:scale-110 hover:drop-shadow-[0_0_10px_#06B6D4]">
            <img src={skill.icon} alt={skill.name}
              className="w-14 h-14 opacity-90 group-hover:opacity-100 transition-all" />
          </div>

          <span className="absolute top-full mt-2 text-sm text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>

  </div>
</div>

      {/* footer */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-400 mt-14 text-sm md:text-base"
      >
        I constantly try to improve my stack.
      </motion.p>
    </section>
  );
}

export default Skills;