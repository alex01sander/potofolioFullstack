function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className=" p-4 fixed w-full top-0 left-0 shadow-lg">
      <ul className="flex justify-center space-x-6 text-white">
        <li>
          <button
            onClick={() => scrollToSection("home")}
            className="px-6 py-3 rounded-full border-2 border-white hover:bg-white hover:text-black transition duration-300"
          >
            Início
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className="px-6 py-3 rounded-full border-2 border-white hover:bg-white hover:text-black transition duration-300"
          >
            Sobre
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-3 rounded-full border-2 border-white hover:bg-white hover:text-black transition duration-300"
          >
            Projetos
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 rounded-full border-2 border-white hover:bg-white hover:text-black transition duration-300"
          >
            Contato
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
