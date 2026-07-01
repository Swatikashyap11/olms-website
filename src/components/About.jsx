function About() {
  return (
    <section
      id="about"
      className="py-24 bg-linear-to-b from-white via-[#fffdf8] to-[#fff8e6]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}

          <div className="relative group">

            <div className="absolute -inset-3 bg-yellow-200 rounded-[35px] blur-2xl opacity-30 group-hover:opacity-40 transition"></div>

            <img
              src="image13.png"
              alt="About Us"
              className="relative w-full h-[550px] object-cover rounded-[30px] shadow-2xl"
            />

          </div>

          {/* RIGHT CONTENT */}

          <div>

            <span
              className="uppercase tracking-[5px] text-yellow-600 font-semibold"
              style={{ fontFamily: "Oswald" }}
            >
              About Us
            </span>

            <div className="w-16 h-[3px] bg-yellow-500 rounded-full mt-4 mb-8"></div>


            <div
              className="space-y-7 text-gray-700 leading-9 text-lg"
              style={{ fontFamily: "Poppins" }}
            >
              <p>
                Oompa Loompa Musicals was created with one simple belief —
                every child deserves a chance to experience the magic of
                theatre, regardless of their confidence or previous experience.
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
                finding the best performer—it's about helping every child grow.
              </p>

              <p>
                At Oompa Loompa Musicals, we celebrate imagination,
                self-expression and joyful learning, creating unforgettable
                experiences for children and families alike.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;