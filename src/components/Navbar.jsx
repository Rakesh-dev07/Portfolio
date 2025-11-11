import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["About", "Skills", "Projects", "Contact"];

  const handleScrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`
        fixed top-6 left-1/2 -translate-x-1/2 
        bg-black/30 backdrop-blur-md border border-white/10 shadow-md
        rounded-2xl z-50 w-[90%] md:w-auto max-w-3xl 
        transition-all duration-300 ease-in-out
        px-6 md:px-8 py-3
        flex flex-col md:flex-row items-center
      `}
    >
      {/* Top Row (always visible) */}
      <div className="w-full flex justify-between items-center">
        {/* Profile Icon (click to Hero section) */}
        <button
          onClick={handleScrollToHero}
          className="flex items-center gap-2 text-cyan-400 hover:drop-shadow-[0_0_8px_#06B6D4] transition-all"
        >
          <FaUserCircle className="text-3xl" />
        </button>

        {/* Hamburger menu (mobile only) */}
        <button
          className="md:hidden text-3xl text-gray-200 hover:text-cyan-400 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 text-gray-200 font-medium ml-8">
        {navLinks.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#06B6D4] transition-all"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile expanded menu (inside same navbar) */}
      {menuOpen && (
        <ul
          className="
            flex flex-col w-full items-center gap-5 mt-4 
            text-gray-200 font-medium md:hidden
            animate-fade-in
          "
        >
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)} // close after click
                className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#06B6D4] transition-all"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
