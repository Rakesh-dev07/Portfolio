import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50 flex justify-between items-center px-8 py-4 backdrop-blur-sm">
      <h1 className="text-white text-xl font-bold">Rakesh</h1>
      <ul className="flex gap-8 text-gray-300 font-medium">
        {["About", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
