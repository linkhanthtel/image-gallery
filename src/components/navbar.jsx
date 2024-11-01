import React, { useState } from 'react'
import { FaFacebook, FaPinterest, FaBehanceSquare } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import { ImCross } from "react-icons/im"
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const socialIcons = [
  { Icon: FaFacebook, href: "https://facebook.com" },
  { Icon: AiFillInstagram, href: "https://instagram.com" },
  { Icon: FaPinterest, href: "https://pinterest.com" },
  { Icon: FaBehanceSquare, href: "https://behance.net" },
]

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Support", to: "/support" },
]

function Navbar() {
  const [toggle, setToggle] = useState(false)

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-gradient-to-r from-green-700 to-green-600 text-white flex justify-between items-center px-4 py-2 relative z-50'
    >
      <motion.div 
        className='flex items-center'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src="/logo.png" alt="Logo" className='w-10 h-10 rounded-full mr-2' />
        <Link to="/" className='text-2xl font-serif font-bold'>Pixaro</Link>
      </motion.div>

      <div className='hidden md:flex space-x-6 text-lg'>
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to={item.to} className='hover:text-green-200 transition-colors duration-200'>
              {item.name}
            </Link>
          </motion.div>
        ))}
      </div>

      <div className='hidden md:flex space-x-4'>
        {socialIcons.map(({ Icon, href }) => (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className='text-2xl hover:text-green-200 transition-colors duration-200' />
          </motion.a>
        ))}
      </div>

      <motion.div 
        className='md:hidden'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <GiHamburgerMenu className='text-3xl cursor-pointer' onClick={() => setToggle(!toggle)} />
      </motion.div>

      <AnimatePresence>
        {toggle && (
          <motion.div 
            className='absolute top-full left-0 w-full bg-gradient-to-r from-green-700 to-green-600 py-5 flex flex-col items-center'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mb-4"
            >
              <ImCross className='text-xl cursor-pointer' onClick={() => setToggle(!toggle)} />
            </motion.div>
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link 
                  to={item.to} 
                  className='block px-3 py-2 text-xl hover:text-green-200 transition-colors duration-200' 
                  onClick={() => setToggle(!toggle)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div 
              className='flex space-x-4 mt-4'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
            >
              {socialIcons.map(({ Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className='text-2xl hover:text-green-200 transition-colors duration-200' />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar