import { FaQuoteLeft } from "react-icons/fa";

function Founder() {
  return (
    <section
      id="founder"
      className="bg-white py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p
            className="uppercase tracking-[6px] text-[#FFD600] font-bold"
            style={{ fontFamily: "Oswald" }}
          >
            Meet Our Director
          </p>

          <h2
            className="text-4xl md:text-6xl uppercase font-black mt-3 text-black"
            style={{ fontFamily: "Oswald" }}
          >
            A Story of
            <span className="text-[#1565C0]"> Passion</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AxipcGYgnMi2AQq82wBGNx7d3EV8fmOqqsv75o7vTg_RUE_Oz0_xVu0z&s=10"
              alt="Surbhi Madan"
              className="w-full h-[650px] object-cover rounded-3xl border-[6px] border-[#1565C0] shadow-2xl"
            />

            <div className="text-center mt-6">
              <h3
                className="text-3xl text-[#1565C0]"
                style={{ fontFamily: "Oswald" }}
              >
                Surbhi Madan
              </h3>

              <p
                className="text-lg text-gray-600 mt-2"
                style={{ fontFamily: "Poppins" }}
              >
                Founder & Creative Director
              </p>

              {/* Highlight Badges */}
              <div className="flex flex-wrap justify-center gap-3 mt-6">

                <div className="bg-[#EAF4FF] border border-[#1565C0] rounded-full px-5 py-2 shadow-sm">
                  <span className="font-semibold text-[#1565C0] text-sm">
                    12+ Years Experience
                  </span>
                </div>

                <div className="bg-[#EAF4FF] border border-[#1565C0] rounded-full px-5 py-2 shadow-sm">
                  <span className="font-semibold text-[#1565C0] text-sm">
                    Professional Dancer
                  </span>
                </div>

                <div className="bg-[#EAF4FF] border border-[#1565C0] rounded-full px-5 py-2 shadow-sm">
                  <span className="font-semibold text-[#1565C0] text-sm">
                    Theatre Educator
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>

            <FaQuoteLeft className="text-[#1565C0] text-3xl mb-4" />

            <h3
              className="text-3xl md:text-5xl font-black leading-tight text-black"
              style={{ fontFamily: "Oswald" }}
            >
              Every Child Deserves
              <span className="text-[#1565C0]"> A Stage.</span>
            </h3>

            <p
              className="mt-6 text-lg leading-9 text-gray-700"
              style={{ fontFamily: "Poppins" }}
            >
              <span className="font-semibold text-[#1565C0]">
                Surbhi Madan
              </span>{" "}
              is the Founder of{" "}
              <span className="font-semibold text-[#1565C0]">
                Oompa Loompa Musicals
              </span>{" "}
              and has over <strong>12 years of experience</strong> in children's
              musical theatre.
            </p>

            <p
              className="mt-5 text-lg leading-9 text-gray-700"
              style={{ fontFamily: "Poppins" }}
            >
              A professional dancer and passionate educator, she began her
              career teaching in schools before founding Oompa Loompa Musicals.
              Her vision was to create a joyful space where children can explore
              their creativity, develop confidence, and express themselves
              through the magic of musical theatre.
            </p>

            <p
              className="mt-5 text-lg leading-9 text-gray-700"
              style={{ fontFamily: "Poppins" }}
            >
              She believes every child deserves a chance to shine. Through
              immersive theatre classes, engaging workshops, and memorable
              productions, she is dedicated to helping children build
              confidence, creativity, teamwork, communication skills, and a
              lifelong love for performing arts.
            </p>

            {/* Quote */}
            <div className="mt-8 border-l-4 border-[#1565C0] pl-6">

              <p
                className="text-2xl italic text-gray-800 leading-10"
                style={{ fontFamily: "Poppins" }}
              >
                "Every child deserves a stage where they feel seen, heard, and
                celebrated. Theatre has the power to build confidence that lasts
                a lifetime."
              </p>

              <p
                className="mt-4 text-[#1565C0] font-semibold text-lg"
                style={{ fontFamily: "Oswald" }}
              >
                — Surbhi Madan
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;