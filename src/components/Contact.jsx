const Contact = () => {
  return (
    <section id="contact" className="py-20 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="mb-6 text-lg">I’m open to internship or junior developer opportunities — let’s connect!</p>
      <div className="space-x-6">
        <a href="mailto:rakesh@example.com" className="text-blue-400 hover:underline">Email</a>
        <a href="https://github.com/yourusername" target="_blank" className="text-blue-400 hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-blue-400 hover:underline">LinkedIn</a>
      </div>
    </section>
  )
}
export default Contact
