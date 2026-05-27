function Hero() {

  return (

    <section
      id="home"
      className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('https://lh3.googleusercontent.com/p/AF1QipPtE9vq1ZOlrMuSsFEfmGnZiUmDGiKhpzUpgNLw=s680-w680-h510-rw')"
      }}
    >

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/45"></div>



      {/* CONTENT */}

      <div className="relative z-10 h-full flex items-center px-6 md:px-16">

        <div className="max-w-4xl pt-8 md:pt-0">

          {/* MAIN HEADING */}

          <h1
            className="text-white text-[58px] sm:text-[80px] md:text-[120px] font-black uppercase leading-[0.88]"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >

            ACT
            <span className="text-yellow-300">.</span>

            <br />

            SING
            <span className="text-yellow-300">.</span>

            <br />

            DANCE
            <span className="text-yellow-300">.</span>

          </h1>



          {/* SUBTEXT */}

          <p
            className="text-yellow-300 text-md sm:text-xl md:text-3xl mt-3 md:mt-4 max-w-3xl leading-tight font-bold"
            style={{
              fontFamily: "Oswald, sans-serif",
              textShadow: "0px 4px 10px rgba(0,0,0,0.7)"
            }}
          >

            Explore talent through Theatre,
            Musicals and unforgettable performances.

          </p>



          {/* BUTTONS */}

          <div className="flex flex-row gap-4 mt-6 flex-wrap">

            {/* JOIN BUTTON */}

            <button
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-7 md:px-9 py-3 text-sm md:text-lg uppercase font-semibold transition duration-300 rounded-md shadow-lg"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Join Classes
            </button>



            {/* EXPLORE BUTTON */}

            <button
              className="border-2 border-white text-white hover:bg-white hover:text-black px-7 md:px-9 py-3 text-sm md:text-lg uppercase font-semibold transition duration-300 rounded-md"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Explore More
            </button>

          </div>

        </div>

      </div>

    </section>

  )

}

export default Hero