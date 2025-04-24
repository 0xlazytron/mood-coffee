import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="bg-white py-16">
      <div className="">
        {/* Contact Form */}
        <div className=" min-h-[80vh] flex justify-center items-center bg-[#F4F4F4]">
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl "
            >
              <h2 className="text-3xl font-bold text-[#000] text-center">
                Contact Us
              </h2>
              <p className="mt-4 text-[#707070] text-center">
                Lorem ipsum dolor sit amet consectetur. Maecenas quis tristique
                quis mattis ac venenatis sagittis velit ut. Quis viverra arcu eu
                facilisis.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2 ">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                 
                      <label htmlFor="name" className=" text-start ">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full rounded-lg border border-gray-200 p-3 focus:border-[#7D6251] focus:outline-none focus:ring-1 focus:ring-[#7D6251]"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                      />
                   
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="name" className=" text-start">
                      Number or Email
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your email or number"
                      className="w-full rounded-lg border border-gray-200 p-3 focus:border-[#7D6251] focus:outline-none focus:ring-1 focus:ring-[#7D6251]"
                      value={formData.contact}
                      onChange={(e) =>
                        setFormData({ ...formData, contact: e.target.value })
                      }
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <textarea
                    placeholder="Message..."
                    rows={6}
                    className="w-full rounded-lg border border-gray-200 p-3 focus:border-[#7D6251] focus:outline-none focus:ring-1 focus:ring-[#7D6251]"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="rounded-full bg-[#7D6251] px-8 py-3 text-white transition-colors hover:bg-[#8B6E5C]"
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Testimonials */}
      </div>
    </section>
  );
}
