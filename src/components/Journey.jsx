import { FaQuoteLeft } from "react-icons/fa";

function Founder() {
  return (
    <section
      id="founder"
      className="bg-gradient-to-b from-white via-[#fffdf5] to-[#fff6d6] py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p
            className="uppercase tracking-[6px] text-yellow-700 font-bold"
            style={{ fontFamily: "Oswald" }}
          >
            Meet Our Director
          </p>

          <h2
            className="text-4xl md:text-6xl uppercase font-black mt-3"
            style={{ fontFamily: "Oswald" }}
          >
            A Story of
            <span className="text-yellow-500"> Passion</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AxipcGYgnMi2AQq82wBGNx7d3EV8fmOqqsv75o7vTg_RUE_Oz0_xVu0z&s=10"
              alt="Surbhi Madan"
              className="w-full h-[650px] object-cover rounded-3xl border-[6px] border-yellow-400 shadow-xl"
            />

            <div className="text-center mt-5">

              <h3
                className="text-3xl text-yellow-700"
                style={{ fontFamily: "Oswald" }}
              >
                Surbhi Madan
              </h3>

              <p
                className="text-xl text-gray-600 mt-2"
                style={{ fontFamily: "Poppins" }}
              >
                Founder & Creative Director
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            <FaQuoteLeft className="text-yellow-500 text-2xl mb-3" />

            <h3
              className="text-3xl md:text-4xl font-black leading-tight"
              style={{ fontFamily: "Oswald" }}
            >
              Every Child Deserves
              <span className="text-yellow-600"> A Stage.</span>
            </h3>

            <p
              className="mt-5 text-lg leading-9 text-gray-700"
              style={{ fontFamily: "Poppins" }}
            >
              At Oompa Loompa Musicals, every child is encouraged to dream,
              perform and express themselves through theatre.

              <br /><br />

              We believe drama is not just about acting—it is about building
              confidence, creativity, empathy and communication skills that
              stay with children for life.

              <br /><br />

              Our productions, workshops and musical theatre classes create
              unforgettable memories while helping young performers discover
              their true potential.

            </p>

            {/* Quote */}

            <div className="mt-6 border-l-4 border-yellow-500 pl-6">

              <p
                className="text-2xl italic text-gray-800 leading-10"
                style={{ fontFamily: "Poppins" }}
              >
                "We don't just teach theatre,
                we help children find confidence,
                creativity and their own voice."
              </p>

            </div>

            {/* Cards */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-200">
                <h4
                  className="text-yellow-700 text-xl mb-3"
                  style={{ fontFamily: "Oswald" }}
                >
                  Confidence
                </h4>

                <p className="text-gray-600 text-sm leading-7">
                  Every child learns to perform with confidence.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-200">
                <h4
                  className="text-yellow-700 text-xl mb-3"
                  style={{ fontFamily: "Oswald" }}
                >
                  Creativity
                </h4>

                <p className="text-gray-600 text-sm leading-7">
                  We inspire imagination through theatre and acting.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-200">
                <h4
                  className="text-yellow-700 text-xl mb-3"
                  style={{ fontFamily: "Oswald" }}
                >
                  Teamwork
                </h4>

                <p className="text-gray-600 text-sm leading-7">
                  Students learn collaboration, discipline and leadership.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Founder;