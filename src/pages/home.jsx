import React, { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { FaSearch, FaRandom, FaHistory, FaHeart, FaDownload, FaEye, FaUser, FaExternalLinkAlt } from "react-icons/fa"

// Enhanced Particle Background with better performance
const ParticleBackground = () => {
  const canvasRef = useRef(null)
  const animationFrameId = useRef(null)
  const particlesArray = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let isAnimating = true

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const numberOfParticles = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 15000))

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.opacity = Math.random() * 0.5 + 0.2
        this.color = `rgba(59, 130, 246, ${this.opacity})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1

        // Keep particles within bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x))
        this.y = Math.max(0, Math.min(canvas.height, this.y))
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function init() {
      particlesArray.current = []
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

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-30" />
}

// Enhanced Image Search Component
const ImageSearch = ({ searchText, randomSearch, searchHistory, setSearchHistory }) => {
  const [text, setText] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const searchRef = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsExpanded(false)
        setShowHistory(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      if (text.trim()) {
        searchText(text.trim())
        setSearchHistory((prev) => [...new Set([text.trim(), ...prev])].slice(0, 5))
        setText("")
        setIsExpanded(false)
        setShowHistory(false)
      }
    },
    [text, searchText, setSearchHistory],
  )

  const handleHistoryClick = useCallback(
    (term) => {
      searchText(term)
      setShowHistory(false)
      setIsExpanded(false)
    },
    [searchText],
  )

  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-purple-900/80"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

      <motion.div
        className="w-full max-w-4xl mx-auto px-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Discover Images
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Search through millions of high-quality images from Pixabay
          </p>
        </motion.div>

        <motion.div
          ref={searchRef}
          className="relative"
          style={{ perspective: 2000 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.4 }}
        >
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
            <form onSubmit={onSubmit} className="w-full">
              <motion.div
                className={`bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 transition-all duration-300 ${
                  isExpanded ? "p-6" : "p-4"
                }`}
                whileHover={{ boxShadow: "0px 0px 30px rgba(59, 130, 246, 0.3)" }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      onFocus={() => setIsExpanded(true)}
                      className="bg-transparent border-none w-full text-white py-3 px-4 text-lg placeholder-gray-300 focus:outline-none"
                      placeholder="Search for amazing images..."
                      autoComplete="off"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.button
                      type="submit"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-3 rounded-xl flex items-center justify-center transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={!text.trim()}
                    >
                      <FaSearch size={18} />
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={randomSearch}
                      className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white p-3 rounded-xl flex items-center justify-center transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaRandom size={18} />
                    </motion.button>
                    {searchHistory.length > 0 && (
                      <motion.button
                        type="button"
                        onClick={() => setShowHistory(!showHistory)}
                        className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white p-3 rounded-xl flex items-center justify-center transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaHistory size={18} />
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            </form>
          </motion.div>

          <AnimatePresence>
            {showHistory && searchHistory.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute mt-4 w-full bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 z-20 overflow-hidden"
              >
                <div className="p-2">
                  <h3 className="text-sm font-semibold text-gray-300 px-3 py-2">Recent Searches</h3>
                  <ul>
                    {searchHistory.map((term, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white rounded-lg mx-1 transition-colors duration-200"
                        onClick={() => handleHistoryClick(term)}
                      >
                        <div className="flex items-center gap-2">
                          <FaHistory className="text-gray-400 text-xs" />
                          <span>{term}</span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  )
}

// Enhanced Image Card Component
const ImageCard = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <motion.div
      className="w-full bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {imageError ? (
          <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
            <p className="text-gray-400">Failed to load image</p>
          </div>
        ) : (
          <img
            src={image.webformatURL || "/placeholder.svg"}
            alt={image.tags}
            className={`w-full h-48 object-cover transition-all duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-bold mb-1 truncate">{image.tags.split(",")[0]?.trim() || "Untitled"}</h3>
          <div className="flex items-center text-sm text-gray-300">
            <FaUser className="mr-1" />
            <span>{image.user || "Unknown"}</span>
          </div>
        </motion.div>

        {/* Hover overlay with external link */}
        <motion.div
          className="absolute top-4 right-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.a
            href={image.pageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaExternalLinkAlt size={14} />
          </motion.a>
        </motion.div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <motion.div className="flex items-center text-green-400 text-sm" whileHover={{ scale: 1.05 }}>
            <FaEye className="mr-1" />
            <span>{image.views?.toLocaleString() || "0"}</span>
          </motion.div>
          <motion.div className="flex items-center text-blue-400 text-sm" whileHover={{ scale: 1.05 }}>
            <FaDownload className="mr-1" />
            <span>{image.downloads?.toLocaleString() || "0"}</span>
          </motion.div>
          <motion.div className="flex items-center text-red-400 text-sm" whileHover={{ scale: 1.05 }}>
            <FaHeart className="mr-1" />
            <span>{image.likes?.toLocaleString() || "0"}</span>
          </motion.div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {image.tags
              .split(",")
              .slice(0, 3)
              .map((tag, index) => (
                <motion.span
                  key={index}
                  className="bg-white/10 rounded-full px-3 py-1 text-xs text-gray-300 border border-white/20"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                >
                  #{tag.trim()}
                </motion.span>
              ))}
          </div>
        </div>

        <motion.a
          href={image.pageURL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-xl text-center font-medium transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View on Pixabay
        </motion.a>
      </div>
    </motion.div>
  )
}

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="text-gray-300 mb-4">Please refresh the page and try again</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-200"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Main Home Component
export default function Home() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [terms, setTerms] = useState("nature")
  const [searchHistory, setSearchHistory] = useState([])

  const fetchImages = useCallback(async (searchTerms) => {
    if (!searchTerms?.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      const API_KEY = "40151661-981db9326d5240a2652c46106"
      const response = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
          searchTerms,
        )}&image_type=photo&pretty=true&per_page=21&safesearch=true`,
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setImages(data.hits || [])
    } catch (error) {
      console.error("Error fetching images:", error)
      setError("Failed to fetch images. Please try again.")
      setImages([])
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchImages(terms)
  }, [terms, fetchImages])

  const randomSearch = useCallback(() => {
    const randomTerms = [
      "nature",
      "technology",
      "food",
      "travel",
      "animals",
      "sports",
      "art",
      "architecture",
      "flowers",
      "landscape",
      "city",
      "ocean",
    ]
    const randomTerm = randomTerms[Math.floor(Math.random() * randomTerms.length)]
    setTerms(randomTerm)
  }, [])

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white relative">
        <ParticleBackground />

        <ImageSearch
          searchText={setTerms}
          randomSearch={randomSearch}
          searchHistory={searchHistory}
          setSearchHistory={setSearchHistory}
        />

        <div className="container mx-auto px-4 pb-12">
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 max-w-md mx-auto">
                  <h2 className="text-xl font-bold text-red-400 mb-2">Error</h2>
                  <p className="text-gray-300 mb-4">{error}</p>
                  <button
                    onClick={() => fetchImages(terms)}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors duration-200"
                  >
                    Try Again
                  </button>
                </div>
              </motion.div>
            )}

            {isLoading && (
              <motion.div
                className="flex justify-center items-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-300">Searching for amazing images...</p>
                </div>
              </motion.div>
            )}

            {!isLoading && !error && images.length === 0 && terms && (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="text-3xl font-bold text-gray-400 mb-4">No images found</h2>
                <p className="text-gray-500 mb-6">Try searching for something else</p>
                <button
                  onClick={randomSearch}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl transition-all duration-300"
                >
                  Try Random Search
                </button>
              </motion.div>
            )}

            {!isLoading && !error && images.length > 0 && (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
              >
                {images.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <ImageCard image={image} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </ErrorBoundary>
  )
}
