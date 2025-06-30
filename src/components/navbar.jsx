import { useState, useEffect, useRef } from "react"
import { FaFacebook, FaPinterest, FaBehanceSquare, FaTimes } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

// Animated particles for the navbar background
const NavParticles = () => {
  const canvasRef = useRef(null)
  const animationFrameId = useRef(null)
  const particlesArray = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let isAnimating = true

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1

        this.x = Math.max(0, Math.min(canvas.width, this.x))
        this.y = Math.max(0, Math.min(canvas.height, this.y))
      }

      draw() {
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function init() {
      particlesArray.current = []
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 8000)
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.current.push(new Particle())
      }
    }

    function animate() {
      if (!isAnimating) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesArray.current.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    init()
    animate()

    return () => {
      isAnimating = false
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />
}

// Enhanced Social Icon component
const SocialIcon = ({ Icon, href, label, delay = 0 }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group"
    aria-label={label}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.2, y: -2 }}
    whileTap={{ scale: 0.9 }}
  >
    {/* Glow effect */}
    <motion.div
      className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-30 blur-md"
      whileHover={{ scale: 1.5 }}
      transition={{ duration: 0.3 }}
    />

    {/* Icon container */}
    <div className="relative z-10 w-10 h-10 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white hover:border-blue-400/50 transition-all duration-300">
      <Icon className="text-lg" />
    </div>
  </motion.a>
)

// Enhanced Nav Link component
const NavLink = ({ to, children, onClick, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="relative group"
  >
    <a
      href={to}
      onClick={onClick}
      className="relative px-4 py-2 text-white/80 hover:text-white transition-all duration-300 font-medium tracking-wide"
    >
      {children}

      {/* Animated underline */}
      <motion.span
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"
        whileHover={{ width: "100%" }}
      />

      {/* Glow effect */}
      <motion.span
        className="absolute inset-0 bg-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
        whileHover={{ scale: 1.1 }}
      />
    </a>
  </motion.div>
)

// Futuristic hamburger menu icon
const HamburgerIcon = ({ isOpen, onClick }) => (
  <motion.button
    onClick={onClick}
    className="relative w-10 h-10 flex flex-col justify-center items-center bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-blue-400/50 transition-all duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <motion.span
      className="w-6 h-0.5 bg-white rounded-full"
      animate={{
        rotate: isOpen ? 45 : 0,
        y: isOpen ? 0 : -4,
      }}
      transition={{ duration: 0.3 }}
    />
    <motion.span
      className="w-6 h-0.5 bg-white rounded-full mt-1"
      animate={{
        opacity: isOpen ? 0 : 1,
      }}
      transition={{ duration: 0.3 }}
    />
    <motion.span
      className="w-6 h-0.5 bg-white rounded-full mt-1"
      animate={{
        rotate: isOpen ? -45 : 0,
        y: isOpen ? -8 : 0,
      }}
      transition={{ duration: 0.3 }}
    />
  </motion.button>
)

const socialIcons = [
  { Icon: FaFacebook, href: "#", label: "Facebook" },
  { Icon: AiFillInstagram, href: "#", label: "Instagram" },
  { Icon: FaPinterest, href: "#", label: "Pinterest" },
  { Icon: FaBehanceSquare, href: "#", label: "Behance" },
]

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Support", to: "/support" },
]

function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Transform values based on scroll
  const navbarOpacity = useTransform(scrollY, [0, 100], [0.95, 0.98])
  const navbarBlur = useTransform(scrollY, [0, 100], [10, 20])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        backdropFilter: `blur(${navbarBlur}px)`,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-slate-900/90 shadow-2xl shadow-blue-500/10" : "bg-slate-900/80"
      }`}
    >
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        <NavParticles />
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-0.5">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-lg">P</span>
                </div>
              </div>

              {/* Orbital rings */}
              <motion.div
                className="absolute inset-0 border border-blue-500/30 rounded-full"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{ transform: "scale(1.3)" }}
              />
              <motion.div
                className="absolute inset-0 border border-purple-500/20 rounded-full"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{ transform: "scale(1.6)" }}
              />
            </motion.div>

            <motion.h1
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{
                backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
              }}
            >
              Pixaro
            </motion.h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <NavLink key={item.name} to={item.to} delay={0.3 + index * 0.1}>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-3">
            {socialIcons.map(({ Icon, href, label }, index) => (
              <SocialIcon key={href} Icon={Icon} href={href} label={label} delay={0.6 + index * 0.1} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <HamburgerIcon isOpen={toggle} onClick={() => setToggle(!toggle)} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Mobile menu particles */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <NavParticles />
            </div>

            <div className="relative z-10 px-4 py-6">
              {/* Close button */}
              <motion.div
                className="flex justify-end mb-6"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <motion.button
                  onClick={() => setToggle(false)}
                  className="w-10 h-10 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white hover:border-red-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </motion.button>
              </motion.div>

              {/* Mobile Navigation Links */}
              <div className="space-y-4 mb-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <motion.a
                      href={item.to}
                      onClick={() => setToggle(false)}
                      className="block px-4 py-3 text-xl text-white/80 hover:text-white bg-white/5 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm"
                      whileHover={{ x: 10, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.a>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Social Icons */}
              <motion.div
                className="flex justify-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {socialIcons.map(({ Icon, href, label }, index) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white hover:border-blue-400/50 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={label}
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
