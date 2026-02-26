import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">Giuseppe</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <a href="#projects" className="hover:text-gray-500">
              Progetti
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-500">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-500">
              Contatti
            </a>
          </li>
        </ul>

        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li>
              <a href="#projects" onClick={() => setOpen(false)}>
                Progetti
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setOpen(false)}>
                Contatti
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
