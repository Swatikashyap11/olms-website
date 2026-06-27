import {
  FaInstagram,
  FaYoutube,
  FaFacebookF
} from "react-icons/fa"

function Footer() {

  return (

    <footer id="contact" className="bg-linear-to-b from-[#fffdf5] via-[#fff7d6] to-[#ffe680] text-black px-6 md:px-16 py-10">

      <div className="max-w-7xl mx-auto">

        {/* TOP HEADING */}

        <div className="text-center mb-10">

          <p
            className="text-yellow-700 uppercase tracking-[6px] mb-3 font-bold text-sm md:text-base"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Contact & Registration
          </p>

          <h1
            className="text-4xl md:text-6xl uppercase font-black text-black leading-tight"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Join Our Musical Family
          </h1>

        </div>



        {/* FOOTER CONTENT */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 border-t border-yellow-500/20 pt-10">

          {/* OPENING HOURS */}

          <div className="p-2">

            <h2
              className="text-2xl md:text-3xl text-yellow-700 uppercase mb-5"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Opening Hours
            </h2>

            <div
              className="text-gray-800 leading-9 text-lg"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >

              <p>
                Tuesday - Friday
              </p>

              <span className="text-yellow-700 font-semibold">
                4:00 pm - 7:00 pm
              </span>

              <p className="mt-4">
                Saturday - Sunday
              </p>

              <span className="text-yellow-700 font-semibold">
                10:00 am - 7:00 pm
              </span>

              <p className="mt-4">
                Monday
                <span className="text-red-500 ml-3 font-semibold">
                  Closed
                </span>
              </p>

            </div>

          </div>



          {/* REGISTER */}

          <div className="p-2">

            <h2
              className="text-2xl md:text-3xl text-yellow-700 uppercase mb-5"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Register
            </h2>

            <p
              className="text-gray-700 leading-8 mb-7 text-lg"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Join our acting, singing and
              musical theatre classes today.
            </p>



            <a
              href="https://forms.gle/HKneKFRaTaaX8zja6"
              target="_blank"
              className="inline-block bg-yellow-400 hover:bg-black hover:text-white text-black px-7 py-3 text-lg rounded-xl transition duration-300"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Register Now
            </a>

          </div>



          {/* CONTACT */}

          <div className="p-2">

            <h2
              className="text-2xl md:text-3xl text-yellow-700 uppercase mb-5"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Contact
            </h2>

            <div
              className="text-lg leading-9 text-gray-800"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >

              <p className="font-semibold text-yellow-700">
                Oompa Loompa Musicals
              </p>

              <p>
                New Delhi, India
              </p>

              <br />

              <p>
                +91 92203 39882
              </p>

              <p>
                +91 98189 50374
              </p>

              <br />

              <p className="text-yellow-700 wrap-break-word">
                oompaloompamusicals@gmail.com
              </p>

            </div>

          </div>



          {/* FOLLOW US */}

          <div className="p-2">

            <h2
              className="text-2xl md:text-3xl text-yellow-700 uppercase mb-5"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Follow Us
            </h2>

            <div className="flex gap-4 flex-wrap">

              {/* INSTAGRAM */}

              <a
                href="https://instagram.com"
                target="_blank"
                className="w-14 h-14 bg-yellow-400 text-black rounded-full flex items-center justify-center text-2xl hover:bg-black hover:text-white hover:scale-110 transition duration-300"
              >
                <FaInstagram />
              </a>



              {/* YOUTUBE */}

              <a
                href="https://youtube.com"
                target="_blank"
                className="w-14 h-14 bg-yellow-400 text-black rounded-full flex items-center justify-center text-2xl hover:bg-black hover:text-white hover:scale-110 transition duration-300"
              >
                <FaYoutube />
              </a>



              {/* FACEBOOK */}

              <a
                href="https://facebook.com"
                target="_blank"
                className="w-14 h-14 bg-yellow-400 text-black rounded-full flex items-center justify-center text-2xl hover:bg-black hover:text-white hover:scale-110 transition duration-300"
              >
                <FaFacebookF />
              </a>

            </div>



            <p
              className="text-gray-700 mt-7 leading-8 text-lg"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Follow our journey and stay updated
              with performances, workshops and events.
            </p>

          </div>

        </div>



        {/* COPYRIGHT */}

        <div className="border-t border-yellow-400/20 mt-6 pt-3 text-center">

          <p
            className="text-gray-700 text-sm md:text-base"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            © 2026 Oompa Loompa Musicals.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>

  )

}

export default Footer