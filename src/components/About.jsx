const About = () => {
  return (
    <section id="about" className="py-20 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m Rakesh, a self-taught web developer with a Bachelor’s degree in Computer Science from Mumbai University. 
          Currently, I’m sharpening my MERN stack skills through projects and open-source practice. 
          I enjoy transforming complex problems into clean, user-friendly interfaces and love learning new tools that make development faster and smarter.
        </p>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
          <p className="text-gray-700">
            HTML • CSS • JavaScript • React • Node.js • Express • MongoDB • Git • Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  )
}
export default About
