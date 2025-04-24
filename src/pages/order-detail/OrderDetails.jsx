import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Footer, Navbar , PaymentSuccess } from "../../components"
import salesOffer from "../../assets/home/salesOffer.png"
import menuImg from "../../assets/home/menuImg.png"



export default function OrderDetails() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    pickupTime: "",
  })

  const [openModal , setIsOpenModal] = useState(false);

  const timeSlots = [
    "12:00 AM",
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <>
    <Navbar />
    <section className="relative bg-white py-16 min-h-screen flex items-center  ">
      {/* Decorative coffee splash top-left */}
      <motion.img
        src={salesOffer}
        alt="Coffee splash"
        className="absolute left-0 top-12 h-32 w-auto"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Decorative coffee beans bottom-right */}
      <motion.img
        src={menuImg}
        alt="Coffee beans"
        className="absolute bottom-0 right-0 md:h-[150px] sm:h-[60px] h-[30px] w-auto transform rotate-180"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />

      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-[#7D6251] md:mt-0 mt-[4rem]">Order Details</h1>
        
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-white shadow-lg border rounded-lg  lg:w-[1000px] md:w-[800px] p-[2rem] w-full"
        >
          <h2 className="my-4 text-2xl text-[#32434D] font-semibold">How Would You Like To Have To Order?</h2>
          <h3 className="text-xl font-semibold text-[#32434D]">Fill Out The Form</h3>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Full Name */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <label htmlFor="fullName" className="block text-sm font-medium text-[#32434D]">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-[#DEE1E1] p-3 focus:border-[#7D6251] focus:outline-none focus:ring-1 focus:ring-[#7D6251]"
                  placeholder="Nadir Aftab"
                />
              </motion.div>

              {/* Email Address */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                <label htmlFor="email" className="block text-sm font-medium text-[#32434D]">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-[#DEE1E1] p-3 focus:border-[#7D6251] focus:outline-none focus:ring-1 focus:ring-[#7D6251]"
                  placeholder="info@moodcafe.com"
                />
              </motion.div>

              {/* Phone Number */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                <label htmlFor="phone" className="block text-sm font-medium text-[#32434D]">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-[#DEE1E1] p-3 focus:border-[#7D6251] focus:outline-none focus:ring-1 focus:ring-[#7D6251]"
                  placeholder="(415) 555-4321"
                  required
                />
              </motion.div>

              {/* Pick Up Time */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                <label htmlFor="pickupTime" className="block text-sm font-medium text-[#32434D]">
                  Pick Up Time*
                </label>
                <div className="relative mt-1">
                  <select
                    id="pickupTime"
                    value={formData.pickupTime}
                    onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                    className="w-full appearance-none rounded-lg border border-[#DEE1E1] p-3 pr-10 focus:border-[#7D6251] focus:outline-none focus:ring-1 focus:ring-[#7D6251]"
                    required
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 "
            >

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="rounded-full bg-[#7D6251] px-8 py-3 text-white transition-colors hover:bg-[#8B6E5C]"
                onClick={() => setIsOpenModal(true)}
              >
                Submit Now
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
    {openModal  && 
    <PaymentSuccess setIsOpenModal={setIsOpenModal} />
  }
    <Footer />
    </>
  )
}

