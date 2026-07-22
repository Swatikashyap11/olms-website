import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-[#0D47A1] via-[#1565C0] to-[#1976D2] text-white px-6 md:px-16 py-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* TOP HEADING */}

        <div className="text-center mb-12">
          <p
            className="text-[#FFD54F] uppercase tracking-[6px] mb-3 font-bold text-sm md:text-base"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Contact & Registration
          </p>

          <h1
            className="text-4xl md:text-5xl uppercase text-white leading-tight"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Join Our Musical Family
          </h1>
        </div>

        {/* FOOTER CONTENT */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 border-t border-[#FFD54F]/40 pt-10">
          {/* OPENING HOURS */}

          <div>
            <h2
              className="text-2xl md:text-3xl text-[#FFD54F] uppercase mb-5"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Opening Hours
            </h2>

            <div
              className="leading-9 text-lg text-blue-50"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              <p>Tuesday - Friday</p>

              <span className="text-[#FFD54F] font-semibold">
                12:00 pm - 7:00 pm
              </span>

              <p className="mt-4">Saturday - Sunday</p>

              <span className="text-[#FFD54F] font-semibold">
                10:00 am - 7:00 pm
              </span>

              {/* <p className="mt-4">
                Monday
                <span className="text-red-00 ml-3">
                  Closed
                </span>
              </p> */}
            </div>
          </div>

          {/* REGISTER */}

          <div>
            <h2
              className="text-2xl md:text-3xl text-[#FFD54F] uppercase mb-5"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Register
            </h2>

            <p
              className="text-blue-50 leading-8 mb-7 text-lg"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Join our exciting musical theatre classes and begin your
              performing arts journey today.
            </p>

            <a
              href="https://forms.gle/HKneKFRaTaaX8zja6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FFD54F] text-[#0D47A1] hover:bg-white hover:text-[#0D47A1] px-7 py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-300"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Register Now
            </a>
          </div>

          {/* CONTACT */}

          <div>
            <h2
              className="text-2xl md:text-3xl text-[#FFD54F] uppercase mb-5"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Contact
            </h2>

            <div
              className="text-lg leading-9 text-blue-50"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              <p className="font-semibold text-[#FFD54F] text-xl">
                Oompa Loompa Musicals
              </p>

              <div className="mt-4 space-y-2">

                <p className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#FFD54F]" />
                  Gurgaon
                </p>

                <p className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#FFD54F]" />
                  GK II, New Delhi
                </p>

                <p className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#FFD54F]" />
                  Punjabi Bagh
                </p>

              </div>

              <div className="mt-5">
                <p className="flex items-center gap-3 text-[#FFD54F] break-all">
                  <FaEnvelope />
                  oompaloompamusicals@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* FOLLOW US */}

          <div>
            <h2
              className="text-2xl md:text-3xl text-[#FFD54F] uppercase mb-5"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Follow Us
            </h2>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://www.instagram.com/oompaloompamusicals?igsh=MWh4OTB1N3V0a2dwcw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white text-[#1565C0] rounded-full flex items-center justify-center text-2xl hover:bg-[#FFD54F] hover:text-[#0D47A1] hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaInstagram />
              </a>

              {/* <a
                href="https://www.youtube.com/@Oompaloompamusicals"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white text-[#1565C0] rounded-full flex items-center justify-center text-2xl hover:bg-[#FFD54F] hover:text-[#0D47A1] hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaYoutube />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white text-[#1565C0] rounded-full flex items-center justify-center text-2xl hover:bg-[#FFD54F] hover:text-[#0D47A1] hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaFacebookF />
              </a> */}
            </div>

            <p
              className="text-blue-50 mt-7 leading-8 text-lg"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Follow our journey and stay updated with performances,
              workshops, auditions, and exciting musical events.
            </p>
          </div>
        </div>

        {/* COPYRIGHT */}

        <div className="border-t border-[#FFD54F]/30 mt-10 pt-6 text-center">
          <p
            className="text-blue-100 text-sm md:text-base"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            © 2026 Oompa Loompa Musicals. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;