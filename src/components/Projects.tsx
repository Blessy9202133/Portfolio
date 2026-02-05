function Projects() {
  const projects = [
    {
      title: "Admin Dashboard UI",
      desc: "Responsive dashboard with sidebar navigation, stats cards, tables, and analytics layout.",
      tech: "React, TypeScript, Tailwind CSS",
    },
    {
      title: "E-Commerce Website UI",
      desc: "Modern shopping interface with product grid, filters, and cart design focusing on UX.",
      tech: "React, CSS Grid, Responsive Design",
    },
    {
      title: "Location-Based Travel App",
      desc: "Detects user location and recommends nearby attractions with ratings and details.",
      tech: "JavaScript, React, Geolocation API",
    },
    {
      title: "Form Management System UI",
      desc: "Multi-step form system with validation, file upload, and structured UI.",
      tech: "React, TypeScript, Form Validation",
    }
  ]

  return (
    <section id="projects" className="px-10 py-20 bg-[#0f1d35]">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
  My <span className="text-teal-400">Projects</span>
</h2>


      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
           className="bg-[#112240] p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-teal-400 hover:-translate-y-2 transition-all duration-300"

          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-gray-400 leading-relaxed">{project.desc}</p>

            <div className="mt-6 flex flex-wrap gap-2">
  {project.tech.split(", ").map((tech, i) => (
    <span
      key={i}
      className="text-xs bg-[#0A192F] text-teal-400 px-3 py-1 rounded-full border border-teal-400"
    >
      {tech}
    </span>
  ))}
</div>


            <div className="mt-6 flex gap-4">
              <button className="bg-teal-500 text-black px-4 py-2 rounded-lg hover:bg-teal-400">
                Live Demo
              </button>
              <button className="border border-teal-400 px-4 py-2 rounded-lg hover:bg-teal-400 hover:text-black">
                GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
