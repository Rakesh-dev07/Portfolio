import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
        Hi, I’m <span className="text-cyan-400">Rakesh</span>
      </h2>
      <h3 className="text-2xl md:text-3xl text-cyan-300 mb-4">
        Web Developer
      </h3>
      <p className="text-gray-400 max-w-xl mb-8">
        I build websites that look great and perform well.
      </p>
      <a
        href="#projects"
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-all"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
