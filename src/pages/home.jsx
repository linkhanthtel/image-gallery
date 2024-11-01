import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { FaSearch, FaRandom, FaHistory, FaHeart, FaDownload, FaEye, FaUser } from 'react-icons/fa'

const ParticleBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particlesArray = []
    const numberOfParticles = 100

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.color = `hsl(${Math.random() * 60 + 180}, 100%, 50%)`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.size > 0.2) this.size -= 0.1

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    init()
    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

const ImageSearch = ({ searchText, randomSearch, searchHistory, setSearchHistory }) => {
  const [text, setText] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const searchRef = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsExpanded(false)
        setShowHistory(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      searchText(text)
      setSearchHistory(prev => [...new Set([text, ...prev])].slice(0, 5))
      setText('')
      setIsExpanded(false)
    }
  }

  const handleHistoryClick = (term) => {
    searchText(term)
    setShowHistory(false)
  }

  return (
    <motion.div 
      className='w-full max-w-4xl mx-auto px-4 py-8 md:py-16'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        ref={searchRef}
        className='relative'
        style={{ perspective: 2000 }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
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
              className={`bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full shadow-xl transition-all duration-300 ${isExpanded ? 'p-6' : 'p-2'}`}
              whileHover={{ boxShadow: "0px 0px 20px rgba(0, 255, 0, 0.3)" }}
            >
              <div className="flex items-center">
                <input 
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onFocus={() => setIsExpanded(true)}
                  className={`bg-transparent border-none w-full text-white mr-3 py-2 px-2 leading-tight focus:outline-none placeholder-white text-lg ${isExpanded ? 'flex-grow' : 'w-40 sm:w-60'}`}
                  placeholder="Search images..."
                />
                <div className={`flex items-center space-x-2 ${isExpanded ? 'flex-shrink-0' : ''}`}>
                  <motion.button 
                    type="submit"
                    className="bg-green-400 hover:bg-green-600 text-white p-2 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaSearch />
                  </motion.button>
                  <motion.button 
                    type="button"
                    onClick={randomSearch}
                    className="bg-blue-400 hover:bg-blue-600 text-white p-2 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaRandom />
                  </motion.button>
                  <motion.button 
                    type="button"
                    onClick={() => setShowHistory(!showHistory)}
                    className="bg-purple-400 hover:bg-purple-600 text-white p-2 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaHistory />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </form>
        </motion.div>
        <AnimatePresence>
          {showHistory && searchHistory.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute mt-2 w-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg z-10"
            >
              <ul className="py-2">
                {searchHistory.map((term, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 hover:bg-white hover:bg-opacity-20 cursor-pointer text-white"
                    onClick={() => handleHistoryClick(term)}
                  >
                    {term}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

const ImageCard = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      className="w-full bg-gray-900 rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={image.webformatURL} 
          alt={image.tags} 
          className="w-full h-48 object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
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
          <h3 className="text-lg font-bold mb-1 truncate">{image.tags.split(',')[0]}</h3>
          <div className="flex items-center text-sm">
            <FaUser className="mr-1" />
            <span>{image.user}</span>
          </div>
        </motion.div>
      </div>
      <div className="p-4 bg-gray-800">
        <div className="flex justify-between items-center mb-4">
          <motion.div className="flex items-center text-green-400" whileHover={{ scale: 1.1 }}>
            <FaEye className="mr-1" />
            <span>{image.views.toLocaleString()}</span>
          </motion.div>
          <motion.div className="flex items-center text-blue-400" whileHover={{ scale: 1.1 }}>
            <FaDownload className="mr-1" />
            <span>{image.downloads.toLocaleString()}</span>
          </motion.div>
          <motion.div className="flex items-center text-red-400" whileHover={{ scale: 1.1 }}>
            <FaHeart className="mr-1" />
            <span>{image.likes.toLocaleString()}</span>
          </motion.div>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {image.tags.split(',').slice(0, 3).map((tag, index) => (
              <motion.span 
                key={index} 
                className="bg-gray-700 rounded-full px-2 py-1 text-xs text-gray-300"
                whileHover={{ scale: 1.1, backgroundColor: "#4A5568" }}
              >
                #{tag.trim()}
              </motion.span>
            ))}
          </div>
        </div>
        {/* <motion.a
          href={image.pageURL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-blue-500 text-white px-4 py-2 rounded-full text-center font-bold"
          whileHover={{ scale: 1.05, backgroundColor: "#3182CE" }}
          whileTap={{ scale: 0.95 }}
        >
          View on Pixabay
        </motion.a> */}
      </div>
    </motion.div>
  )
}

export default function Home() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [terms, setTerms] = useState('')
  const [searchHistory, setSearchHistory] = useState([])

  const fetchImages = async (searchTerms) => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://pixabay.com/api/?key=40151661-981db9326d5240a2652c46106&q=${searchTerms}&image_type=photo&pretty=true`)
      const data = await response.json()
      setImages(data.hits)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchImages(terms)
  }, [terms])

  const randomSearch = () => {
    const randomTerms = ['nature', 'technology', 'food', 'travel', 'animals', 'sports', 'art']
    const randomTerm = randomTerms[Math.floor(Math.random() * randomTerms.length)]
    setTerms(randomTerm)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 text-white relative">
      <ParticleBackground />
      <ImageSearch 
        searchText={(text) => setTerms(text)} 
        randomSearch={randomSearch}
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
      />
      <AnimatePresence>
        {!isLoading && images.length === 0 && (
          <motion.h1 
            className="text-3xl md:text-5xl font-bold text-center my-12 md:my-28 text-green-400"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            No images found
          </motion.h1>
        )}
        {isLoading ? (
          <motion.div 
            className="flex justify-center items-center h-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {images.map((image) => (
              <motion.div 
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <ImageCard image={image} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}