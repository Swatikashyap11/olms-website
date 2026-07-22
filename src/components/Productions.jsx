function Productions() {
  const productions = [
    {
      image:
        "https://playbillstore.com/cdn/shop/files/The_20Lion_20King_20Broadway_20Poster.png?v=1717434520&width=1024",
      title: "The Lion King",
      age: "3-6 yrs",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BNzE1OTkwOTkwMV5BMl5BanBnXkFtZTgwNTcwMDk4NTE@._V1_.jpg",
      title: "Frozen",
      age: "3-6 yrs",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxBSV1_Ow5woKSB2n4TCA-hcmjNI9lv-FbXg&s",
      title: "Madagascar",
      age: "3-6 yrs",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-E6hdoF3CwLZlreEu6X5b1KpX_mpmtmBliDchjwN0w3gnKUD67edlSCk&s=10",
      title: "Matilda",
      age: "6-12 yrs",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Wonka_2023_film_poster.jpg/250px-Wonka_2023_film_poster.jpg",
      title: "Wonka",
      age: "6-12 yrs",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BYWU1YmQzMjEtMDNjOS00MGIyLWExY2ItZDAzNmU5NWViMGZmXkEyXkFqcGc@._V1_.jpg",
      title: "Bluey",
      age: "3-6 yrs",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNgOSN_dOQRMG4ul0jmNjtCDQXTHgNJur4AQTRthWXwXFc557I3tf9fF4-&s=10",
      title: "Inside Out 2",
      age: "3-6 yrs",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/811QWEMy64L._AC_UF1000,1000_QL80_.jpg",
      title: "Grinch",
      age: "3-6 yrs",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjMOE015As220HGxQY3Y7wygL6fEECohA2hdPSMsXaaJRxxTNys3ufYpR0&s=10",
      title: "Paw Patrol",
      age: "3-6 yrs",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/81DN1723hUL._AC_UF1000,1000_QL80_.jpg",
      title: "Harry Potter & The Half-Blood Prince",
      age: "6-12 yrs",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BYmZjZWQ0OTktODdlYy00ZjA1LWJlNzYtNmYwMDc4YzQzZmQwXkEyXkFqcGc@._V1_.jpg",
      title: "Peppa Pig",
      age: "3-6 yrs",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/818umIdoruL._AC_UF1000,1000_QL80_.jpg",
      title: "Harry Potter & The Chamber of Secrets",
      age: "6-12 yrs",
    },
  ];

  return (
    <section
      id="productions"
      className="bg-[#F8FBFF] px-6 md:px-16 py-20"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p
            className="text-[#FFD600] uppercase tracking-[5px] text-sm md:text-base font-bold mb-3"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            OUR PRODUCTIONS
          </p>

          <h1
            className="text-4xl md:text-6xl text-[#0D47A1] uppercase"
            style={{ fontFamily: "Luckiest Guy, cursive" }}
          >
            Learn Through Musicals
          </h1>

          <div className="w-28 h-1 bg-[#FFD600] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-blue-100 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-64 bg-[#EEF6FF] flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-auto object-contain hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5 text-center">
                <h2
                  className="text-2xl text-[#1565C0] uppercase"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  {item.title}
                </h2>

                <p
                  className="text-gray-600 mt-2 text-lg"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  {item.age}
                </p>


              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Productions;