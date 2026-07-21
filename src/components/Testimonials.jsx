function Testimonials() {

  const videos = [

    {
      video: "/test 1.mp4",
      name: "Reyansh's Parent",
      role: "Parent"
    },

    {
      video: "/test 2.mp4",
      name: "xyz",
      role: "Parent"
    },

    {
      video: "/test 3.mp4",
      name: "xyz",
      role: "Parent"
    }

  ];

  return (

    <section
      id="testimonial"
      className="bg-white px-6 md:px-16 py-20"
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="text-center mb-14">

          <p
            className="text-[#1565C0] uppercase tracking-[6px] mb-3 font-bold"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Testimonials
          </p>

          <h1
            className="text-2xl md:text-4xl uppercase text-black"
            style={{ fontFamily: "Luckiest Guy, cursive" }}
          >
            Every Smile, Every Performance,
            <br />
            Every Journey Tells A Story.
          </h1>

          <div className="w-24 h-1 bg-[#FFD600] mx-auto mt-5 rounded-full"></div>

        </div>

        {/* VIDEO GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {

            videos.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden border-4 border-[#1565C0] shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
              >

                {/* VIDEO */}

                <video
                  src={item.video}
                  controls
                  className="w-full h-[500px] object-cover"
                />

                {/* CONTENT */}

                <div className="p-5">

                  <h2
                    className="text-2xl text-black uppercase"
                    style={{ fontFamily: "Oswald, sans-serif" }}
                  >
                    {item.name}
                  </h2>

                  <p
                    className="text-[#1565C0] mt-1"
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

  );

}

export default Testimonials;