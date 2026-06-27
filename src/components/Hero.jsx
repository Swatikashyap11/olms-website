import { motion } from "framer-motion";

import {
  FaUsers,
  FaPlay,
  FaMapMarkerAlt,
  FaStar,
  FaTheaterMasks,
} from "react-icons/fa";

function Hero() {

  return (

    <section
      id="home"
      className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1600&auto=format&fit=crop')"
      }}
    >

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/45"></div>



      {/* CONTENT */}

      <div className="relative z-10 h-full flex items-center px-6 md:px-16">

        <div className="max-w-4xl pt-8 md:pt-0">

          {/* MAIN HEADING */}

         <motion.h1
initial={{opacity:0,y:60}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="text-white font-black uppercase leading-[0.9]"
style={{
fontFamily:"Oswald",
fontSize:"clamp(60px,9vw,130px)"
}}
>

<span className="block">
MUSICAL
</span>

<span className="block text-yellow-400">
THEATRE
</span>

<span className="block">
CLASSES
</span>

<span
className="block normal-case italic text-white mt-1"
style={{
fontFamily:"Dancing Script",
fontSize:"clamp(42px,5vw,70px)"
}}
>

for Kids

</span>

</motion.h1>
 <motion.h2
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:.3}}
className="text-yellow-300 uppercase mt-6 tracking-wide text-xl md:text-3xl font-bold"
style={{fontFamily:"Oswald"}}
>

ACT. SING. DANCE. SHINE ON STAGE.

</motion.h2>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:.5}}
className="text-white/90 mt-4 text-lg md:text-2xl max-w-xl leading-relaxed"
>

<b className="text-yellow-300">

Confidence begins on stage.

</b>

<br/>

Through acting, singing and dance,
children discover their voice while
performing in spectacular musicals.

</motion.p>



          {/* BUTTONS */}

          <div className="flex flex-row gap-4 mt-6 flex-wrap">

            {/* JOIN BUTTON */}

            <button
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-7 md:px-9 py-3 text-sm md:text-lg uppercase font-semibold transition duration-300 rounded-md shadow-lg"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Join Classes
            </button>



            {/* EXPLORE BUTTON */}

            <button
              className="border-2 border-white text-white hover:bg-white hover:text-black px-7 md:px-9 py-3 text-sm md:text-lg uppercase font-semibold transition duration-300 rounded-md"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Explore More
            </button>

          </div>

        </div>

      </div>

    </section>

  )

}

export default Hero