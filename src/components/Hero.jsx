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
            <span className="block text-white text-4xl md:text-8xl">
              MUSICAL
            </span>

            <span className="block text-yellow-400 text-4xl md:text-8xl">
              THEATRE
            </span>

            <span className="block text-white text-4xl md:text-8xl">
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
            className="mt-6 text-yellow-400 text-md md:text-3xl uppercase font-bold"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Act. Sing. Dance. Shine On Stage.
          </h3>

          {/* Description */}

{/* <div className="mt-8 max-w-150">

  <h2
    className="text-white text-3xl md:text-6xl font-black uppercase leading-none"
    style={{ fontFamily: "Bebas Neue, sans-serif" }}
  >
    Confidence
    <span className="block text-yellow-400">
      Begins On Stage
    </span>
  </h2>

  {/* Shiny Line */}
  {/* <div className="mt-5 h-[3px] w-[420px] rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-transparent shadow-[0_0_18px_#FFD700]" />

  <p
    className="mt-7 text-lg text-gray-200 leading-8 max-w-[520px]"
    style={{ fontFamily: "Poppins" }}
  >
    Through acting, singing and dance, children discover
    their voice while performing in spectacular musicals.
  </p>

</div> */} 

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <button
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl transition"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Join Now →
            </button>



          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;