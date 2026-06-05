function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="text-blue-400 font-medium mb-3 tracking-widest uppercase text-sm">Welcome to my portfolio</p>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Hi, I'm <span className="text-blue-400">Pranay Magar</span>
      </h1>
      <p className="text-xl text-gray-400 max-w-xl mb-8">
        An aspiring developer passionate about building full stack web applications and learning new technologies.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition">
          View My Work
        </a>
        <a href="#contact" className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 font-semibold px-6 py-3 rounded-lg transition">
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default Hero