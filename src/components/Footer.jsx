function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-6 text-center">
      <p className="text-gray-500 text-sm">
        Designed & Built by{" "}
        <span className="text-blue-400 font-medium">Alex Johnson</span>
      </p>
      <p className="text-gray-600 text-xs mt-1">© 2026 All Rights Reserved</p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-4">
        <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition">GitHub</a>
        <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition">LinkedIn</a>
        <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition">Twitter</a>
      </div>
    </footer>
  )
}

export default Footer