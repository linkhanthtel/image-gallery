import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaLeaf, FaSearch, FaUserFriends, FaStar, FaChevronDown, FaRocket, FaShieldAlt, FaGlobe } from "react-icons/fa"

// Neural network canvas component for AI effect
const NeuralNetworkCanvas = () => {
  const canvasRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])
  const animationFrameId = useRef(null)
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const container = canvas.parentElement
        const { width, height } = container.getBoundingClientRect()

        canvas.width = width
        canvas.height = height
        setDimensions({ width, height })

        // Create nodes
        const nodeCount = Math.floor((width * height) / 25000)
        const newNodes = []

        for (let i = 0; i < nodeCount; i++) {
          newNodes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5 + 0.5,
            vx: Math.random() * 0.3 - 0.15,
            vy: Math.random() * 0.3 - 0.15,
            color: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(
              Math.random() * 255,
            )}, ${Math.random() * 0.5 + 0.2})`,
          })
        }

        setNodes(newNodes)

        // Create connections
        const newConnections = []
        const connectionDistance = Math.min(width, height) / 5

        for (let i = 0; i < newNodes.length; i++) {
          for (let j = i + 1; j < newNodes.length; j++) {
            const dx = newNodes[i].x - newNodes[j].x
            const dy = newNodes[i].y - newNodes[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < connectionDistance) {
              newConnections.push({
                from: i,
                to: j,
                opacity: 1 - distance / connectionDistance,
              })
            }
          }
        }

        setConnections(newConnections)
      }
    }

    const handleMouseMove = (e) => {
      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!canvasRef.current || nodes.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Update and draw connections
      ctx.lineWidth = 0.3
      connections.forEach((connection) => {
        const fromNode = nodes[connection.from]
        const toNode = nodes[connection.to]

        // Calculate distance to mouse
        const midX = (fromNode.x + toNode.x) / 2
        const midY = (fromNode.y + toNode.y) / 2
        const dx = midX - mousePosition.current.x
        const dy = midY - mousePosition.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150
        const influence = Math.max(0, 1 - distance / maxDistance)

        ctx.beginPath()
        ctx.moveTo(fromNode.x, fromNode.y)
        ctx.lineTo(toNode.x, toNode.y)
        ctx.strokeStyle = `rgba(100, 149, 237, ${connection.opacity * 0.15 + influence * 0.2})`
        ctx.stroke()
      })

      // Update and draw nodes
      const updatedNodes = nodes.map((node) => {
        // Update position
        let x = node.x + node.vx
        let y = node.y + node.vy

        // Bounce off walls
        if (x < 0 || x > dimensions.width) node.vx *= -1
        if (y < 0 || y > dimensions.height) node.vy *= -1

        if (x < 0) x = 0
        if (x > dimensions.width) x = dimensions.width
        if (y < 0) y = 0
        if (y > dimensions.height) y = dimensions.height

        // Calculate distance to mouse
        const dx = x - mousePosition.current.x
        const dy = y - mousePosition.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 100
        const influence = Math.max(0, 1 - distance / maxDistance)

        // Draw node
        ctx.beginPath()
        ctx.arc(x, y, node.radius * (1 + influence), 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()

        return {
          ...node,
          x,
          y,
        }
      })

      setNodes(updatedNodes)
      animationFrameId.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [nodes, connections, dimensions])

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" style={{ pointerEvents: "none" }} />
  )
}

// Enhanced Section component with improved animations and styling
const Section = ({ title, content, children }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [content, children])

  return (
    <motion.div
      className="mb-8 bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/5 overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ borderColor: "rgba(59, 130, 246, 0.2)" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-blue-500 via-transparent to-transparent opacity-30"></div>

      <div className="flex justify-between items-center mb-4">
        <motion.h2
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          layout
        >
          {title}
        </motion.h2>
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isExpanded ? "Collapse section" : "Expand section"}
        >
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <FaChevronDown className="text-blue-400" />
          </motion.div>
        </motion.button>
      </div>

      <motion.div
        className="overflow-hidden"
        animate={{
          height: isExpanded ? contentHeight : "8rem",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div ref={contentRef}>
          <p className="text-gray-300 leading-relaxed mb-6">{content}</p>
          {children}
        </div>
      </motion.div>

      {!isExpanded && contentHeight > 128 && (
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
      )}
    </motion.div>
  )
}

// Enhanced Feature Card component
const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/5 relative overflow-hidden group"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.2)" }}
  >
    {/* Decorative glow */}
    <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

    <div className="relative z-10">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
        <Icon className="text-2xl text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </motion.div>
)

// Enhanced Team Member component
const TeamMember = ({ name, role, image }) => (
  <motion.div
    className="flex flex-col items-center bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/5 relative overflow-hidden group"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.2)" }}
  >
    {/* Decorative elements */}
    <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

    <div className="relative z-10">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-white/10 p-1">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full rounded-full object-cover" />
      </div>
      <h3 className="text-lg font-semibold text-white text-center">{name}</h3>
      <p className="text-blue-400 text-sm text-center">{role}</p>
    </div>
  </motion.div>
)

// Tab component
const Tab = ({ label, active, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`px-6 py-3 rounded-xl transition-all duration-300 ${
      active
        ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30"
        : "text-gray-400 hover:text-white border border-transparent hover:border-white/10"
    }`}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.98 }}
  >
    {label}
  </motion.button>
)

function About() {
  const [activeTab, setActiveTab] = useState("about")

  const features = [
    {
      icon: FaSearch,
      title: "Advanced Search",
      description:
        "Find the perfect image instantly with our AI-powered search algorithms that understand context and visual elements.",
    },
    {
      icon: FaLeaf,
      title: "Eco-Friendly",
      description:
        "Our servers run on 100% renewable energy, making your image searches environmentally conscious and sustainable.",
    },
    {
      icon: FaUserFriends,
      title: "Community",
      description:
        "Connect with like-minded individuals, follow creators, and share your favorite images with our growing community.",
    },
    {
      icon: FaStar,
      title: "Curated Collections",
      description:
        "Explore hand-picked collections from our expert curators, organized by themes, styles, and trending topics.",
    },
    {
      icon: FaRocket,
      title: "Lightning Fast",
      description:
        "Experience blazing-fast image loading and search results with our optimized infrastructure and CDN integration.",
    },
    {
      icon: FaShieldAlt,
      title: "Privacy First",
      description:
        "Your privacy matters. We never track your searches or share your data with third parties without your consent.",
    },
    {
      icon: FaGlobe,
      title: "Global Access",
      description:
        "Access millions of high-quality images from photographers and creators around the world in over 30 languages.",
    },
  ]

  const teamMembers = [
    { name: "Lin", role: "Founder & CEO", image: "/placeholder.svg?height=96&width=96" },
    {
      name: "Khant",
      role: "Lead Developer",
      image: "/placeholder.svg?height=96&width=96",
    },
    {
      name: "Htel",
      role: "UX Designer",
      image: "/placeholder.svg?height=96&width=96",
    },
    {
      name: "David",
      role: "Marketing Director",
      image: "/placeholder.svg?height=96&width=96",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0">
        <NeuralNetworkCanvas />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About Pixaro
          </motion.h1>

          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Discover the story behind the platform that's revolutionizing how people find and share images.
          </motion.p>
        </motion.div>

        <motion.nav
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="inline-flex rounded-xl bg-slate-900/50 backdrop-blur-sm p-2 border border-white/5">
            <Tab label="About" active={activeTab === "about"} onClick={() => setActiveTab("about")} />
            <Tab label="Features" active={activeTab === "features"} onClick={() => setActiveTab("features")} />
            <Tab label="Team" active={activeTab === "team"} onClick={() => setActiveTab("team")} />
          </div>
        </motion.nav>

        <AnimatePresence mode="wait">
          {activeTab === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Section
                title="What is Pixaro?"
                content="Pixaro is an innovative image searching app that opens the door to a world of stunning visuals. Our carefully curated image gallery offers a treasure trove of captivating moments, meticulously organized for your browsing pleasure. Whether you're a seasoned photographer or simply someone who appreciates the beauty of a well-captured image, Pixaro has something for everyone."
              />

              <Section
                title="Browse Your Home Feed"
                content="Your home feed is the heart of Pixaro, where you'll discover Pins, people, and businesses tailored to your interests. Based on your recent activity, we curate a personalized experience that keeps you inspired. You'll also see Pins from the people and boards you choose to follow, ensuring a constant stream of fresh, relevant content."
              >
                <div className="mt-8 flex justify-center">
                  <motion.a
                    href="/"
                    className="inline-flex items-center px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-blue-500/20 transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/0 via-white/20 to-blue-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative z-10">Try Now</span>
                  </motion.a>
                </div>
              </Section>

              <Section
                title="Our Mission"
                content="At Pixaro, our mission is to inspire and empower individuals through the power of visual discovery. We believe that every image has a story to tell, and we're dedicated to providing a platform where these stories can be shared, appreciated, and used to spark creativity and connection across the globe."
              />

              <Section
                title="Our Vision"
                content="We envision a world where visual inspiration is accessible to everyone, everywhere. Pixaro aims to be the definitive platform for image discovery, connecting creators with audiences and helping people find exactly the visual content they need, when they need it. Through continuous innovation and a commitment to quality, we're building a future where images transcend barriers and bring people together."
              />
            </motion.div>
          )}

          {activeTab === "features" && (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <FeatureCard {...feature} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "team" && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/5 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-center text-gray-300 leading-relaxed">
                  Behind Pixaro is a passionate team of innovators, designers, and developers dedicated to bringing you
                  the best visual discovery experience. Our diverse backgrounds and shared vision drive us to constantly
                  improve and evolve the platform.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TeamMember {...member} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default About
