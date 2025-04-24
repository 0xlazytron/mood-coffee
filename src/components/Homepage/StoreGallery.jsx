import { motion } from "framer-motion";
import toreGallery1 from "../../assets/home/storeGallery1.jpeg";
import toreGallery2 from "../../assets/home/storeGallery2.jpeg";
import toreGallery3 from "../../assets/home/storeGallery3.jpeg";
import toreGallery4 from "../../assets/home/storeGallery4.png";
import Discount from "../../assets/home/Discount.png";
import mood from "../../assets/home/mood.png";

export default function StoreGallery() {
  return (
    <section className="relative bg-white py-[2rem] ">
      {/* Decorative coffee beans */}

      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-[#7D6251]">STORE GALLERY</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#7D6251]/80">
            Step into our world through vibrant snapshots of our cozy interiors
            and inviting atmosphere. Experience the charm of our shop.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Left Column */}
            <div className="grid gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-[24px]"
              >
                <img
                  src={toreGallery1}
                  alt="Coffee cup with beans"
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-[24px]"
                >
                  <img
                    src={toreGallery2}
                    alt="Steaming coffee"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-[24px]"
                >
                  <img
                    src={toreGallery3}
                    alt="Coffee cup on table"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
            {/* Right Column */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden relative rounded-[24px]"
            >
              <img
                src={toreGallery4 || "/placeholder.svg"}
                alt="Coffee bag"
                className="h-full w-full object-cover"
              />
              <img
                src={mood || "/placeholder.svg"}
                alt="Mood"
                className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 w-[200px]"
              />
            </motion.div>
          </div>

          {/* Special Offer Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mt-8 overflow-hidden CofeeTime rounded-lg md:min-h-[550px] p-[2rem] flex justify-center items-center   text-white"
          >
            <div className="relative z-10 flex flex-col gap-[2rem] text-center mt-[3rem]">
              <p className=" md:text-[48px] text-xl italic text-white/80">
                Today's Special
              </p>
              <h3 className="mt-2 md:text-[128px] sm:text-6xl text-3xl font-bold">
                Coffee Time
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 rounded-full border border-[#7D6356]   backdrop-blur-[30px] w-[200px] h-[50px]   transition-colors hover:bg-white/20 text-[#a98d7e] hover:text-white mx-auto"
              >
                Order Now
              </motion.button>
            </div>
            {/* Discount Badge */}
            <div className="absolute md:right-12 right-4 md:top-6 top-2 flex md:w-[250px] md:h-[250px] w-[80px] h-[80px]  items-center justify-center rounded-full  text-center">
              <img src={Discount} alt="discount img" />
            </div>
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{
                backgroundImage:
                  "url('/placeholder.svg?height=300&width=1200')",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom coffee beans decoration */}
     
    </section>
  );
}
