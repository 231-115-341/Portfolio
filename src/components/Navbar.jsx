function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-400">Fahmina Zannat Khan Zebin</div>
        <ul className="flex gap-6">
          <li><a href="#about" className="text-gray-700 hover:text-purple-400 transition">About</a></li>
          <li><a href="#skills" className="text-gray-700 hover:text-purple-400 transition">Skills</a></li>
          <li><a href="#projects" className="text-gray-700 hover:text-purple-400 transition">Projects</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-purple-400 transition">Contact</a></li>
          <li><a href="#certificates" className="text-gray-700 hover:text-purple-400 transition">Certificates</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;