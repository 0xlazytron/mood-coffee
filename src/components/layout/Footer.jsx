"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import coffeeMood from "../../assets/home/mood.png"

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#", label: "Our Menu" },
    { href: "#", label: "About Us" },
    { href: "#", label: "Contact Us" },
  ]

  const legalLinks = [
    { href: "#", label: "Terms Of Use" },
    { href: "#", label: "Terms and Conditions" },
    { href: "#", label: "Privacy and Policy" },
  ]

  return (
    <footer className="bg-[#7D6356] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo and Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="mb-6">
              <img src={coffeeMood} alt="MOOD Coffee" className=" w-[130px] h-[120px]" />
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-full bg-white/10 p-2 w-[40px] h-[40px] flex justify-center items-center transition-colors hover:bg-white/20 border border-[#E8DCD0] shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white/80">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white/80">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center md:text-left"
          >
            <address className="not-italic">
              <p>Aloha tower, N1 Block 3rd Cross,</p>
              <p>Rammurthy nagar, California-560016</p>
              <p className="mt-3">+1 202 555 0152</p>
              <p className="mt-1">www.moodbar.com</p>
            </address>
          </motion.div>
        </div>
        <hr className=" mt-12 text-[#7D6356]"/>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className=" mt-8 text-center text-sm text-[#FFFFFF]"
        >
          © Copyright 2024, All Rights Reserved by Mood Cafe Time
        </motion.div>
      </div>
    </footer>
  )
}

