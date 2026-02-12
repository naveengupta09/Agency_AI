import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      {/* footer top */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
        >
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            className="w-32 sm:w-44"
            alt=""
          />
          <p className="max-w-md">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          <ul className="flex gap-8">
            <li>
              <a className="relative inline-flex items-center transition-all duration-300 hover:-translate-y-0.5 hover:text-primary dark:hover:text-teal-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="relative inline-flex items-center transition-all duration-300 hover:-translate-y-0.5 hover:text-primary dark:hover:text-teal-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="relative inline-flex items-center transition-all duration-300 hover:-translate-y-0.5 hover:text-primary dark:hover:text-teal-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="#our-work">
                Our Work
              </a>
            </li>
            <li>
              <a className="relative inline-flex items-center transition-all duration-300 hover:-translate-y-0.5 hover:text-primary dark:hover:text-teal-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="#contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400"
        >
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm mt-2 mb-6">
            The latest news, articles, and resouces, sent to your inbox weekly
          </p>

          <div className="flex gap-2 text-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-50"
            />
            <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded px-6 py-3 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 text-white shadow-[0_12px_26px_rgba(79,70,229,0.4)] ring-1 ring-white/35 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:brightness-110">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/25 to-white/0 transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Subscribe</span>
              <span className="relative inline-flex items-center justify-center size-6 rounded-full bg-white/25 ring-1 ring-white/35 shadow-[0_0_10px_rgba(255,255,255,0.35)] transition-transform duration-300 group-hover:translate-x-0.5">
                <img src={assets.arrow_icon} className="w-3.5 h-3.5" alt="" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
      <hr className="border-gray-300 dark:border-gray-600 my-6" />

      {/* Footer bottom */}
      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap"
      >
        <p>Copyright 2026 @im.naveengupta - All Right Reserved</p>
        <div className="flex items-center justify-between gap-4">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
