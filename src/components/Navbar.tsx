import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav className="p-4 fixed w-full top-0 left-0 shadow-lg bg-black z-50">
      <div className="flex justify-center items-center max-w-6xl mx-auto">
        {/* Ícone do menu hamburguer (mobile) */}
        <button
          className="md:hidden text-white text-2xl absolute left-4"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6 text-white" role="menu">
          {["home", "about", "stacks", "projects", "contact"].map((item) => (
            <li key={item} role="menuitem">
              <button
                onClick={() => scrollToSection(item)}
                className="px-6 py-3 rounded-full border-2 border-white hover:bg-white hover:text-black transition duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-black flex flex-col items-center space-y-4 py-6 md:hidden"
        >
          {["home", "about", "stacks", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white text-lg py-2 px-4 border-b border-gray-600 w-full text-center"
              role="menuitem"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
