import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0D47A1] shadow-xl border-b-2 border-cyan-300">

      <div className="max-w-[1500px] mx-auto px-3 lg:px-6 py-2 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">

          <img
            src="/logo-trans.png"
            alt="logo"
            className="w-14 md:w-17 object-contain transition-transform duration-300 hover:scale-105"
          />

          <div>

            <h1
              className="text-white text-3xl md:text-[42px] leading-none drop-shadow-lg"
              style={{ fontFamily: "Chewy, cursive" }}
            >
              Oompa Loompa
            </h1>

            <p
              className="text-yellow-300 text-base md:text-[18px] tracking-[0.35em]"
              style={{ fontFamily: "Chewy, cursive" }}
            >
              MUSICALS
            </p>

          </div>

        </div>

        {/* DESKTOP MENU */}

        <ul
          className="hidden lg:flex items-center gap-8 ml-20"
           style={{ fontFamily: "Chewy, cursive" }}
        >

          <a
            href="#home"
            className="text-yellow-300 text-[15px] tracking-wider transition-all duration-300 hover:text-white hover:scale-110"
          >
            HOME
          </a>

          <a
            href="#about"
            className="text-white text-[15px] tracking-wider transition-all duration-300 hover:text-yellow-300 hover:scale-110"
          >
            ABOUT
          </a>

          <a
            href="#productions"
            className="text-white text-[15px] tracking-wider transition-all duration-300 hover:text-yellow-300 hover:scale-110"
          >
            PRODUCTIONS
          </a>

          <a
            href="#gallery"
            className="text-white text-[15px] tracking-wider transition-all duration-300 hover:text-yellow-300 hover:scale-110"
          >
            GALLERY
          </a>

          <a
            href="#testimonial"
            className="text-white text-[15px] tracking-wider transition-all duration-300 hover:text-yellow-300 hover:scale-110"
          >
            TESTIMONIAL
          </a>

          <a
            href="#contact"
            className="text-white text-[15px] tracking-wider transition-all duration-300 hover:text-yellow-300 hover:scale-110"
          >
            CONTACT
          </a>

        </ul>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1"
        >
          <span className="w-7 h-1 bg-white rounded-full"></span>
          <span className="w-7 h-1 bg-white rounded-full"></span>
          <span className="w-7 h-1 bg-white rounded-full"></span>
        </button>

      </div>

      {/* MOBILE MENU */}

      {menuOpen && (

        <div
          className="lg:hidden bg-gradient-to-b from-[#0B3C91] via-[#1565C0] to-[#29B6F6] px-6 py-6 border-t border-cyan-300"
          style={{ fontFamily: "Bungee, cursive" }}
        >

          <ul className="flex flex-col gap-5">

            <a
              href="#home"
              className="text-yellow-300 text-lg"
            >
              HOME
            </a>

            <a
              href="#about"
              className="text-white text-lg hover:text-yellow-300 transition"
            >
              ABOUT
            </a>

            <a
              href="#productions"
              className="text-white text-lg hover:text-yellow-300 transition"
            >
              PRODUCTIONS
            </a>

            <a
              href="#gallery"
              className="text-white text-lg hover:text-yellow-300 transition"
            >
              GALLERY
            </a>

            <a
              href="#testimonial"
              className="text-white text-lg hover:text-yellow-300 transition"
            >
              TESTIMONIAL
            </a>

            <a
              href="#contact"
              className="text-white text-lg hover:text-yellow-300 transition"
            >
              CONTACT
            </a>

          </ul>

        </div>

      )}

    </nav>
  );
}

export default Navbar;