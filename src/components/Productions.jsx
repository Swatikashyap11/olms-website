function Productions() {

  const productions = [

    {
      image:
        "https://playbillstore.com/cdn/shop/files/The_20Lion_20King_20Broadway_20Poster.png?v=1717434520&width=1024",
      title: "The Lion King",
      age: "3-6 yrs"
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyOiqaW335rFYC-QwNGzYrvy5KszKEZdexw&s",
      title: "Harry Potter",
      age: "6-12 yrs"
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxBSV1_Ow5woKSB2n4TCA-hcmjNI9lv-FbXg&s",
      title: "Madagascar",
      age: <span className="text-red-700">Coming Soon</span>
    }

  ]

  return (

    <section
      id="productions"
      className="bg-linear-to-b from-white via-[#fffaf0] to-[#ffe680] px-6 md:px-16 py-12"
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="text-center mb-8">

          <p
            className="text-yellow-700 uppercase tracking-[5px] text-sm md:text-base font-bold mb-2"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Our Productions
          </p>

          <h1
            className="text-4xl md:text-6xl uppercase font-black text-black leading-none"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Learn Through Musicals
          </h1>

        </div>



        {/* CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {

            productions.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-[28px] overflow-hidden shadow-xl border border-yellow-200 hover:-translate-y-2 transition duration-500"
              >

                {/* IMAGE */}

              <div className="h-62.5 bg-[#f8f8f8] flex items-center justify-center overflow-hidden">
                

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-auto object-contain hover:scale-105 transition duration-700"
                />

              </div>



                {/* CONTENT */}

                <div className="p-5 text-center">

                  <h2
                    className="text-2xl md:text-3xl uppercase text-black font-black"
                    style={{ fontFamily: "Oswald, sans-serif" }}
                  >
                    {item.title}
                  </h2>



                  <p
                    className="text-gray-700 mt-2 text-lg"
                    style={{ fontFamily: "Oswald, sans-serif" }}
                  >
                    {item.age}
                  </p>



                  <button
                    className="mt-5 bg-yellow-400 hover:bg-black hover:text-white text-black px-6 py-2 rounded-full uppercase text-sm transition duration-300"
                    style={{ fontFamily: "Oswald, sans-serif" }}
                  >
                    Explore
                  </button>

                </div>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  )

}

export default Productions