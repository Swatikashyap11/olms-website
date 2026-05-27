function About() {

  return (

    <section
      id="about"
      className="bg-linear-to-b from-white via-[#fff9e6] to-[#ffe680] text-black px-6 md:px-16 py-16"
    >

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}

        <div className="overflow-hidden rounded-2xl shadow-2xl">

          <img
            src="/photo2.jpg"
            alt="about"
            className="w-full h-87.5 md:h-137.5 object-cover hover:scale-105 transition duration-500"
          />

        </div>



        {/* RIGHT CONTENT */}

        <div>

          {/* SMALL HEADING */}

          <p
            className="text-yellow-600 uppercase tracking-[6px] text-sm md:text-base mb-4 font-bold"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            About Us
          </p>



          {/* MAIN HEADING */}

          <h1
            className="text-4xl md:text-6xl font-black uppercase leading-tight text-black"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >

            Where Creativity
            Meets Performance

          </h1>



          {/* DESCRIPTION */}

          <p
            className="text-gray-800 text-lg md:text-xl leading-relaxed mt-7"
            style={{ fontFamily: "oswald, sans-serif" }}
          >

            Oompa Loompa Musicals is a creative
            performing arts academy where kids
            explore acting, singing, dancing and
            live stage performances in a fun,
            expressive and confidence-building
            environment.

          </p>



          {/* FEATURES */}

          <div className="grid grid-cols-2 gap-5 mt-9">

            {/* BOX 1 */}

            <div className="bg-white border border-yellow-500 rounded-xl p-5 shadow-lg hover:scale-105 transition duration-300">

              <h2
                className="text-yellow-600 text-3xl font-black"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                100+
              </h2>

              <p
                className="mt-2 text-gray-700"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Performances
              </p>

            </div>



            {/* BOX 2 */}

            <div className="bg-white border border-yellow-500 rounded-xl p-5 shadow-lg hover:scale-105 transition duration-300">

              <h2
                className="text-yellow-600 text-3xl font-black"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                500+
              </h2>

              <p
                className="mt-2 text-gray-700"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Students
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}

export default About