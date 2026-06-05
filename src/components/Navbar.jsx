function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 border-b border-gray-700 px-6 py-4 flex justify-between items-center z-50">
      <h1 className="text-xl font-bold text-white">Pranay Magar</h1>
      <ul className="flex gap-6">
        <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition">About</a></li>
        <li><a href="#projects" className="text-gray-300 hover:text-blue-400 transition">Projects</a></li>
        <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar