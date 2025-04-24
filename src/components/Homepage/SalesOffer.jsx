"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import salesOffer from "../../assets/home/salesOffer.png"
import salesOfferRight from "../../assets/home/salesOfferRight.png"
import coffee from "../../assets/home/coffee.jpeg"

const products = [
  {
    id: 1,
    name: "Macchiato",
    description: "Top Mexican Coffee 30% OFF",
    price: "$8.50",
    image: coffee,
  },
  {
    id: 2,
    name: "Macchiato",
    description: "Top Mexican Coffee 30% OFF",
    price: "$8.50",
    image: coffee,
  },
  {
    id: 3,
    name: "Macchiato",
    description: "Top Mexican Coffee 30% OFF",
    price: "$8.50",
    image: coffee,
  },
  {
    id: 4,
    name: "Macchiato",
    description: "Top Mexican Coffee 30% OFF",
    price: "$8.50",
    image: coffee,
  },
 
]

export default function SalesOffer() {
  const containerRef = useRef(null)

  return (
    <section className="relative bg-white py-16">
      {/* Left coffee splash */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute "
      >
        <img
          src={salesOffer}
          alt="Coffee splash"
          className=" md:w-[400px] w-[150px] -z-10  transform "
        />
      </motion.div>

      {/* Right coffee splash */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute right-0 md:w-[400px] w-[150px] bottom-0"
      >
        <img
          src={salesOfferRight}
          alt="Coffee splash"
          className="  "
        />
      </motion.div>

      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-[#7D6356]">ENJOY THE NEW SALE OFFERS</h2>
          <p className="mt-4 text-[#707070] md:text-lg text-sm">
            Explore all flavors of coffee with us. There is always a new cup worth experiencing in a discount price
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="mt-12 grid grid-cols-1 z-10 relative  gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className=" w-[300px] h-[390px] mx-auto rounded-lg  bg-[#FCF3EA] border border-[#7D6356]  shadow-lg"
            >
              <div className=" overflow-hidden ">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-[300px] h-[220px] object-cover  hover:scale-105 transition-all ease-linear delay-150"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-[#7D6356]">{product.name}</h3>
                <p className="mt-1 text-sm text-[#232323]/80">{product.description}</p>
                <p className="mt-2 text-xl font-bold text-[#232323]">{product.price}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-10 rounded-full bg-[#7D6356] w-[150px] h-[50px]  text-sm text-white transition-colors hover:bg-[#7D6251]"
                >
                  Avail Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

