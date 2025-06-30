import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { FaLeaf, FaSearch, FaUserFriends, FaStar, FaChevronDown, FaRocket, FaShieldAlt, FaGlobe } from "react-icons/fa"
import pic from "../images/pic.jpeg"
import pic2 from "../images/pic2.jpeg"
import pic3 from "../images/pic3.jpeg"

// Animated Dark Blue Wallpaper Component using CSS and Framer Motion
const AnimatedWallpaper = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      {/* Base gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
        animate={{
          background: [
            "linear-gradient(45deg, #0f172a, #1e3a8a,rgb(24, 18, 109))",
            "linear-gradient(90deg,rgb(2, 22, 77),rgb(9, 4, 83), #0f172a)",
            "linear-gradient(135deg,rgb(4, 33, 63), #0f172a,rgb(9, 32, 96))",
            "linear-gradient(45deg, #0f172a, #1e3a8a, #3730a3)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Animated wave layers */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)
          `,
        }}
        animate={{
          background: [
            `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
             radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
             radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
            `radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
             radial-gradient(circle at 40% 80%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
             radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
            `radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
             radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
             radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
          ],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Animated mesh gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            conic-gradient(from 0deg at 50% 50%, 
              rgba(59, 130, 246, 0.4) 0deg, 
              rgba(99, 102, 241, 0.4) 120deg, 
              rgba(139, 92, 246, 0.4) 240deg, 
              rgba(59, 130, 246, 0.4) 360deg)
          `,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}

// Enhanced Section component with glassmorphism
const Section = ({ title, content, children, delay = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef(null)
  const [contentHeight, setContentHeight] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [content, children])

  return (
    <motion.div
      ref={sectionRef}
      className="mb-8 bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10 overflow-hidden relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      whileHover={{
        borderColor: "rgba(59, 130, 246, 0.3)",
        boxShadow: "0 0 40px rgba(59, 130, 246, 0.1)",
      }}
    >
      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))",
        }}
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))",
            "linear-gradient(90deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))",
            "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-6">
          <motion.h2
            className="text-3xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
            layout
          >
            {title}
          </motion.h2>
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isExpanded ? "Collapse section" : "Expand section"}
          >
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <FaChevronDown className="text-blue-300" />
            </motion.div>
          </motion.button>
        </div>

        <motion.div
          className="overflow-hidden"
          animate={{
            height: isExpanded ? contentHeight : "6rem",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div ref={contentRef}>
            <p className="text-gray-200 leading-relaxed text-lg mb-6">{content}</p>
            {children}
          </div>
        </motion.div>

        {!isExpanded && contentHeight > 96 && (
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
        )}
      </div>
    </motion.div>
  )
}

// Enhanced Feature Card component
const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10 relative overflow-hidden group"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -10,
        borderColor: "rgba(59, 130, 246, 0.3)",
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)",
      }}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10">
        <motion.div
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6 border border-white/10"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Icon className="text-3xl text-blue-300" />
        </motion.div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

// Enhanced Team Member component
const TeamMember = ({ name, role, image, delay = 0 }) => {
  const memberRef = useRef(null)
  const isInView = useInView(memberRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={memberRef}
      className="flex flex-col items-center bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10 relative overflow-hidden group"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -5,
        borderColor: "rgba(59, 130, 246, 0.3)",
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)",
      }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="relative z-10">
        <motion.div
          className="w-28 h-28 rounded-full overflow-hidden mb-6 border-4 border-white/20 p-1"
          whileHover={{ scale: 1.05 }}
        >
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full rounded-full object-cover" />
        </motion.div>
        <h3 className="text-xl font-bold text-white text-center mb-2">{name}</h3>
        <p className="text-blue-300 text-center font-medium">{role}</p>
      </div>
    </motion.div>
  )
}

// Enhanced Tab component
const Tab = ({ label, active, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`px-8 py-4 rounded-xl transition-all duration-300 font-medium ${
      active
        ? "bg-white/10 backdrop-blur-sm text-white border border-blue-400/50 shadow-lg"
        : "text-gray-400 hover:text-white border border-transparent hover:border-white/20 hover:bg-white/5"
    }`}
    whileHover={{ y: -2, scale: 1.02 }}
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
    { name: "Lin", role: "Founder & CEO", image: pic },
    { name: "Khant", role: "Lead Developer", image: pic2 },
    { name: "David", role: "Marketing Director", image: pic3 },
  ]

  return (
    <div className="min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Animated Dark Blue Wallpaper */}
      <AnimatedWallpaper />

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Pixaro
          </motion.h1>

          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />

          <motion.p
            className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Discover the story behind the platform that's revolutionizing how people find and share images.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.nav
          className="mb-16 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="inline-flex rounded-2xl bg-white/5 backdrop-blur-xl p-2 border border-white/10">
            <Tab label="About" active={activeTab === "about"} onClick={() => setActiveTab("about")} />
            <Tab label="Features" active={activeTab === "features"} onClick={() => setActiveTab("features")} />
            <Tab label="Team" active={activeTab === "team"} onClick={() => setActiveTab("team")} />
          </div>
        </motion.nav>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <Section
                title="What is Pixaro?"
                content="Pixaro is an innovative image searching app that opens the door to a world of stunning visuals. Our carefully curated image gallery offers a treasure trove of captivating moments, meticulously organized for your browsing pleasure. Whether you're a seasoned photographer or simply someone who appreciates the beauty of a well-captured image, Pixaro has something for everyone."
                delay={0.1}
              />

              <Section
                title="Browse Your Home Feed"
                content="Your home feed is the heart of Pixaro, where you'll discover Pins, people, and businesses tailored to your interests. Based on your recent activity, we curate a personalized experience that keeps you inspired. You'll also see Pins from the people and boards you choose to follow, ensuring a constant stream of fresh, relevant content."
                delay={0.2}
              >
                <div className="mt-8 flex justify-center">
                  <motion.a
                    href="/"
                    className="inline-flex items-center px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.05, y: -3 }}
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
                delay={0.3}
              />

              <Section
                title="Our Vision"
                content="We envision a world where visual inspiration is accessible to everyone, everywhere. Pixaro aims to be the definitive platform for image discovery, connecting creators with audiences and helping people find exactly the visual content they need, when they need it. Through continuous innovation and a commitment to quality, we're building a future where images transcend barriers and bring people together."
                delay={0.4}
              />
            </motion.div>
          )}

          {activeTab === "features" && (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} delay={index * 0.1} />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "team" && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-center text-gray-200 leading-relaxed text-lg">
                  Behind Pixaro is a passionate team of innovators, designers, and developers dedicated to bringing you
                  the best visual discovery experience. Our diverse backgrounds and shared vision drive us to constantly
                  improve and evolve the platform.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <TeamMember key={index} {...member} delay={index * 0.1} />
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
