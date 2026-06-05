function About() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React",
    "Tailwind CSS", "Node.js", "Express", "MongoDB",
    "Git", "GitHub", "REST APIs", "JWT"
  ]

  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
      <div className="w-16 h-1 bg-blue-400 mb-10"></div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            Hi! I'm Pranay, an aspiring developer based in Nagpur. I love building real-world web applications and am constantly learning new technologies.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            I've recently built full stack projects using React, Node.js, and MongoDB, and I'm always looking to grow and take on new challenges.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="text-blue-400 font-semibold w-24">Name:</span>
            <span className="text-gray-300">Pranay Magar</span>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-400 font-semibold w-24">Role:</span>
            <span className="text-gray-300">Aspiring Developer</span>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-400 font-semibold w-24">Location:</span>
            <span className="text-gray-300">Nagpur, India</span>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-400 font-semibold w-24">Email:</span>
            <span className="text-gray-300">pranaymagar0@gmail.com</span>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-4">Skills</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-800 border border-gray-700 text-blue-400 px-4 py-2 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default About