import React from 'react';
import { motion } from "framer-motion";


const CoffeeMenu = () => {
  return (
    <section>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center min-h-[30vh] flex flex-col justify-center items-center"
    >
      <h3 className="text-3xl font-bold text-[#7D6356]">Our Menu</h3>
      <p className="mx-auto mt-4 max-w-2xl text-[#707070]">
        Explore all flavors of coffee with us. There is always a new cup
        worth experiencing in a discount price
      </p>

      <div className=" flex justify-center gap-4 items-center mt-10 flex-wrap">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="  rounded-full bg-[#E8DCD0] border border-[#7D6356] md:w-[200px] w-[120px] h-[50px]  text-sm text-black transition-colors hover:bg-[#7D6251] hover:text-white"
        >
          Coffee Menu
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className=" rounded-full bg-[#E8DCD0] border border-[#7D6356] md:w-[200px] w-[120px] h-[50px]  text-sm text-black transition-colors hover:bg-[#7D6251] hover:text-white"
        >
          Food Menu
        </motion.button>
      </div>
    </motion.div>
  </section>
  )
}

export default CoffeeMenu