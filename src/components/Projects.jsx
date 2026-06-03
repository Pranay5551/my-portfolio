const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS to showcase my work and skills.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather App",
    description: "A weather application that shows real-time weather data for any city using an API.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    github: "#",
    live: "#",
  },
  {
    title: "Todo List App",
    description: "A clean and minimal todo app with the ability to add, complete and delete tasks.",
    tech: ["React", "JavaScript", "CSS"],
    github: "#",
    live: "#",
  },
]

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-4xl mx-auto">

      {/* Section Title */}
      <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
      <div className="w-16 h-1 bg-blue-400 mb-10"></div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col justify-between hover:border-blue-400 transition"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="bg-gray-700 text-blue-400 text-xs px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <a href={project.github} className="text-gray-400 hover:text-white text-sm transition">GitHub →</a>
              <a href={project.live} className="text-gray-400 hover:text-blue-400 text-sm transition">Live →</a>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Projects