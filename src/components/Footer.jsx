const Footer = () => {
  return (
    <footer
      className="
        mt-20 py-6 
        bg-black/30 backdrop-blur-md 
        border-t border-white/10 
        text-gray-400 text-center text-sm
      "
    >
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-cyan-400 font-medium">Rakesh</span> — Built with
        React & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
