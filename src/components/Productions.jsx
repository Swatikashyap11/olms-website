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
        "https://m.media-amazon.com/images/M/MV5BNzE1OTkwOTkwMV5BMl5BanBnXkFtZTgwNTcwMDk4NTE@._V1_.jpg",
      title: "Frozen",
      age: "3-6 yrs"
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxBSV1_Ow5woKSB2n4TCA-hcmjNI9lv-FbXg&s",
      title: "Madagascar",
      age: "3-6 yrs"
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-E6hdoF3CwLZlreEu6X5b1KpX_mpmtmBliDchjwN0w3gnKUD67edlSCk&s=10",
      title: "Matilda",
      age: "6-12 yrs"
    },

    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Wonka_2023_film_poster.jpg/250px-Wonka_2023_film_poster.jpg",
      title: "Wonka",
      age: "6-12 yrs"
    },

        {
      image:
        "https://m.media-amazon.com/images/M/MV5BYWU1YmQzMjEtMDNjOS00MGIyLWExY2ItZDAzNmU5NWViMGZmXkEyXkFqcGc@._V1_.jpg",
      title: "Bluey",
      age: "3-6 yrs"
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNgOSN_dOQRMG4ul0jmNjtCDQXTHgNJur4AQTRthWXwXFc557I3tf9fF4-&s=10",
      title: "Inside Out 2",
      age: "3-6 yrs"
    },

        {
      image:
        "https://m.media-amazon.com/images/I/811QWEMy64L._AC_UF1000,1000_QL80_.jpg",
      title: "Grinch",
      age: "3-6 yrs"
    },    

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjMOE015As220HGxQY3Y7wygL6fEECohA2hdPSMsXaaJRxxTNys3ufYpR0&s=10",
      title: "Paw Patrol",
      age: "3-6 yrs"
    },

    {
      image:
        "https://m.media-amazon.com/images/I/81DN1723hUL._AC_UF1000,1000_QL80_.jpg",
      title: "Harry Potter & The Half-Blood Prince",
      age: "6-12 yrs"
    },

    {
      image:
        "https://m.media-amazon.com/images/M/MV5BYmZjZWQ0OTktODdlYy00ZjA1LWJlNzYtNmYwMDc4YzQzZmQwXkEyXkFqcGc@._V1_.jpg",
      title: "Peppa Pig",
      age: "3-6 yrs"
    },

    {
      image:
        "https://m.media-amazon.com/images/I/818umIdoruL._AC_UF1000,1000_QL80_.jpg",
      title: "Harry Potter & The Chamber of Secrets",
      age: "6-12 yrs"
    }

  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {productions.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-[28px] overflow-hidden shadow-xl border border-yellow-200 hover:-translate-y-2 hover:shadow-2xl transition duration-500"
            >

              {/* IMAGE */}

              <div className="h-64 bg-[#f8f8f8] flex items-center justify-center overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-auto object-contain hover:scale-105 transition duration-700"
                />

              </div>

              {/* CONTENT */}

              <div className="p-5 text-center">

                <h2
                  className="text-2xl uppercase text-black font-black"
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

          ))}

        </div>

      </div>

    </section>

  );

}

export default Productions;