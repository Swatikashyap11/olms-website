function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#F7FBFF]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}

          <div className="relative group">

            <div className="absolute -inset-3 bg-[#FFD600]/30 rounded-[35px] blur-2xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

            <img
              src="image13.png"
              alt="About Us"
              className="relative w-full h-[550px] object-cover rounded-[30px] shadow-2xl border-4 border-white"
            />

          </div>

          {/* RIGHT CONTENT */}

          <div>

            <span
              className="uppercase tracking-[5px] text-[#FFD600] font-semibold"
              style={{ fontFamily: "Oswald" }}
            >
              About Us
            </span>

            <div className="w-20 h-1 bg-[#FFD600] rounded-full mt-4 mb-8"></div>

            <h2
              className="text-5xl text-[#0D47A1] mb-8 leading-tight"
              style={{ fontFamily: "Luckiest Guy, cursive" }}
            >
              Where Every Child
              <br />
              Becomes the Star.
            </h2>

            <div
              className="space-y-7 text-gray-700 leading-9 text-lg"
              style={{ fontFamily: "Poppins" }}
            >
              <p>
                Oompa Loompa Musicals was created with one simple belief —
                every child deserves a chance to experience the magic of
                theatre, regardless of their confidence or previous
                experience.
              </p>

              <p>
                Our classes provide a warm and encouraging environment where
                children discover acting, singing, movement, creativity and
                teamwork while building confidence that stays with them far
                beyond the stage.
              </p>

              <p>
                Every production is thoughtfully designed to ensure that each
                child gets a meaningful role suited to their comfort,
                personality and strengths. We believe theatre is not about
                finding the best performer—it's about helping every child
                grow.
              </p>

              <p>
                At Oompa Loompa Musicals, we celebrate imagination,
                self-expression and joyful learning, creating unforgettable
                experiences for children and families alike.
              </p>

            </div>

            {/* BUTTON */}

            <button
              className="mt-10 bg-[#1565C0] text-white px-8 py-3 rounded-full hover:bg-[#FFD600] hover:text-black transition-all duration-300 shadow-lg"
              style={{ fontFamily: "Oswald" }}
            >
              Explore More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;