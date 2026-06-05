function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-6 text-center">
      <p className="text-gray-500 text-sm">
        Designed & Built by{" "}
        <span className="text-blue-400 font-medium">Pranay Magar</span>
      </p>
      <p className="text-gray-600 text-xs mt-1">© 2026 All Rights Reserved</p>

      <div className="flex justify-center gap-6 mt-4">
        <a href="https://github.com/Pranay5551" target="_blank" className="text-gray-500 hover:text-blue-400 text-sm transition">GitHub</a>
        <a href="https://www.linkedin.com/in/pranay-magar-6aa2bb33b" target="_blank" className="text-gray-500 hover:text-blue-400 text-sm transition">LinkedIn</a>
        <a href="mailto:pranaymagar0@gmail.com" className="text-gray-500 hover:text-blue-400 text-sm transition">Email</a>
      </div>
    </footer>
  )
}

export default Footer