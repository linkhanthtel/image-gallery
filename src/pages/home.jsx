import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence, useTransform, useScroll } from "framer-motion"
import {
  FaSearch,
  FaRandom,
  FaHistory,
  FaHeart,
  FaDownload,
  FaEye,
  FaUser,
  FaExternalLinkAlt,
  FaFilter,
  FaMicrophone,
  FaPalette,
  FaShare,
  FaExpand,
  FaTimes,
  FaFire,
  FaMagic,
  FaRobot,
  FaInfinity,
  FaThLarge,
  FaList,
} from "react-icons/fa"

// Dark Blue Animated Wallpaper with Advanced Effects
const DarkBlueWallpaper = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      {/* Deep dark blue base gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 25%, rgba(51, 65, 85, 0.85) 50%, rgba(15, 23, 42, 0.95) 100%),
            linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)
          `,
        }}
        animate={{
          background: [
            `radial-gradient(circle at 20% 20%, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 25%, rgba(51, 65, 85, 0.85) 50%, rgba(15, 23, 42, 0.95) 100%),
             linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)`,
            `radial-gradient(circle at 80% 80%, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 25%, rgba(51, 65, 85, 0.85) 50%, rgba(15, 23, 42, 0.95) 100%),
             linear-gradient(225deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)`,
            `radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 25%, rgba(51, 65, 85, 0.85) 50%, rgba(15, 23, 42, 0.95) 100%),
             linear-gradient(315deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)`,
          ],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Animated dark blue waves */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(ellipse at 10% 30%, rgba(30, 58, 138, 0.4) 0%, transparent 60%),
            radial-gradient(ellipse at 90% 70%, rgba(37, 99, 235, 0.3) 0%, transparent 60%),
            radial-gradient(ellipse at 50% 10%, rgba(29, 78, 216, 0.35) 0%, transparent 60%),
            radial-gradient(ellipse at 30% 90%, rgba(30, 64, 175, 0.3) 0%, transparent 60%)
          `,
        }}
        animate={{
          background: [
            `radial-gradient(ellipse at 10% 30%, rgba(30, 58, 138, 0.4) 0%, transparent 60%),
             radial-gradient(ellipse at 90% 70%, rgba(37, 99, 235, 0.3) 0%, transparent 60%),
             radial-gradient(ellipse at 50% 10%, rgba(29, 78, 216, 0.35) 0%, transparent 60%),
             radial-gradient(ellipse at 30% 90%, rgba(30, 64, 175, 0.3) 0%, transparent 60%)`,
            `radial-gradient(ellipse at 90% 70%, rgba(30, 58, 138, 0.4) 0%, transparent 60%),
             radial-gradient(ellipse at 50% 10%, rgba(37, 99, 235, 0.3) 0%, transparent 60%),
             radial-gradient(ellipse at 30% 90%, rgba(29, 78, 216, 0.35) 0%, transparent 60%),
             radial-gradient(ellipse at 10% 30%, rgba(30, 64, 175, 0.3) 0%, transparent 60%)`,
            `radial-gradient(ellipse at 50% 10%, rgba(30, 58, 138, 0.4) 0%, transparent 60%),
             radial-gradient(ellipse at 30% 90%, rgba(37, 99, 235, 0.3) 0%, transparent 60%),
             radial-gradient(ellipse at 10% 30%, rgba(29, 78, 216, 0.35) 0%, transparent 60%),
             radial-gradient(ellipse at 90% 70%, rgba(30, 64, 175, 0.3) 0%, transparent 60%)`,
          ],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Floating dark particles */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(${30 + Math.random() * 30}, ${58 + Math.random() * 40}, ${138 + Math.random() * 50}, ${0.3 + Math.random() * 0.4})`,
          }}
          animate={{
            x: [0, Math.random() * 400 - 200, 0],
            y: [0, Math.random() * 400 - 200, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 10,
          }}
        />
      ))}

      {/* Animated mesh overlay */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            conic-gradient(from 0deg at 30% 30%, 
              rgba(30, 58, 138, 0.6) 0deg, 
              rgba(37, 99, 235, 0.4) 90deg, 
              rgba(29, 78, 216, 0.5) 180deg, 
              rgba(30, 64, 175, 0.4) 270deg, 
              rgba(30, 58, 138, 0.6) 360deg)
          `,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
}

// Advanced Search Component with AI Features
const AdvancedImageSearch = ({ searchText, randomSearch, searchHistory, setSearchHistory }) => {
  const [text, setText] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [aiSuggestions, setAiSuggestions] = useState([])
  const [filters, setFilters] = useState({
    category: "all",
    orientation: "all",
    minWidth: "",
    minHeight: "",
    color: "all",
  })
  const searchRef = useRef(null)

  // AI-powered search suggestions
  const generateAISuggestions = useCallback((query) => {
    if (!query.trim()) return []

    const suggestions = [
      `${query} in nature`,
      `${query} minimalist style`,
      `${query} vintage aesthetic`,
      `${query} modern design`,
      `${query} abstract art`,
    ]
    return suggestions.slice(0, 3)
  }, [])

  useEffect(() => {
    if (text.length > 2) {
      setAiSuggestions(generateAISuggestions(text))
    } else {
      setAiSuggestions([])
    }
  }, [text, generateAISuggestions])

  // Voice search functionality
  const startVoiceSearch = useCallback(() => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice search not supported in this browser")
      return
    }

    const recognition = new window.webkitSpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = "en-US"

    setIsListening(true)

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      setText(transcript)
      setIsListening(false)
    }

    recognition.onerror = () => {
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognition.start()
  }, [])

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      if (text.trim()) {
        searchText(text.trim())
        setSearchHistory((prev) => [...new Set([text.trim(), ...prev])].slice(0, 8))
        setText("")
        setIsExpanded(false)
        setShowHistory(false)
        setAiSuggestions([])
      }
    },
    [text, searchText, setSearchHistory],
  )

  const trendingSearches = [
    "AI Art",
    "Cyberpunk",
    "Minimalist",
    "Nature Photography",
    "Abstract",
    "Vintage",
    "Modern Architecture",
    "Space",
  ]

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-950/80 to-slate-900/90"></div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="w-full max-w-5xl mx-auto px-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <FaMagic className="text-white text-xl" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Pixaro AI
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Discover millions of stunning images with AI-powered search
          </motion.p>

          {/* Trending Searches */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <span className="text-sm text-gray-400 mr-2">Trending:</span>
            {trendingSearches.slice(0, 4).map((trend, index) => (
              <motion.button
                key={trend}
                onClick={() => {
                  setText(trend)
                  searchText(trend)
                }}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-blue-300 hover:bg-white/20 transition-all duration-300 border border-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <FaFire className="inline mr-1" />
                {trend}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Advanced Search Interface */}
        <motion.div
          ref={searchRef}
          className="relative"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <form onSubmit={onSubmit} className="w-full">
            <motion.div
              className={`bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 transition-all duration-500 ${
                isExpanded ? "p-8" : "p-6"
              }`}
              whileHover={{
                boxShadow: "0px 0px 50px rgba(59, 130, 246, 0.4)",
                borderColor: "rgba(59, 130, 246, 0.5)",
              }}
            >
              {/* Main Search Bar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onFocus={() => setIsExpanded(true)}
                    className="bg-transparent border-none w-full text-white py-4 px-6 text-xl placeholder-gray-400 focus:outline-none"
                    placeholder="Describe the image you're looking for..."
                    autoComplete="off"
                  />

                  {/* AI Suggestions */}
                  <AnimatePresence>
                    {aiSuggestions.length > 0 && (
                      <motion.div
                        className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden z-30"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <div className="p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <FaRobot className="text-blue-400" />
                            <span className="text-xs text-gray-400">AI Suggestions</span>
                          </div>
                          {aiSuggestions.map((suggestion, index) => (
                            <motion.button
                              key={index}
                              type="button"
                              onClick={() => {
                                setText(suggestion)
                                setAiSuggestions([])
                              }}
                              className="block w-full text-left px-3 py-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                              whileHover={{ x: 5 }}
                            >
                              {suggestion}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <motion.button
                    type="button"
                    onClick={startVoiceSearch}
                    disabled={isListening}
                    className={`p-4 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isListening
                        ? "bg-red-500/20 text-red-400 border border-red-500/30"
                        : "bg-gradient-to-r from-green-500/20 to-emerald-600/20 text-green-400 border border-green-500/30 hover:from-green-500/30 hover:to-emerald-600/30"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isListening ? (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <FaMicrophone size={20} />
                      </motion.div>
                    ) : (
                      <FaMicrophone size={20} />
                    )}
                  </motion.button>

                  <motion.button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-4 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    disabled={!text.trim()}
                  >
                    <FaSearch size={20} />
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={randomSearch}
                    className="bg-gradient-to-r from-orange-500/20 to-red-600/20 text-orange-400 border border-orange-500/30 hover:from-orange-500/30 hover:to-red-600/30 p-4 rounded-2xl flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaRandom size={20} />
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={() => setShowFilters(!showFilters)}
                    className={`p-4 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      showFilters
                        ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                        : "bg-white/10 text-gray-400 border border-white/20 hover:bg-white/20"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaFilter size={20} />
                  </motion.button>

                  {searchHistory.length > 0 && (
                    <motion.button
                      type="button"
                      onClick={() => setShowHistory(!showHistory)}
                      className={`p-4 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        showHistory
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : "bg-white/10 text-gray-400 border border-white/20 hover:bg-white/20"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaHistory size={20} />
                    </motion.button>
                  )}
                </div>
              </div>

              {/* Advanced Filters */}
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-white/10 pt-6 mt-6"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Category</label>
                        <select
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                          value={filters.category}
                          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                        >
                          <option value="all">All</option>
                          <option value="backgrounds">Backgrounds</option>
                          <option value="fashion">Fashion</option>
                          <option value="nature">Nature</option>
                          <option value="science">Science</option>
                          <option value="education">Education</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Orientation</label>
                        <select
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                          value={filters.orientation}
                          onChange={(e) => setFilters({ ...filters, orientation: e.target.value })}
                        >
                          <option value="all">All</option>
                          <option value="horizontal">Horizontal</option>
                          <option value="vertical">Vertical</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Min Width</label>
                        <input
                          type="number"
                          placeholder="0"
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                          value={filters.minWidth}
                          onChange={(e) => setFilters({ ...filters, minWidth: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Min Height</label>
                        <input
                          type="number"
                          placeholder="0"
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                          value={filters.minHeight}
                          onChange={(e) => setFilters({ ...filters, minHeight: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Color</label>
                        <select
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                          value={filters.color}
                          onChange={(e) => setFilters({ ...filters, color: e.target.value })}
                        >
                          <option value="all">All</option>
                          <option value="grayscale">Grayscale</option>
                          <option value="transparent">Transparent</option>
                          <option value="red">Red</option>
                          <option value="orange">Orange</option>
                          <option value="yellow">Yellow</option>
                          <option value="green">Green</option>
                          <option value="turquoise">Turquoise</option>
                          <option value="blue">Blue</option>
                          <option value="lilac">Lilac</option>
                          <option value="pink">Pink</option>
                          <option value="white">White</option>
                          <option value="gray">Gray</option>
                          <option value="black">Black</option>
                          <option value="brown">Brown</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </form>

          {/* Search History */}
          <AnimatePresence>
            {showHistory && searchHistory.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute mt-4 w-full bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 z-20 overflow-hidden"
              >
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                    <FaHistory />
                    Recent Searches
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {searchHistory.map((term, index) => (
                      <motion.button
                        key={index}
                        onClick={() => {
                          setText(term)
                          searchText(term)
                          setShowHistory(false)
                        }}
                        className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white rounded-lg transition-colors duration-200 text-left"
                        whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="flex items-center gap-2">
                          <FaHistory className="text-gray-400 text-xs" />
                          <span className="truncate">{term}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  )
}

// Enhanced Image Card with Advanced Features
const AdvancedImageCard = ({ image, onPreview, onToggleFavorite, isFavorite }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [colorPalette, setColorPalette] = useState([])

  // Extract dominant colors (simplified)
  useEffect(() => {
    if (imageLoaded) {
      // Simulate color extraction
      setColorPalette(["#3B82F6", "#8B5CF6", "#EF4444", "#10B981", "#F59E0B"].slice(0, 3))
    }
  }, [imageLoaded])

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
  }

  const shareImage = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: image.tags.split(",")[0]?.trim() || "Amazing Image",
          text: `Check out this amazing image: ${image.tags}`,
          url: image.pageURL,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(image.pageURL)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <motion.div
      className="w-full bg-slate-900/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.03,
        y: -8,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="w-full h-64 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
            <motion.div
              className="w-10 h-10 border-3 border-blue-500 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </div>
        )}

        {imageError ? (
          <div className="w-full h-64 bg-gradient-to-br from-red-900/20 to-red-800/20 flex items-center justify-center">
            <p className="text-red-400">Failed to load image</p>
          </div>
        ) : (
          <motion.img
            src={image.webformatURL || "/placeholder.svg"}
            alt={image.tags}
            className={`w-full h-64 object-cover transition-all duration-700 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
        )}

        {/* Enhanced Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating Action Buttons */}
        <motion.div
          className="absolute top-4 right-4 flex flex-col gap-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2, staggerChildren: 0.1 }}
        >
          <motion.button
            onClick={() => onToggleFavorite(image.id)}
            className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${
              isFavorite ? "bg-red-500/80 text-white" : "bg-white/20 text-white hover:bg-red-500/60"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaHeart size={14} />
          </motion.button>

          <motion.button
            onClick={() => onPreview(image)}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaExpand size={14} />
          </motion.button>

          <motion.button
            onClick={shareImage}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaShare size={14} />
          </motion.button>

          <motion.a
            href={image.pageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaExternalLinkAlt size={14} />
          </motion.a>
        </motion.div>

        {/* Image Info Overlay */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-bold mb-2 truncate">{image.tags.split(",")[0]?.trim() || "Untitled"}</h3>
          <div className="flex items-center justify-between text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <FaUser />
              <span>{image.user || "Unknown"}</span>
            </div>
            <div className="text-xs">
              {image.imageWidth} × {image.imageHeight}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Card Content */}
      <div className="p-6">
        {/* Stats Row */}
        <div className="flex justify-between items-center mb-4">
          <motion.div className="flex items-center text-emerald-400 text-sm" whileHover={{ scale: 1.05 }}>
            <FaEye className="mr-1" />
            <span>{image.views?.toLocaleString() || "0"}</span>
          </motion.div>
          <motion.div className="flex items-center text-blue-400 text-sm" whileHover={{ scale: 1.05 }}>
            <FaDownload className="mr-1" />
            <span>{image.downloads?.toLocaleString() || "0"}</span>
          </motion.div>
          <motion.div className="flex items-center text-pink-400 text-sm" whileHover={{ scale: 1.05 }}>
            <FaHeart className="mr-1" />
            <span>{image.likes?.toLocaleString() || "0"}</span>
          </motion.div>
        </div>

        {/* Color Palette */}
        {colorPalette.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-1">
              <FaPalette />
              Colors
            </h4>
            <div className="flex gap-2">
              {colorPalette.map((color, index) => (
                <motion.div
                  key={index}
                  className="w-6 h-6 rounded-full border-2 border-white/20"
                  style={{ backgroundColor: color }}
                  whileHover={{ scale: 1.2 }}
                  title={color}
                />
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-400 mb-2">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {image.tags
              .split(",")
              .slice(0, 4)
              .map((tag, index) => (
                <motion.span
                  key={index}
                  className="bg-white/10 rounded-full px-3 py-1 text-xs text-gray-300 border border-white/20 hover:bg-white/20 cursor-pointer"
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  #{tag.trim()}
                </motion.span>
              ))}
          </div>
        </div>

        {/* Action Button */}
        <motion.a
          href={image.pageURL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-3 rounded-2xl text-center font-medium transition-all duration-300 shadow-lg"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          View on Pixabay
        </motion.a>
      </div>
    </motion.div>
  )
}

// Image Preview Modal
const ImagePreviewModal = ({ image, isOpen, onClose }) => {
  if (!image) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative max-w-4xl max-h-[90vh] bg-slate-900/95 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes />
            </motion.button>

            <img
              src={image.largeImageURL || image.webformatURL}
              alt={image.tags}
              className="w-full h-auto max-h-[70vh] object-contain"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">{image.tags.split(",")[0]?.trim() || "Untitled"}</h2>
              <div className="flex items-center gap-4 text-gray-300 mb-4">
                <span>By {image.user}</span>
                <span>•</span>
                <span>
                  {image.imageWidth} × {image.imageHeight}
                </span>
                <span>•</span>
                <span>{image.views?.toLocaleString()} views</span>
              </div>
              <div className="flex gap-3">
                <motion.a
                  href={image.pageURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View on Pixabay
                </motion.a>
                <motion.button
                  onClick={() => {
                    navigator.clipboard.writeText(image.pageURL)
                    alert("Link copied!")
                  }}
                  className="px-6 py-3 bg-white/10 text-white rounded-xl font-medium border border-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Copy Link
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Main Home Component with Advanced Features
export default function Home() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [terms, setTerms] = useState("nature")
  const [searchHistory, setSearchHistory] = useState([])
  const [favorites, setFavorites] = useState(new Set())
  const [previewImage, setPreviewImage] = useState(null)
  const [viewMode, setViewMode] = useState("grid") // 'grid' or 'list'
  const [sortBy, setSortBy] = useState("popular") // 'popular', 'latest', 'views'
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8])

  const fetchImages = useCallback(
    async (searchTerms, pageNum = 1, append = false) => {
      if (!searchTerms?.trim()) return

      setIsLoading(true)
      if (!append) setError(null)

      try {
        const API_KEY = "40151661-981db9326d5240a2652c46106"
        const response = await fetch(
          `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
            searchTerms,
          )}&image_type=photo&pretty=true&per_page=21&page=${pageNum}&safesearch=true&order=${sortBy}`,
        )

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        if (append) {
          setImages((prev) => [...prev, ...(data.hits || [])])
        } else {
          setImages(data.hits || [])
        }

        setHasMore(data.hits && data.hits.length === 21)
      } catch (error) {
        console.error("Error fetching images:", error)
        setError("Failed to fetch images. Please try again.")
        if (!append) setImages([])
      } finally {
        setIsLoading(false)
      }
    },
    [sortBy],
  )

  useEffect(() => {
    setPage(1)
    fetchImages(terms, 1, false)
  }, [terms, fetchImages])

  const randomSearch = useCallback(() => {
    const randomTerms = [
      "cyberpunk",
      "minimalist",
      "abstract art",
      "space exploration",
      "vintage photography",
      "modern architecture",
      "digital art",
      "nature macro",
      "urban landscape",
      "futuristic",
      "geometric patterns",
      "neon lights",
      "mountain peaks",
      "ocean waves",
      "forest path",
    ]
    const randomTerm = randomTerms[Math.floor(Math.random() * randomTerms.length)]
    setTerms(randomTerm)
  }, [])

  const loadMore = useCallback(() => {
    if (hasMore && !isLoading) {
      const nextPage = page + 1
      setPage(nextPage)
      fetchImages(terms, nextPage, true)
    }
  }, [hasMore, isLoading, page, terms, fetchImages])

  const toggleFavorite = useCallback((imageId) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(imageId)) {
        newFavorites.delete(imageId)
      } else {
        newFavorites.add(imageId)
      }
      return newFavorites
    })
  }, [])

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1000) {
        loadMore()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [loadMore])

  return (
    <div className="min-h-screen text-white relative">
      {/* Dark Blue Animated Wallpaper */}
      <DarkBlueWallpaper />

      {/* Advanced Search Section */}
      <motion.div style={{ opacity: headerOpacity }}>
        <AdvancedImageSearch
          searchText={setTerms}
          randomSearch={randomSearch}
          searchHistory={searchHistory}
          setSearchHistory={setSearchHistory}
        />
      </motion.div>

      {/* Results Section */}
      <div className="container mx-auto px-4 pb-12 relative z-10">
        {/* Controls Bar */}
        {images.length > 0 && !error && (
          <motion.div
            className="flex flex-wrap items-center justify-between mb-8 p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-300">
                {images.length} images found for "{terms}"
              </span>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
              >
                <option value="popular">Popular</option>
                <option value="latest">Latest</option>
                <option value="views">Most Viewed</option>
              </select>

              <div className="flex bg-white/10 rounded-lg border border-white/20">
                <motion.button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-l-lg ${viewMode === "grid" ? "bg-blue-500 text-white" : "text-gray-400"}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaThLarge />
                </motion.button>
                <motion.button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-r-lg ${viewMode === "list" ? "bg-blue-500 text-white" : "text-gray-400"}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaList />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Results */}
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 max-w-md mx-auto backdrop-blur-xl">
                <h2 className="text-2xl font-bold text-red-400 mb-4">Oops! Something went wrong</h2>
                <p className="text-gray-300 mb-6">{error}</p>
                <motion.button
                  onClick={() => fetchImages(terms)}
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 rounded-xl transition-all duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try Again
                </motion.button>
              </div>
            </motion.div>
          )}

          {!error && images.length === 0 && terms && !isLoading && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <motion.div
                className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              >
                <FaSearch className="text-3xl text-white" />
              </motion.div>
              <h2 className="text-4xl font-bold text-gray-400 mb-4">No images found</h2>
              <p className="text-gray-500 mb-8 text-lg">Try a different search term or explore trending topics</p>
              <motion.button
                onClick={randomSearch}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-2xl transition-all duration-300 font-medium text-lg shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRandom className="inline mr-2" />
                Try Random Search
              </motion.button>
            </motion.div>
          )}

          {!error && images.length > 0 && (
            <motion.div
              className={`${
                viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
            >
              {images.map((image, index) => (
                <motion.div
                  key={`${image.id}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <AdvancedImageCard
                    image={image}
                    onPreview={setPreviewImage}
                    onToggleFavorite={toggleFavorite}
                    isFavorite={favorites.has(image.id)}
                  />
                </motion.div>
              ))}
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
                <motion.div
                  className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <p className="text-gray-300 text-xl">Discovering amazing images...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More Button */}
        {!isLoading && hasMore && images.length > 0 && (
          <motion.div className="text-center mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.button
              onClick={loadMore}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-2xl transition-all duration-300 font-medium text-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInfinity className="inline mr-2" />
              Load More Images
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Image Preview Modal */}
      <ImagePreviewModal image={previewImage} isOpen={!!previewImage} onClose={() => setPreviewImage(null)} />
    </div>
  )
}
