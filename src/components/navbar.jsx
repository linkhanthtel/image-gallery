import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='bg-gradient-to-r from-green-700 to-green-600 text-white flex justify-between px-2'>
      <div className='flex flex-row justify-center py-5 text-xl font-serif font-bold'>
        <img src="/logo.png" alt="Logo" className='w-8 h-8 self-center rounded-full' />
        <Link to="/" className='px-3'>Pixaro</Link>
      </div>
      <div className='hidden md:flex text-lg justify-between py-5'>
        <Link to="/" className='px-3'>Home</Link>
        <Link to="/about" className='px-3'>About</Link>
        <Link to="/support" className='px-3'>Support</Link>
      </div>
      <div className='hidden md:flex py-5'>
        <FaFacebook className='text-3xl mx-3' />
        <AiFillInstagram className='text-3xl mx-3' />
        <FaPinterest className='text-3xl mx-3' />
        <FaBehanceSquare className='text-3xl mx-3' />
      </div>
      <div className='flex md:hidden py-5'>
        <GiHamburgerMenu className='text-3xl' onClick={() => setToggle(!toggle)} />
      </div>
      { toggle ? 
            <motion.div 
              className='absolute w-full h-screen bg-gradient-to-r from-green-500 to-green-600 py-7 flex flex-col items-center'
              animate={{ opacity: 1}}
              initial={{ opacity: 0}}
              transition={{ duration: 0.5}}
              >
              <ImCross className='text-xl' onClick={() => setToggle(!toggle)} />
              <Link to="/" className='px-3 py-7 text-xl' onClick={() => setToggle(!toggle)}>Home</Link>
              <Link to="/about" className='px-3 py-7 text-xl' onClick={() => setToggle(!toggle)}>About</Link>
              <Link to="/support" className='px-3 py-7 text-xl' onClick={() => setToggle(!toggle)}>Support</Link>
            </motion.div>
                : 
            <></>
        }
    </div>
  )
}

export default Navbar
