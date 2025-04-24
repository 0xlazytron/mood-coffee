import { motion } from "framer-motion";
import heroImg from "../../assets/home/hero.png";
import heroBotomImg from "../../assets/home/heroBotomImg.png";
import vector from "../../assets/home/Vector.png";

export default function CoffeeHero() {
  return (
    <div className="relative min-h-screen cofeeHero w-full lg:mt-0 mt-10  overflow-hidden">
      {/* Main content container */}
      <div className="container mx-auto px-4 pt-20 lg:pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6">
            <motion.h1
              className="text-[#7D6356] text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              A Coffee Ritual for Every Mood
            </motion.h1>

            <motion.p
              className="text-[#475467] text-lg lg:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Because life is too short for bland coffee. Our brews are an
              invitation to taste, to feel, to savor.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button className="bg-[#8B7355] hover:bg-[#6F5B44] text-white  px-8 h-[64px] rounded-full text-lg">
                Contact Us
              </button>
              <button className="border-[#8B7355] border text-[#8B7355] hover:bg-[#8B7355] hover:text-white px-8 h-[64px] rounded-full text-lg">
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Right column - Coffee cup image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <img
              src={heroImg}
              alt="Coffee splash with cup"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Animated coffee beans */}
      <div className=" z-10 absolute bottom-0 left-0 w-full">
        <img src={heroBotomImg} alt="hero bottom img" />
      </div>

      {/* Curved divider */}
      <div className="absolute right-0 top-0 w-1/3 h-full">
        <div
          className="absolute inset-0 bg-white"
          style={{
            clipPath:
              'path("M 0 0 C 50 0 100 0 100 0 L 100 100 C 50 100 0 100 0 100 Z")',
          }}
        />
      </div>
      <div className=" absolute lg:block hidden right-0 top-0 lg:w-[950px] z-0 ">
        <img src={vector} alt="vector" />
      </div>
    </div>
  );
}
