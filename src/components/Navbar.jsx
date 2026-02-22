function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
      <h1 className="text-xl font-semibold tracking-wide">
        Sanjay.dev
      </h1>

      <div className="space-x-6 text-sm text-gray-300">
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
        <a
  href="/resume.pdf"
  download
  className="border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
>
  Resume
</a>
      </div>
    </nav>
  );
}

export default Navbar;