const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built using React and Tailwind CSS to showcase my work and skills.",
    tech: "React, Tailwind CSS",
    github: "https://github.com/yourusername/portfolio",
    live: "https://rakesh-portfolio.vercel.app"
  },
  {
    title: "Todo App",
    description: "A simple and responsive task manager that lets users add, edit, and delete tasks locally.",
    tech: "React, JavaScript, CSS",
    github: "https://github.com/yourusername/todo-app",
    live: "#"
  },
  {
    title: "Responsive Web Design Projects",
    description: "A collection of frontend designs built during freeCodeCamp’s Responsive Web Design course.",
    tech: "HTML, CSS",
    github: "https://github.com/yourusername/freecodecamp-projects",
    live: "#"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-2xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <p className="text-xs text-gray-600 mb-4">Tech: {project.tech}</p>
              <div className="flex gap-3">
                <a href={project.live} target="_blank" className="text-blue-600 font-semibold hover:underline">Live</a>
                <a href={project.github} target="_blank" className="text-gray-700 font-semibold hover:underline">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Projects
