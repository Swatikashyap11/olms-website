function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/p/AF1QipPtE9vq1ZOlrMuSsFEfmGnZiUmDGiKhpzUpgNLw=s680-w680-h510-rw')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-14">

          <div className="max-w-xl">

            {/* Heading */}
            <h1
              className="uppercase leading-[0.88] font-black"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              <span className="block text-white text-[55px] md:text-[88px]">
                MUSICAL
              </span>

              <span className="block text-yellow-400 text-[55px] md:text-[88px]">
                THEATRE
              </span>

              <span className="block text-white text-[55px] md:text-[88px]">
                CLASSES
              </span>

              <span
                className="block text-white normal-case text-[34px] md:text-[52px] font-semibold mt-1"
                style={{
                  fontFamily: "'Comic Sans MS', cursive",
                }}
              >
                for Kids
              </span>
            </h1>

            {/* Tagline */}
            <h2
              className="mt-5 text-yellow-400 text-xl md:text-3xl uppercase font-bold tracking-wide"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Act. Sing. Dance. Shine On Stage.
            </h2>

            {/* Description */}
            <div className="mt-5 max-w-md rounded-xl border border-pink-500 bg-black/45 backdrop-blur-sm p-4">

              <h3 className="text-yellow-300 text-2xl font-bold">
                Confidence begins on stage.
              </h3>

              <p className="text-gray-200 text-base mt-2 leading-7">
                Through acting, singing and dance, children discover
                their voice while performing in spectacular musicals.
              </p>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-6">

              <button
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3 rounded-xl font-bold transition"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                JOIN CLASSES →
              </button>

              <button
                className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-xl font-bold transition"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                WATCH PERFORMANCES →
              </button>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-4 gap-2 mt-7 rounded-xl border border-yellow-400 bg-black/55 p-3">

              <div className="text-center">
                <h3 className="text-yellow-400 text-2xl font-bold">
                  12+
                </h3>

                <p className="text-white text-[11px]">
                  Years
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-yellow-400 text-2xl font-bold">
                  5000+
                </h3>

                <p className="text-white text-[11px]">
                  Students
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-yellow-400 text-2xl font-bold">
                  100+
                </h3>

                <p className="text-white text-[11px]">
                  Musicals
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-yellow-400 text-2xl font-bold">
                  3
                </h3>

                <p className="text-white text-[11px]">
                  Studios
                </p>
              </div>

            </div>

            {/* Badge */}

            <div className="mt-5 inline-flex rounded-full border border-yellow-400 bg-black/60 px-5 py-2">

              <p className="text-white text-sm md:text-base">

                ⭐ <span className="text-yellow-400 font-semibold">
                  Ages 3–12
                </span>

                &nbsp; | &nbsp;

                Delhi • Gurgaon • Punjabi Bagh

              </p>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;