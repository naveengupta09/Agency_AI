import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion } from "motion/react"

const Navbar = ({theme, setTheme}) => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <motion.div 
    initial={{opacity: 0, y: -50}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.6, ease:'easeOut'}}
    className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>
      
      <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-32 sm:w-40' alt='' />

      <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

        <img src={assets.close_icon} alt="" className='w-5 absolute right-4 top-4 sm:hidden' onClick={()=> setSidebarOpen(false)}/>

        <a onClick={()=>setSidebarOpen(false)} href="#" className='relative transition-all duration-300 hover:-translate-y-0.5 hover:text-primary dark:hover:text-teal-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>Home</a>
        <a onClick={()=>setSidebarOpen(false)} href="#services" className='relative transition-all duration-300 hover:-translate-y-0.5 hover:text-primary dark:hover:text-teal-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>Services</a>
        <a onClick={()=>setSidebarOpen(false)} href="#our-work" className='relative transition-all duration-300 hover:-translate-y-0.5 hover:text-primary dark:hover:text-teal-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>Our Work</a>
        <a onClick={()=>setSidebarOpen(false)} href="#contact-us" className='relative transition-all duration-300 hover:-translate-y-0.5 hover:text-primary dark:hover:text-teal-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>Contact Us</a>
      </div>

      <div className='flex items-center gap-2 sm:gap-4'>

        <ThemeToggleBtn theme={theme} setTheme={setTheme}/>

        <img src={theme === 'dark' ? assets.menu_icon_dark: assets.menu_icon} alt="" onClick={()=> setSidebarOpen(true)} className='w-8 sm:hidden'/>

        <a href="#contact-us" className='text-sm max-sm:hidden flex items-center gap-2 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 text-white px-6 py-2 rounded-full cursor-pointer transition-all hover:scale-103 hover:brightness-110 shadow-[0_12px_28px_rgba(225,29,72,0.35)] ring-1 ring-white/20 dark:shadow-[0_12px_30px_rgba(94,234,212,0.25)] group'>
            Connect
            <span className='ml-0.5 inline-flex items-center justify-center size-6 rounded-full bg-white/25 ring-1 ring-white/40 shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:rotate-45'>
              <img src={assets.arrow_icon} className='w-3 h-3' alt="" />
            </span>
        </a>
      </div>
    </motion.div>
  )
}

export default Navbar
