import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

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
      icon: <MdOutlineMail />,
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
    <div className="fixed left-5 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-gray-400 text-2xl z-40">
      {links.map(({ id, icon, url, label }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-transform hover:scale-110"
          title={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
