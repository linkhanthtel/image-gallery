import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const SocialIcon = ({ Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className="text-white hover:text-green-200 transition-colors"
    aria-label={label}
  >
    <Icon className="text-2xl" />
  </motion.a>
)

function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the newsletter subscription
    console.log('Subscribed with email:', email)
    setEmail('')
    // You might want to show a success message to the user here
  }

  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <motion.h2 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Pixaro
            </motion.h2>
            <p className="text-sm">Discover and share amazing images</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Connect with us</h3>
            <div className="flex justify-center space-x-4">
              <SocialIcon Icon={FaTwitter} href="#" label="Pixaro on Twitter" />
              <SocialIcon Icon={FaFacebook} href="#" label="Pixaro on Facebook" />
              <SocialIcon Icon={FaInstagram} href="#" label="Pixaro on Instagram" />
              <SocialIcon Icon={FaGithub} href="#" label="Pixaro on GitHub" />
            </div>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center md:justify-end">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-green-500 text-white placeholder-green-200 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-300 mb-2 sm:mb-0"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-900 hover:bg-green-400 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        <motion.div 
          className="mt-8 pt-8 border-t border-green-500 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Pixaro Inc. All rights reserved.
          </p>
          <motion.p 
            className="text-sm mt-2 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            Made with <FaHeart className="text-red-500 mx-1" /> by the Pixaro team
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer