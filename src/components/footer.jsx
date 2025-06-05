import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaHeart, FaTwitter, FaFacebook, FaInstagram, FaGithub, FaArrowRight, FaCheck } from "react-icons/fa"

// Enhanced Social Icon with hover effects
const SocialIcon = ({ Icon, href, label, color }) => (
  <motion.a href={href} target="_blank" rel="noopener noreferrer" className="relative group" aria-label={label}>
    <motion.div
      className={`absolute inset-0 ${color} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md`}
      whileHover={{ scale: 1.8 }}
    />
    <motion.div
      className="relative z-10 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:text-white transition-all duration-300"
      whileHover={{ scale: 1.1, y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon className="text-xl" />
    </motion.div>
  </motion.a>
)

// Animated link component
const FooterLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-200 block mb-2 relative overflow-hidden group"
    whileHover={{ x: 5 }}
  >
    <span className="relative z-10">{children}</span>
    <motion.span
      className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"
      initial={{ width: 0 }}
      whileHover={{ width: "100%" }}
    />
  </motion.a>
)

function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    // Basic email validation
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email address")
      inputRef.current?.focus()
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Subscribed with email:", email)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Pixaro
              </h2>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 mt-2"></div>
            </motion.div>
            <p className="text-gray-300 mb-6">
              Discover and share amazing images from around the world. High-quality, royalty-free photos for all your
              creative needs.
            </p>
            <div className="flex space-x-3">
              <SocialIcon Icon={FaTwitter} href="#" label="Pixaro on Twitter" color="bg-blue-500" />
              <SocialIcon Icon={FaFacebook} href="#" label="Pixaro on Facebook" color="bg-blue-600" />
              <SocialIcon Icon={FaInstagram} href="#" label="Pixaro on Instagram" color="bg-pink-500" />
              <SocialIcon Icon={FaGithub} href="#" label="Pixaro on GitHub" color="bg-gray-700" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <nav>
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">Explore</FooterLink>
              <FooterLink href="#">Collections</FooterLink>
              <FooterLink href="#">Popular</FooterLink>
              <FooterLink href="#">New Images</FooterLink>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Company</h3>
            <nav>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and featured images.
            </p>

            <form onSubmit={handleSubmit} className="relative">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 px-4 py-3 pr-12 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  required
                />
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white" />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.button
                      key="submit"
                      type="submit"
                      disabled={isSubmitting || !email}
                      className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                        isSubmitting ? "opacity-50" : "opacity-100"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <FaArrowRight className="text-blue-400" />
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {error}
                  </motion.p>
                )}

                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-400 text-sm mt-2"
                  >
                    Thank you for subscribing!
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Pixaro Inc. All rights reserved.
          </p>

          <motion.div className="flex items-center text-sm text-gray-400" whileHover={{ scale: 1.05 }}>
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="mx-1"
            >
              <FaHeart className="text-red-500" />
            </motion.div>
            <span>by the Pixaro team</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
