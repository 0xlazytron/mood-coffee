import { motion } from "framer-motion"
import { useState } from "react"
import {Link} from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Store Gallery", href: "#gallery" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ]

  return (
    <nav className=" ">
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed z-50 md:w-[95%] w-full mx-auto shadow-sm inset-x-0 md:top-2 top-0 md:rounded-full bg-[#E8DCD0] px-4 py-0"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Mood Coffee Bar Logo"
            className=" w-full "
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 lg:flex">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href={item.href}
                className={` ${location.pathname == item.href ? "text-[#7D6356] font-bold" : " text-[#232323] " } text-sm font-medium hover:font-bold  transition-colors hover:text-[#7D6356]`}
              >
                {item.name}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
        <Link to={"/cart"}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-stone-700 w-[40px] h-[40px] border border-[#7D635640] flex justify-center items-center hover:text-stone-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </motion.button>
          </Link>
          <Link to={"/login"}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-[#8B6E5C] md:w-[150px] md:h-[44px] px-6 py-2 md:text-lg text-sm font-medium text-white transition-colors hover:bg-[#7A5F4D]"
          >
            Sign In
          </motion.button>
          </Link>
          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-stone-700 hover:text-stone-900 lg:hidden">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className={`overflow-hidden lg:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <div className="space-y-4 px-4 pb-6 pt-2">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={item.href}
                className="block text-lg font-medium text-stone-700 transition-colors hover:text-stone-900"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
    </nav>
  )
}
