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

const itemVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.35,
      type: "spring",
      stiffness: 150,
    },
  }),
};

export default function Skills() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.35 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 flex flex-col items-center text-center text-white overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center mb-10"
      >
        <span className="bg-gray-800 text-gray-300 px-4 py-1 rounded-full text-sm mb-3 shadow-sm">
          My Arsenal
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Tech Stack</h2>
        <div className="h-[3px] w-20 bg-cyan-400 rounded" />
      </motion.div>

      {/* ========================== SMALL SCREENS ========================== */}
      <div className="w-full grid grid-cols-3 gap-8 sm:gap-10 md:hidden">
        {skills.map((skill, i) => (
          <SkillItem key={skill.name} skill={skill} i={i} controls={controls} />
        ))}
      </div>

      {/* ========================== TABLETS =============================== */}
      <div className="hidden md:flex lg:hidden flex-wrap justify-center gap-10 max-w-3xl">
        {skills.map((skill, i) => (
          <SkillItem key={skill.name} skill={skill} i={i} controls={controls} />
        ))}
      </div>

      {/* ========================== LARGE SCREENS ========================= */}
      <div className="hidden lg:flex flex-col items-center gap-10 w-full">

        {/* First Row (9 icons) */}
        <div className="flex flex-wrap justify-center gap-10 max-w-6xl">
          {skills.slice(0, 9).map((skill, i) => (
            <SkillItem key={skill.name} skill={skill} i={i} controls={controls} />
          ))}
        </div>

        {/* Second Row (3 icons) */}
        <div className="flex flex-wrap justify-center gap-10 max-w-3xl">
          {skills.slice(9).map((skill, i) => (
            <SkillItem
              key={skill.name}
              skill={skill}
              i={i + 9}
              controls={controls}
            />
          ))}
        </div>

      </div>

      {/* Footer Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="text-gray-400 mt-14 text-sm md:text-base"
      >
        I constantly try to improve my stack.
      </motion.p>
    </section>
  );
}

/* ========================== REUSABLE ITEM COMPONENT ========================== */
const SkillItem = ({ skill, i, controls }) => (
  <motion.div
    custom={i}
    initial="hidden"
    animate={controls}
    variants={itemVariant}
    className="relative group flex flex-col items-center"
  >
    <div className="p-4 rounded-xl transition-all hover:scale-110 hover:drop-shadow-[0_0_10px_#06B6D4]">
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-14 h-14 opacity-90 group-hover:opacity-100 transition-all"
      />
    </div>

    <span className="absolute top-full mt-2 text-sm text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {skill.name}
    </span>
  </motion.div>
);
