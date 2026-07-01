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
            <span className="block text-white text-xl md:text-8xl">
              MUSICAL
            </span>

            <span className="block text-yellow-400 text-5xl md:text-8xl">
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

<div className="mt-8 max-w-[600px]">

  <h2
    className="text-[42px] md:text-[60px] leading-[0.9] uppercase"
    style={{ fontFamily: "Bangers, cursive" }}
  >
    <span className="block text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.9)]">
      CONFIDENCE
    </span>

    <span className="block text-white">
      BEGINS ON STAGE.
    </span>
  </h2>

  {/* Yellow Shiny Line */}
  <div className="relative mt-5 w-[340px] md:w-[480px]">
    <div className="h-[4px] rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 shadow-[0_0_20px_#FFD700]"></div>

    <div className="absolute -left-1 -top-[6px] h-4 w-4 rounded-full bg-yellow-300 shadow-[0_0_25px_#FFD700]"></div>

    <div className="absolute left-1/2 -translate-x-1/2 -top-[3px] h-2 w-2 rounded-full bg-white shadow-[0_0_18px_white]"></div>
  </div>

  <p
    className="mt-7 text-[20px] leading-9 text-gray-200"
    style={{ fontFamily: "'Patrick Hand', cursive" }}
  >
    Through acting, singing and dance,
    <span className="text-yellow-400 font-bold">
      {" "}children discover their voice{" "}
    </span>
    while performing in
    <span className="text-yellow-400 font-bold">
      {" "}spectacular musicals.
    </span>
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
        </div>
      </div>
    </section>
  );
}

export default Hero;