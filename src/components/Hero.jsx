function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url(https://lh3.googleusercontent.com/gps-cs-s/APNQkAHM_NycVEybvYBqe8cMi_NDHam2d4aTDBrYDt8vr-5B3MHwd_95Lq62jq9K0dTtA6yzEGxgJYteVGAiqqKpBWuTPZRMSzlG7VqD7LuADSvQRaBMaYZofrQTY3X8n7jOAuskbizr=s680-w680-h510-rw)",
        backgroundPosition: "center center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-6 md:px-16">
        <div className="max-w-[520px]">

          {/* Heading */}
          <h1
            className="uppercase leading-[0.92] font-black"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            <span className="block text-white text-5xl md:text-8xl">
              MUSICAL
            </span>

            <span className="block text-yellow-400 text-5xl md:text-8xl">
              THEATRE
            </span>

            <span className="block text-white text-5xl md:text-8xl">
              CLASSES
            </span>

            <span
              className="block text-white normal-case text-3xl md:text-5xl mt-2"
              style={{ fontFamily: "cursive" }}
            >
              for Kids
            </span>
          </h1>

          {/* Tagline */}
          <h3
            className="mt-6 text-yellow-400 text-lg md:text-2xl uppercase font-bold tracking-wide"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Act. Sing. Dance. Shine On Stage.
          </h3>

          {/* Button */}
          <div className="mt-10">
            <a
              href="https://forms.gle/HKneKFRaTaaX8zja6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl transition duration-300"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Join Now →
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;