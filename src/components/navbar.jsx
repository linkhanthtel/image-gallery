import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='bg-slate-900 text-white flex justify-around px-2'>
      <div className='py-5 text-xl font-serif font-bold'>
        <Link to="/">Pixaro</Link>
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
            <div className='absolute w-screen h-screen bg-slate-900 py-7 flex flex-col items-center'>
              <ImCross className='text-3xl' onClick={() => setToggle(!toggle)} />
              <Link to="/" className='px-3 py-7 text-3xl' onClick={() => setToggle(!toggle)}>Home</Link>
              <Link to="/about" className='px-3 py-7 text-3xl' onClick={() => setToggle(!toggle)}>About</Link>
              <Link to="/support" className='px-3 py-7 text-3xl' onClick={() => setToggle(!toggle)}>Support</Link>
            </div>
                : 
            <></>
        }
    </div>
  )
}

export default Navbar
