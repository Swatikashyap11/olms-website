import {
  FaClock,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaPen,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0D47A1] text-white pt-8 pb-4 px-6 md:px-14"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="text-center">

          <p
            className="uppercase tracking-[6px] text-[#FFD600] text-sm font-bold"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Contact & Registration
          </p>

          <h1
            className="text-4xl md:text-5xl text-white uppercase mt-2"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Join Our Musical Family
          </h1>

          <div className="w-28 h-1 bg-[#FFD600] rounded-full mx-auto mt-3"></div>

        </div>

        {/* CONTENT */}

        <div className="grid md:grid-cols-3 gap-8 mt-8 pb-4 border-b border-white/20">

          {/* OPENING HOURS */}

          <div>

            <div className="flex items-center gap-3 mb-5">

              <FaClock className="text-white text-3xl" />

              <h2
                className="text-black text-3xl"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Opening Hours
              </h2>

            </div>

            <div
              className="space-y-5"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >

              <div>

                <p className="text-white text-xl">
                  Tuesday - Friday
                </p>

                <p className="text-[#FFD600] text-xl font-semibold">
                  12:00 PM - 7:00 PM
                </p>

              </div>

              <div>

                <p className="text-white text-xl">
                  Saturday - Sunday
                </p>

                <p className="text-[#FFD600] text-xl font-semibold">
                  10:00 AM - 7:00 PM
                </p>

              </div>

              <a
                href="https://forms.gle/HKneKFRaTaaX8zja6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#FFD600] text-black px-7 py-3 rounded-xl text-lg font-bold hover:bg-white transition-all duration-300 mt-3"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                <FaPen />
                Register Now
              </a>

            </div>

          </div>

          {/* LOCATIONS */}

          <div>

            <div className="flex items-center gap-3 mb-5">

              <FaMapMarkerAlt className="text-red-500 text-3xl" />

              <h2
                className="text-black text-3xl"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Locations
              </h2>

            </div>

            <div
              className="space-y-5 text-xl"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-white text-lg" />
                Gurgaon
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-white text-lg" />
                GK II, New Delhi
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-white text-lg" />
                Punjabi Bagh
              </p>

            </div>

          </div>

          {/* CONTACT */}
                    <div>

            <div
              className="space-y-4"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >

              {/* WHATSAPP */}

              <a
                href="https://wa.me/919999314238x"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-[#FFD600] transition-all duration-300 text-xl"
              >
                <FaWhatsapp className="text-[#25D366] text-3xl" />
                <span>Chat on WhatsApp</span>
              </a>

              <hr className="border-white/20" />

              {/* PHONE */}

              <a
                href="tel:+919999314238"
                className="flex items-center gap-4 hover:text-[#FFD600] transition-all duration-300 text-xl"
              >
                <FaPhoneAlt className="text-[#FFD600] text-2xl" />
                <span>+91 99993 14238</span>
              </a>

              <hr className="border-white/20" />

              {/* EMAIL */}

              <a
                href="mailto:oompaloompamusicals@gmail.com"
                className="flex items-center gap-4 hover:text-[#FFD600] transition-all duration-300 text-xl break-all"
              >
                <FaEnvelope className="text-[#FFD600] text-2xl" />
                <span>oompaloompamusicals@gmail.com</span>
              </a>

              <hr className="border-white/20" />

              {/* INSTAGRAM */}

              <a
                href="https://www.instagram.com/oompaloompamusicals"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-[#FFD600] transition-all duration-300 text-xl"
              >
                <FaInstagram className="text-[#FFD600] text-2xl" />
                <span>@oompaloompamusicals</span>
              </a>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}

        <div className="pt-3 text-center">

          <p
            className="text-white/80 text-base"
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