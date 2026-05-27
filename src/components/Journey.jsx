function Journey() {

  const timeline = [

    {
      year: "2016",
      title: "The Beginning",
      desc: "Oompa Loompa Musicals started its creative journey."
    },

    {
      year: "2017",
      title: "First Stage Show",
      desc: "Kids performed their first live theatre production."
    },

    {
      year: "2018",
      title: "Workshops Started",
      desc: "Acting, singing and dance workshops launched."
    },

    {
      year: "2019",
      title: "100+ Students",
      desc: "The academy grew with talented young performers."
    },

    {
      year: "2020",
      title: "Online Performances",
      desc: "Creative online theatre activities during lockdown."
    },

    {
      year: "2021",
      title: "Big Productions",
      desc: "Musical productions and stage events expanded."
    },

    {
      year: "2022",
      title: "Creative Growth",
      desc: "Students explored advanced theatre performances."
    },

    {
      year: "2023",
      title: "Lion King Musical",
      desc: "One of our most loved kids musical productions."
    },

    {
      year: "2024",
      title: "Harry Potter Musical",
      desc: "A magical theatre experience for young performers."
    },

    {
      year: "2025",
      title: "Growing Community",
      desc: "More students, workshops and live performances."
    },

    {
      year: "2026",
      title: "Madagascar Coming Soon",
      desc: "New exciting musical production launching soon."
    }

  ]

  return (

    <section
      id="journey"
      className="bg-linear-to-b from-white via-[#fff9e6] to-[#ffe680] px-6 md:px-16 py-12 overflow-hidden"
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="text-center mb-10">

          <p
            className="text-yellow-700 uppercase tracking-[5px] text-sm md:text-base font-bold mb-2"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Our Journey
          </p>

          <h1
            className="text-3xl md:text-5xl uppercase font-black text-black leading-none"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            10 Years Of
            <br />
            Creativity
          </h1>

        </div>



        {/* TIMELINE */}

        <div className="relative">

          {/* CENTER LINE */}

          <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-yellow-400 -translate-x-1/2"></div>



          <div className="flex flex-col gap-6">

            {

              timeline.map((item, index) => (

                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >

                  {/* CARD */}

                  <div className="w-full md:w-[42%] bg-white rounded-2xl p-5 shadow-lg border border-yellow-200 hover:-translate-y-1 transition duration-300">

                    <h2
                      className="text-4xl text-yellow-500 font-black"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      {item.year}
                    </h2>



                    <h3
                      className="text-xl md:text-2xl uppercase text-black mt-2"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      {item.title}
                    </h3>



                    <p
                      className="text-gray-700 mt-2 leading-6 text-sm md:text-base"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {item.desc}
                    </p>

                  </div>



                  {/* DOT */}

                  <div className="hidden md:block absolute left-1/2 w-5 h-5 bg-yellow-400 rounded-full border-4 border-white shadow-md -translate-x-1/2"></div>

                </div>

              ))

            }

          </div>

        </div>

      </div>

    </section>

  )

}

export default Journey






// function Journey() {

//   const timeline = [

//     {
//       year: "2016",
//       title: "The Beginning"
//     },

//     {
//       year: "2017",
//       title: "First Stage Show"
//     },

//     {
//       year: "2018",
//       title: "Workshops Started"
//     },

//     {
//       year: "2019",
//       title: "100+ Students"
//     },

//     {
//       year: "2020",
//       title: "Online Performances"
//     },

//     {
//       year: "2021",
//       title: "Big Productions"
//     },

//     {
//       year: "2022",
//       title: "Creative Growth"
//     },

//     {
//       year: "2023",
//       title: "Lion King Musical"
//     },

//     {
//       year: "2024",
//       title: "Harry Potter Musical"
//     },

//     {
//       year: "2025",
//       title: "Growing Community"
//     },

//     {
//       year: "2026",
//       title: "Madagascar Soon"
//     }

//   ]

//   return (

//     <section
//       id="journey"
//       className="bg-gradient-to-b from-white via-[#fff9e6] to-[#ffe680] px-5 md:px-12 py-8 overflow-hidden"
//     >

//       <div className="max-w-6xl mx-auto">

//         {/* HEADING */}

//         <div className="text-center mb-7">

//           <p
//             className="text-yellow-700 uppercase tracking-[4px] text-xs md:text-sm font-bold mb-1"
//             style={{ fontFamily: "Oswald, sans-serif" }}
//           >
//             Our Journey
//           </p>

//           <h1
//             className="text-3xl md:text-5xl uppercase font-black text-black leading-none"
//             style={{ fontFamily: "Oswald, sans-serif" }}
//           >
//             10 Years Of Creativity
//           </h1>

//         </div>



//         {/* TIMELINE */}

//         <div className="relative">

//           {/* CENTER LINE */}

//           <div className="hidden md:block absolute left-1/2 top-0 w-[3px] h-full bg-yellow-400 -translate-x-1/2"></div>



//           <div className="flex flex-col gap-4">

//             {

//               timeline.map((item, index) => (

//                 <div
//                   key={index}
//                   className={`relative flex ${
//                     index % 2 === 0
//                       ? "md:justify-start"
//                       : "md:justify-end"
//                   }`}
//                 >

//                   {/* CARD */}

//                   <div className="w-full md:w-[40%] bg-white rounded-xl px-4 py-3 shadow-md border border-yellow-200 hover:-translate-y-1 transition duration-300">

//                     <div className="flex items-center gap-3">

//                       <h2
//                         className="text-3xl text-yellow-500 font-black"
//                         style={{ fontFamily: "Oswald, sans-serif" }}
//                       >
//                         {item.year}
//                       </h2>



//                       <h3
//                         className="text-lg md:text-xl uppercase text-black"
//                         style={{ fontFamily: "Oswald, sans-serif" }}
//                       >
//                         {item.title}
//                       </h3>

//                     </div>

//                   </div>



//                   {/* DOT */}

//                   <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white shadow-md -translate-x-1/2 -translate-y-1/2"></div>

//                 </div>

//               ))

//             }

//           </div>

//         </div>

//       </div>

//     </section>

//   )

// }

// export default Journey