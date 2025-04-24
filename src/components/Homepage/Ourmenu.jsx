import { motion } from "framer-motion";
import { useState } from "react";
import menuImg from "../../assets/home/menuImg.png";
import coffee from "../../assets/home/coffee.jpeg";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Macchiato",
    description: "Top Mexican Coffee",
    price: "$8.50",
    image: coffee,
  },
  {
    id: 2,
    name: "Macchiato",
    description: "Top Mexican Coffee",
    price: "$6.50",
    image: coffee,
  },
  {
    id: 3,
    name: "Macchiato",
    description: "Top Mexican Coffee",
    price: "$7.50",
    image: coffee,
  },
  {
    id: 4,
    name: "Macchiato",
    description: "Top Mexican Coffee",
    price: "$9.50",
    image: coffee,
  },
  {
    id: 5,
    name: "Macchiato",
    description: "Top Mexican Coffee",
    price: "$10.50",
    image: coffee,
  },
  {
    id: 6,
    name: "Macchiato",
    description: "Top Mexican Coffee",
    price: "$7.50",
    image: coffee,
  },
  {
    id: 7,
    name: "Macchiato",
    description: "Top Mexican Coffee",
    price: "$5.50",
    image: coffee,
  },
  {
    id: 8,
    name: "Macchiato",
    description: "Top Mexican Coffee",
    price: "$9.50",
    image: coffee,
  },
];

export default function Ourmenu() {
  return (
    <>
    
      <section className="relative bg-white py-16">
        {/* Left coffee beans decoration */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute left-0 top-0"
        >
          <img
            src={menuImg}
            alt="Coffee beans"
            className="md:h-[250px] md:w-[250px] w-[100px] h-[100px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute right-0 bottom-0"
        >
          <img
            src={menuImg}
            alt="Coffee beans"
            className="md:h-[250px] md:w-[250px] w-[100px] h-[100px]"
          />
        </motion.div>

        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-[#603809]">
              Our Coffee Menu
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-[#707070]">
              Explore all flavors of coffee with us. There is always a new cup
              worth experiencing in a discount price
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <motion.div
              className="mt-12 grid grid-cols-1 z-10 relative  gap-x-6 gap-y-[3rem] sm:grid-cols-2 lg:grid-cols-4"
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
                  className=" w-[300px] h-[390px] mx-auto rounded-lg bg-[#FCF3EA] border border-[#7D6356]  shadow-lg"
                >
                  <Link to={`/menu/${product.id}`} state={{product}}>
                  <div className=" overflow-hidden ">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-[300px] h-[220px] object-cover  hover:scale-105 transition-all ease-linear delay-150"
                    />
                  </div>
                  </Link>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold text-[#7D6356]">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#232323]/80">
                      {product.description}
                    </p>
                    <p className="mt-2 text-xl font-bold text-[#232323]">
                      {product.price}
                    </p>
                    <div className=" flex justify-center gap-4 items-center mt-10">
                    <Link to={`/menu/${product.id}`} state={{product}}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className=" rounded-full bg-[#7D6356] w-[120px] h-[50px]  text-sm text-white transition-colors hover:bg-[#7D6251]"
                      >
                        Avail Now
                      </motion.button>
                      </Link>
                    <Link to={`/menu/${product.id}`} state={{product}}>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className=" rounded-full bg-[#E8DCD0] border border-[#7D6356] w-[120px] h-[50px]  text-sm text-black transition-colors hover:bg-[#7D6251] hover:text-white"
                      >
                        Buy Now
                      </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <div className=" flex justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" mt-[80px] mx-auto  rounded-full bg-[#E8DCD0] border border-[#7D6356] md:w-[200px] w-[120px] h-[50px]  text-sm text-black transition-colors hover:bg-[#7D6251] hover:text-white"
          >
            Load More
          </motion.button>
        </div>
      </section>
    </>
  );
}
