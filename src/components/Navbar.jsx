import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-[1500px] mx-auto flex items-center justify-between px-8 lg:px-14 py-7">

        {/* LOGO */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/logo-trans.png"
            alt="logo"
            className="w-14 md:w-16 object-contain transition duration-300 hover:scale-105"
          />

          <div>
            <h1
              className="text-white text-3xl md:text-[46px] leading-none"
              style={{ fontFamily: "Chewy, cursive" }}
            >
              Oompa Loompa
            </h1>

            <p
              className="text-yellow-300 text-sm md:text-lg tracking-[0.35em]"
              style={{ fontFamily: "Chewy, cursive" }}
            >
              MUSICALS
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul
          className="hidden lg:flex items-center gap-10 xl:gap-12"
          style={{ fontFamily: "Chewy, cursive" }}
        >
          <li>
            <a
              href="#home"
              className="text-[#1ac9cf] text-[15px] tracking-wide transition-all duration-300 hover:text-white"
            >
              HOME
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-white text-[15px] tracking-wide transition-all duration-300 hover:text-[#1ac9cf]"
            >
              ABOUT
            </a>
          </li>

          <li>
            <a
              href="#productions"
              className="text-white text-[15px] tracking-wide transition-all duration-300 hover:text-[#1ac9cf]"
            >
              PRODUCTIONS
            </a>
          </li>

          <li>
            <a
              href="#gallery"
              className="text-white text-[15px] tracking-wide transition-all duration-300 hover:text-[#1ac9cf]"
            >
              GALLERY
            </a>
          </li>

          <li>
            <a
              href="#testimonial"
              className="text-white text-[15px] tracking-wide transition-all duration-300 hover:text-[#1ac9cf]"
            >
              TESTIMONIAL
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-white text-[15px] tracking-wide transition-all duration-300 hover:text-[#1ac9cf]"
            >
              CONTACT
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1"
        >
          <span className="w-7 h-1 bg-white rounded-full"></span>
          <span className="w-7 h-1 bg-white rounded-full"></span>
          <span className="w-7 h-1 bg-white rounded-full"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden bg-[#0D47A1]/95 backdrop-blur-md px-8 py-6"
          style={{ fontFamily: "Chewy, cursive" }}
        >
          <ul className="flex flex-col gap-5">
            <li>
              <a href="#home" className="text-yellow-300">
                HOME
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="text-white hover:text-yellow-300 transition"
              >
                ABOUT
              </a>
            </li>

            <li>
              <a
                href="#productions"
                className="text-white hover:text-yellow-300 transition"
              >
                PRODUCTIONS
              </a>
            </li>

            <li>
              <a
                href="#gallery"
                className="text-white hover:text-yellow-300 transition"
              >
                GALLERY
              </a>
            </li>

            <li>
              <a
                href="#testimonial"
                className="text-white hover:text-yellow-300 transition"
              >
                TESTIMONIAL
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-white hover:text-yellow-300 transition"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;