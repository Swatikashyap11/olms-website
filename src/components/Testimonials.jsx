function Testimonials() {

  const videos = [

    {
      video: "/v1.MOV",
      name: "xyz",
      role: "Parent"
    },

    {
      video: "/test2.mp4",
      name: "xyz",
      role: "Student"
    },

    {
      video: "/test3.mp4",
      name: "xyz",
      role: "Parent"
    }

  ]

  return (

    <section
      id="testimonial"
      className="bg-linear-to-b from-[#fffdf5] via-[#fff7d6] to-[#ffe680] px-6 md:px-16 py-20"
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="text-center mb-14">

          <p
            className="text-yellow-700 uppercase tracking-[6px] mb-3 font-bold"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Testimonials
          </p>

          <h1
            className="text-4xl md:text-7xl uppercase font-black text-black"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Where Confidence Takes The Stage
          </h1>

        </div>



        {/* VIDEO GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {

            videos.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-500"
              >

                {/* VIDEO */}

                <video
                  src={item.video}
                  controls
                  className="w-full h-125 object-cover"
                />



                {/* CONTENT */}

                <div className="p-5">

                  <h2
                    className="text-2xl uppercase text-black"
                    style={{ fontFamily: "Oswald, sans-serif" }}
                  >
                    {item.name}
                  </h2>

                  <p
                    className="text-yellow-700 mt-1"
                    style={{ fontFamily: "Oswald, sans-serif" }}
                  >
                    {item.role}
                  </p>

                </div>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  )

}

export default Testimonials