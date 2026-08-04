function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/hero image.webp')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Left Gradient
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div> */}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="max-w-[700px] mx-auto text-center">

            {/* Heading */}
            <h1
              className="uppercase leading-[0.9] font-black mt-10"
              style={{ fontFamily: "revert" }}
            >
              <span className="block text-white text-5xl md:text-5xl">
                MUSICAL
              </span>

              <span className="block text-yellow-400 text-5xl md:text-8xl">
                THEATRE
              </span>

              <span className="block text-white text-5xl md:text-8xl">
                CLASSES
              </span>

              <span
                className="block text-white normal-case text-3xl md:text-5xl mt-3"
                style={{ fontFamily: "Chewy, cursive" }}
              >
                for <span className="text-[#1565C0]">Kids</span>
              </span>
            </h1>

            {/* Tagline */}
            <h3
              className="mt-6 text-white text-lg md:text-2xl font-bold tracking-wide"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Act. Sing. Dance.
              <span className="text-yellow-400"> Shine On Stage.</span>
            </h3>

            {/* Button */}
            <div className="mt-8 flex justify-center">
              <a
                href="https://forms.gle/HKneKFRaTaaX8zja6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl transition duration-300 hover:scale-105"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  Join Now →
                </button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;