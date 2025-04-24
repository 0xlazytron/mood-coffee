import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { X, Minus, Plus } from "lucide-react";
import heart from "../../assets/home/heartRight.svg";
import menuImg from "../../assets/home/menuImg.png"
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";


export default function CartPage() {
  

  const {cartData , updateQuantity , removeItem} = useCart();


  const subtotal = cartData.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.05 // 5% tax
  const total = subtotal + tax

  return (
    <section className="bg-white py-16 ">
      <div className="mx-auto max-w-7xl px-4">
        {/* Decorative coffee beans */}
        <motion.img
          src={heart}
          alt="Coffee beans"
          className="absolute left-0 top-[100px] h-32 w-auto sm:block hidden"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
         <motion.img
          src={menuImg}
          alt="Coffee beans"
          className="absolute right-0 bottom-[100px] h-32 w-auto sm:block hidden"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-[#7D6251]"
        >
          Items In Your Cart
        </motion.h1>

        <div className="mt-12 flex justify-between md:flex-row flex-col  items-center gap-[2rem]">
          {/* Cart Items */}
          <div className=" md:basis-[60%] w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {cartData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex relative items-center sm:gap-4 gap-2 rounded-lg shadow-lg border border-gray-200 sm:p-2 p-1"
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="sm:h-[160px] sm:w-[160px] w-[80px] h-[80px] rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="sm:text-lg text-sm font-semibold text-[#7D6356]">{item.name}</h3>
                        <p className="sm:text-sm text-xs text-[#7D6251]/80">{item.description}</p>
                        <p className="mt-1 font-bold text-[#7D6251]">${item.price}</p>
                      </div>
                      <button onClick={() => removeItem(item.id)} className=" absolute sm:top-4 top-1  sm:right-5 right-2 border border-red-600 flex items-center justify-center rounded-full w-[20px] h-[20px] text-red-600"  >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center gap-4 justify-between" >
                      <span className="text-sm text-[#7D6251]">Quantity:</span>
                      <div className="flex items-center gap-2 border border-[#DEE1E1] rounded-lg ">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, -1)}
                          className=" border-r border-[#DEE1E1]  p-1 "
                        >
                          <Minus className="sm:h-5 sm:w-5 w-3 h-3" />
                        </motion.button>
                        <span className="w-8 text-center text-[#7D6251]">{item.quantity}</span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, 1)}
                          className=" border-l border-[#DEE1E1]  p-1"
                        >
                          <Plus className="sm:h-5 sm:w-5 w-3 h-3" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-gray-200 md:basis-[40%] w-full p-6 shadow-lg "
          >
            <h2 className="text-xl font-bold text-[#7D6251]">Order Summary</h2>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-[#7D6251]">
                <span>Date:</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between text-[#7D6251]">
                <span>Time:</span>
                <span>{new Date().toLocaleTimeString()}</span>
              </div>
              <div className="flex justify-between text-[#7D6251]">
                <span>Location:</span>
                <span>Mood Cafe, Tuscaloosa, Alabama</span>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-6">
              <h3 className="font-bold text-[#7D6251]">Quantity And Price</h3>
              <div className="mt-4 space-y-2">
                {cartData.map((item) => (
                  <div key={item.id} className="flex justify-between text-[#7D6251]">
                    <span>{item.name}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="flex justify-between text-[#7D6251]">
                  <span>Tax Amount</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-6">
              <div className="flex justify-between text-lg font-bold text-[#7D6251]">
                <span>Order Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Link to={"/orderDetails"}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full rounded-full bg-[#7D6251] py-3 text-white transition-colors hover:bg-[#8B6E5C]"
              >
                Check Out
              </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

