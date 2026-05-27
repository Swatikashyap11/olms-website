import { useState } from "react"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav className="w-full bg-linear-to-r from-white via-[#fff8dc] to-[#fff3b0] shadow-md border-b border-yellow-300">

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-3 flex items-center justify-between">

        {/* LOGO SECTION */}

        <div className="flex items-center gap-3">

          <img
            src="/logo.png"
            alt="logo"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-yellow-500"
          />



          <div>

            <h1
              className="text-black text-2xl md:text-4xl leading-none font-medium"
              style={{ fontFamily: "Fredoka, sans-serif" }}
            >
              Oompa Loompa
            </h1>

            <p
              className="text-yellow-600 text-sm md:text-lg tracking-wide"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              MUSICALS
            </p>

          </div>

        </div>



        {/* DESKTOP MENU */}

        <ul
          className="hidden lg:flex items-center gap-7 uppercase text-sm"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >

          <a
            href="#home"
            className="text-yellow-600 font-semibold hover:text-black transition duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-black hover:text-yellow-600 transition duration-300"
          >
            About
          </a>

          <a
            href="#productions"
            className="text-black hover:text-yellow-600 transition duration-300"
          >
            Productions
          </a>

          <a
            href="#gallery"
            className="text-black hover:text-yellow-600 transition duration-300"
          >
            Gallery
          </a>

          <a
            href="#testimonial"
            className="text-black hover:text-yellow-600 transition duration-300"
          >
            Testimonial
          </a>

          <a
            href="#contact"
            className="text-black hover:text-yellow-600 transition duration-300"
          >
            Contact
          </a>

        </ul>



        {/* MOBILE BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1"
        >

          <span className="w-6 h-0.5 bg-black rounded-full"></span>

          <span className="w-6 h-0.5 bg-black rounded-full"></span>

          <span className="w-6 h-0.5 bg-black rounded-full"></span>

        </button>

      </div>



      {/* MOBILE MENU */}

      {

        menuOpen && (

          <div
            className="lg:hidden bg-linear-to-b from-white to-[#fff3b0] border-t border-yellow-300 px-6 py-6"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >

        <ul className="flex flex-col gap-5 uppercase text-base">

          <a href="#home" className="text-yellow-600 font-semibold">
            Home
          </a>

          <a href="#about" className="text-black hover:text-yellow-600 transition">
            About
          </a>

          <a href="#productions" className="text-black hover:text-yellow-600 transition">
            Productions
          </a>

          <a href="#gallery" className="text-black hover:text-yellow-600 transition">
            Gallery
          </a>

          <a href="#testimonial" className="text-black hover:text-yellow-600 transition">
            Testimonial
          </a>

          <a href="#contact" className="text-black hover:text-yellow-600 transition">
            Contact
          </a>

        </ul>

          </div>

        )

      }

    </nav>

  )

}

export default Navbar 