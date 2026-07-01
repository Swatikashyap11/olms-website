function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/p/AF1QipPtE9vq1ZOlrMuSsFEfmGnZiUmDGiKhpzUpgNLw=s680-w680-h510-rw')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-6 md:px-16">
        <div className="max-w-3xl">

          {/* Heading */}
          <h1
            className="uppercase leading-[0.9] font-black"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            <span className="block text-white text-6xl md:text-8xl">
              MUSICAL
            </span>

            <span className="block text-yellow-400 text-6xl md:text-8xl">
              THEATRE
            </span>

            <span className="block text-white text-6xl md:text-8xl">
              CLASSES
            </span>

            <span
              className="block text-white normal-case text-4xl md:text-6xl mt-2"
              style={{ fontFamily: "cursive" }}
            >
              for Kids
            </span>
          </h1>

          {/* Tagline */}
          <h3
            className="mt-6 text-yellow-400 text-xl md:text-3xl uppercase font-bold"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Act. Sing. Dance. Shine On Stage.
          </h3>

          {/* Description */}
          <div className="mt-5 bg-black/45 border border-pink-500 rounded-xl p-5 max-w-xl backdrop-blur-sm">
            <h4 className="text-yellow-300 text-2xl font-bold">
              Confidence begins on stage.
            </h4>

            <p className="text-gray-200 mt-2 text-lg">
              Through acting, singing and dance, children discover their voice
              while performing in spectacular musicals.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <button
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl transition"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              JOIN CLASSES →
            </button>

            <button
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-xl transition font-bold"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              WATCH PERFORMANCES →
            </button>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 bg-black/60 rounded-xl border border-yellow-400 p-5">

            <div className="text-center">
              <h2 className="text-yellow-400 text-3xl font-bold">12+</h2>
              <p className="text-white text-sm">
                Years of Experience
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-yellow-400 text-3xl font-bold">
                5000+
              </h2>
              <p className="text-white text-sm">
                Children Trained
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-yellow-400 text-3xl font-bold">
                100+
              </h2>
              <p className="text-white text-sm">
                Musicals Produced
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-yellow-400 text-3xl font-bold">
                3
              </h2>
              <p className="text-white text-sm">
                Studios in Delhi NCR
              </p>
            </div>

          </div>

          {/* Bottom Badge */}
          <div className="inline-block mt-6 bg-black/70 border border-yellow-400 rounded-full px-6 py-3">

            <p className="text-white text-sm md:text-base">
              ⭐ For children aged <span className="text-yellow-400 font-bold">3–12 Years</span>
              &nbsp; | &nbsp;
              Delhi • Gurgaon • Punjabi Bagh
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;