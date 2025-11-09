const Skills = () => {
  return (
    <section id="skills" className="py-12 px-4 sm:px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="flex flex-wrap gap-6">
        <div className="flex-1 min-w-[200px] bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Languages</h3>
          <p className="text-gray-600">HTML, CSS, JavaScript, SQL</p>
        </div>
        <div className="flex-1 min-w-[200px] bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Frameworks & Libraries</h3>
          <p className="text-gray-600">React, Node.js, Express</p>
        </div>
        <div className="flex-1 min-w-[200px] bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Tools & Platforms</h3>
          <p className="text-gray-600">Git, GitHub, VSCode</p>
        </div>
      </div>
    </section>
  )
}

export default Skills
