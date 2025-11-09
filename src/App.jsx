import React from "react";
import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="">
      <Navbar />
      <main className="pt-20">
       {/* <Sidebar /> */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
