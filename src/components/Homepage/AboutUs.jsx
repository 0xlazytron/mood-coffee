import { motion } from "framer-motion";
import about from "../../assets/home/about.png";
import heart from "../../assets/home/heart.png";
import heartRight from "../../assets/home/heartRight.svg"


export default function AboutUs() {
  return (
    <section className="relative bg-white py-16 min-h-[90vh] flex justify-center items-center flex-col">
      {/* Coffee bean heart decoration */}
      <motion.img
        src={heart}
        alt="Coffee beans"
        className="absolute top-0 right-0 md:w-[250px] md:h-auto h-32 w-auto transform rotate-90 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
         <motion.img
        src={heartRight}
        alt="Coffee beans"
        className="absolute bottom-0 left-0 md:w-[250px] md:h-auto h-32 w-auto transform rotate-90 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />



      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden  rounded-bl-[80px] shadow-xl drop-shadow-[10px_0px_20px_[#E8DCD0]">
              <img
                src={about}
                alt="Our baristas"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-[#7D6251]">About US</h2>
            <div className="mt-6 space-y-4 text-[#7D6251]/80">
              <p>We currently have locations in:</p>
              <p>Arizona, California, Florida, Georgia, North Carolina New York, Oregon, Texas, and Washington</p>
              <p>
                If you hold an active real estate license in any of these states, you can simply transfer your license
                to Portland! If you are licensed in a state not currently listed and are interested in joining Portal,
                let us know.
              </p>
              <p>We are adding more states and may be able to help.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 rounded-full bg-[#7D6356] px-8 py-3 text-white transition-colors hover:bg-[#8B6E5C]"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}