import React, { useState } from 'react';
import { motion } from "framer-motion";


const MenuButtons = () => {
    const [menu , setMenu] = useState("coffee")
  return (
    <section>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center min-h-[30vh] border-b border-[#E8DCD0] flex flex-col justify-center items-center max-w-7xl mx-auto"
    >
      <div className=" flex justify-center gap-4 items-center mt-10 flex-wrap">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`   ${menu === "coffee" ? " bg-[#7D6251] text-white  " : "bg-[#E8DCD0] text-black " } rounded-full hover:bg-[#E8DCD0] border border-[#7D6356] md:w-[200px] w-[120px] h-[50px]  text-sm hover:text-black transition-colors bg-[#7D6251] `}
          onClick={ () => setMenu("coffee")}
        >
          Coffee Menu
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={` ${menu === "food" ? " bg-[#7D6251] text-white " : "bg-[#E8DCD0]" } rounded-full  border border-[#7D6356] md:w-[200px] w-[120px] h-[50px]  text-sm text-black transition-colors hover:bg-[#7D6251] hover:text-white`}
          onClick={() => setMenu("food")}
        >
          Food Menu
        </motion.button>
      </div>
      <div className=' flex gap-[1rem] mt-10 flex-wrap '>
      {menu === "coffee" &&   ["Cappuccino" , "Chai Latte" , "Macchiato" , "Expresso"].map((items , index) =>{
            return <button key={index} className=' w-[150px] mx-auto h-[40px] bg-[#603809]/20 hover:bg-[#603809] hover:text-white transition-all ease-linear delay-150  border border-[#603809] text-[#603809] rounded-lg'>{ items}</button>
        })}
      
        { menu === "food" && ["Croissants" , "Macarons " , "Beehive bites" , "Cheesecake"].map((items , index) =>{
            return <button key={index} className=' w-[150px] mx-auto h-[40px] bg-[#603809]/20 hover:bg-[#603809] hover:text-white transition-all ease-linear delay-150  border border-[#603809] text-[#603809] rounded-lg'>{ items}</button>
        })}
      </div>

    </motion.div>
  </section>
  )
}

export default MenuButtons