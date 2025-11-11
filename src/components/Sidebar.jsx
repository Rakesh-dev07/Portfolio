import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Sidebar = () => {
  const links = [
    {
      id: 1,
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/rakesh",
      label: "LinkedIn",
    },
    {
      id: 2,
      icon: <FaGithub />,
      url: "https://github.com/rakesh",
      label: "GitHub",
    },
    {
      id: 3,
      icon: <FaEnvelope />,
      url: "mailto:rakesh@example.com",
      label: "Email",
    },
    {
      id: 4,
      icon: <FaInstagram />,
      url: "https://instagram.com/rakesh",
      label: "Instagram",
    },
  ];

  return (
    <>
      {/* 🖥 Desktop Sidebar */}
      <div
        className="
          fixed left-6 top-1/2 -translate-y-1/2 
          hidden md:flex flex-col items-center gap-6 
          bg-black/30 backdrop-blur-md 
          border border-white/10 rounded-2xl 
          p-3 shadow-md z-40
        "
      >
        {links.map(({ id, icon, url, label }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            className="
              text-gray-300 text-xl 
              bg-black/40 hover:bg-cyan-500/20
              rounded-full p-3 
              transition-all hover:scale-110 
              hover:text-cyan-400
            "
          >
            {icon}
          </a>
        ))}
      </div>

      {/* 📱 Mobile Bottom Bar */}
      <div
        className="
          fixed bottom-4 left-1/2 -translate-x-1/2 
          flex md:hidden justify-center items-center gap-8 
          bg-black/30 backdrop-blur-md 
          border border-white/10 rounded-2xl 
          px-8 py-3 shadow-md z-40
        "
      >
        {links.map(({ id, icon, url, label }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            className="
              text-gray-300 text-2xl 
              hover:text-cyan-400 transition-all hover:drop-shadow-[0_0_6px_#06B6D4]
            "
          >
            {icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
