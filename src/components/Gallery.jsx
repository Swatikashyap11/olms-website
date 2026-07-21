function Gallery() {

  const images = [

    "/image6.jpeg",
    "/image7.jpeg",
    "/image8.jpeg",
    "/image9.jpeg",
    "/image10.jpeg",
    "/image11.jpeg"

  ];

  return (

    <section
      id="gallery"
      className="bg-white px-6 md:px-16 py-16"
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="text-center mb-12">

          <p
            className="text-[#1565C0] uppercase tracking-[5px] mb-3 font-bold"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Gallery
          </p>

          <h1
            className="text-4xl md:text-5xl uppercase text-black"
            style={{ fontFamily: "Luckiest Guy, cursive" }}
          >
            Moments On Stage
          </h1>

          <div className="w-24 h-1 bg-[#FFD600] mx-auto mt-5 rounded-full"></div>

        </div>

        {/* GALLERY GRID */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {

            images.map((image, index) => (

              <div
                key={index}
                className="group overflow-hidden relative rounded-3xl shadow-xl border-4 border-[#1565C0] bg-white hover:shadow-2xl transition duration-500"
              >

                {/* IMAGE */}

                <img
                  src={image}
                  alt="gallery"
                  className="w-full h-65 md:h-[350px] object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}

                <div className="absolute inset-0 bg-[#1565C0]/10 group-hover:bg-[#1565C0]/55 transition duration-500"></div>

                {/* TEXT */}

                <div className="absolute bottom-0 left-0 w-full p-5">

                  <h2
                    className="text-white text-2xl uppercase opacity-0 group-hover:opacity-100 transition duration-500"
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

  );

}

export default Gallery;