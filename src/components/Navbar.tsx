function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0A192F]/90 backdrop-blur-md z-50 px-10 py-4 flex justify-between items-center border-b border-gray-800">
      <h1 className="text-teal-400 font-bold text-lg"></h1>

      <div className="hidden md:flex gap-8 text-gray-300">
        <a href="#about" className="hover:text-teal-400 transition">About</a>
        <a href="#skills" className="hover:text-teal-400 transition">Skills</a>
        <a href="#experience" className="hover:text-teal-400 transition">Experience</a>
        <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
        <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
