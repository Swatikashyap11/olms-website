function Gallery() {

  const images = [

    "/gallery1.jpg",
    "/gallery2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
    "/photo2.jpg"

  ]

  return (

    <section
      id="gallery"
      className="bg-linear-to-b from-white via-[#fff9e6] to-[#ffe680] px-6 md:px-16 py-16"
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="text-center mb-12">

          <p
            className="text-yellow-600 uppercase tracking-[5px] mb-3 font-bold"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Gallery
          </p>

          <h1
            className="text-4xl md:text-6xl uppercase font-black text-black"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Moments On Stage
          </h1>

        </div>



        {/* GALLERY GRID */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {

            images.map((image, index) => (

              <div
                key={index}
                className="group overflow-hidden relative rounded-2xl shadow-2xl border border-yellow-300 bg-white"
              >

                {/* IMAGE */}

                <img
                  src={image}
                  alt="gallery"
                  className="w-full h-65 md:h-87.5 object-cover group-hover:scale-110 transition duration-700"
                />



                {/* OVERLAY */}

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition duration-500"></div>



                {/* TEXT */}

                <div className="absolute bottom-0 left-0 w-full p-5">

                  <h2
                    className="text-white text-2xl uppercase font-bold opacity-0 group-hover:opacity-100 transition duration-500"
                    style={{ fontFamily: "Oswald, sans-serif" }}
                  >
                    Oompa Loompa Musicals
                  </h2>

                </div>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  )

}

export default Gallery