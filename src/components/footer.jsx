import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { FaTwitter, FaFacebook, FaInstagram, FaGithub, FaArrowUp, FaRocket } from "react-icons/fa"

// Floating orb component for interactive background
const FloatingOrb = ({ delay = 0, size = "w-20 h-20" }) => (
  <motion.div
    className={`absolute ${size} rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl`}
    animate={{
      x: [0, 100, -50, 0],
      y: [0, -80, 50, 0],
      scale: [1, 1.2, 0.8, 1],
    }}
    transition={{
      duration: 20,
      repeat: Number.POSITIVE_INFINITY,
      delay,
      ease: "easeInOut",
    }}
  />
)

// Minimal social icon component
const MinimalSocialIcon = ({ Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative"
    aria-label={label}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <motion.div
      className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300"
      whileHover={{ y: -2 }}
    >
      <Icon className="text-lg" />
    </motion.div>

    {/* Minimal underline */}
    <motion.div
      className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300"
      whileHover={{ width: "100%" }}
    />
  </motion.a>
)

// Scroll to top button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-500/30 transition-all duration-300 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.3 })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")

      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  const socialIcons = [
    { Icon: FaFacebook, href: "https://www.facebook.com/lin.htel", label: "Facebook" },
    { Icon: FaInstagram, href: "https://www.instagram.com/lk7nv/?next=%2F", label: "Instagram" },
    { Icon: FaGithub, href: "https://github.com/linkhanthtel", label: "GitHub" },
  ]

  return (
    <>
      <footer
        ref={footerRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 to-black overflow-hidden"
      >
        {/* Floating orbs background */}
        <FloatingOrb delay={0} size="w-32 h-32" />
        <FloatingOrb delay={5} size="w-24 h-24" />
        <FloatingOrb delay={10} size="w-16 h-16" />
        <FloatingOrb delay={15} size="w-28 h-28" />

        {/* Main content container */}
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Brand section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-6xl md:text-8xl font-thin bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Pixaro
            </motion.h2>

            <motion.div
              className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />

            <motion.p
              className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Where visual stories come to life. Discover, create, and share the extraordinary.
            </motion.p>
          </motion.div>

          {/* Newsletter section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h3 className="text-2xl font-light text-white/80 mb-8">Stay in the loop</h3>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="relative">
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-transparent border-b border-white/20 text-white placeholder-white/40 py-4 px-0 text-center focus:outline-none focus:border-blue-400 transition-all duration-300 text-lg font-light"
                  whileFocus={{ scale: 1.02 }}
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting || !email.trim() || isSubmitted}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-300 transition-colors duration-300 disabled:opacity-50"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-6 h-6 border border-blue-400 border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                  ) : isSubmitted ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-green-400">
                      ✓
                    </motion.div>
                  ) : (
                    <FaRocket />
                  )}
                </motion.button>
              </div>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-400 text-sm mt-4 font-light"
                  >
                    Welcome aboard! 🚀
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Social icons */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="flex justify-center space-x-8">
              {socialIcons.map(({ Icon, href, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                >
                  <MinimalSocialIcon Icon={Icon} href={href} label={label} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom section */}
          <motion.div
            className="border-t border-white/10 pt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p className="text-white/40 text-sm font-light" whileHover={{ color: "rgba(255, 255, 255, 0.6)" }}>
                © {new Date().getFullYear()} Pixaro | Hobby Project by Lin
              </motion.p>

              <motion.div
                className="flex space-x-6 text-sm text-white/40"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.7 }}
              >
                {["Privacy", "Terms", "Contact"].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="hover:text-white/60 transition-colors duration-300 relative group"
                    whileHover={{ y: -1 }}
                  >
                    {item}
                    <motion.div className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Ambient light effect */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </footer>

      <ScrollToTop />
    </>
  )
}

export default Footer
