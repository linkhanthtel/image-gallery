import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaLeaf, FaSearch, FaUserFriends, FaStar, FaChevronDown } from 'react-icons/fa'

const Section = ({ title, content, children }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mb-8 bg-green-900 bg-opacity-50 rounded-lg p-6 shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-green-300 flex justify-between items-center">
        {title}
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="text-green-400 hover:text-green-300 transition-colors"
          aria-label={isExpanded ? "Collapse section" : "Expand section"}
        >
          <FaChevronDown className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </h2>
      <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isExpanded ? 'max-h-full' : 'max-h-32'}`}>
        <p className="text-green-100 leading-relaxed mb-4">{content}</p>
        {children}
      </div>
    </div>
  )
}

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-green-800 rounded-lg p-4 shadow-md">
    <Icon className="text-3xl text-green-400 mb-2" />
    <h3 className="text-xl font-semibold text-green-200 mb-2">{title}</h3>
    <p className="text-green-100 text-sm">{description}</p>
  </div>
)

const TeamMember = ({ name, role, image }) => (
  <div className="flex flex-col items-center bg-green-800 rounded-lg p-4 shadow-md">
    <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4 object-cover" />
    <h3 className="text-lg font-semibold text-green-200">{name}</h3>
    <p className="text-green-400 text-sm">{role}</p>
  </div>
)

function About() {
  const [activeTab, setActiveTab] = useState('about')

  const features = [
    { icon: FaLeaf, title: "Eco-Friendly", description: "Our servers run on 100% renewable energy." },
    { icon: FaSearch, title: "Advanced Search", description: "Find the perfect image with our powerful search algorithms." },
    { icon: FaUserFriends, title: "Community", description: "Connect with like-minded individuals and share your favorite images." },
    { icon: FaStar, title: "Curated Collections", description: "Explore hand-picked collections from our expert curators." },
  ]

  const teamMembers = [
    { name: "Lin", role: "Founder & CEO", image: "/placeholder.svg?height=96&width=96" },
    { name: "Khant", role: "Lead Developer", image: "/placeholder.svg?height=96&width=96" },
    { name: "Htel", role: "UX Designer", image: "/placeholder.svg?height=96&width=96" },
    { name: "David", role: "Marketing Director", image: "/placeholder.svg?height=96&width=96" },
  ]

  return (
    <div className="min-h-screen bg-green-950 text-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-extrabold text-center text-green-300 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Pixaro
        </motion.h1>

        <nav className="mb-8">
          <ul className="flex justify-center space-x-4 bg-green-900 rounded-lg p-2">
            {['about', 'features', 'team'].map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeTab === tab ? 'bg-green-700 text-green-100' : 'text-green-300 hover:bg-green-800'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {activeTab === 'about' && (
          <>
            <Section 
              title="What is Pixaro?" 
              content="Pixaro is an innovative image searching app that opens the door to a world of stunning visuals. Our carefully curated image gallery offers a treasure trove of captivating moments, meticulously organized for your browsing pleasure. Whether you're a seasoned photographer or simply someone who appreciates the beauty of a well-captured image, Pixaro has something for everyone."
            />

            <Section 
              title="Browse Your Home Feed" 
              content="Your home feed is the heart of Pixaro, where you'll discover Pins, people, and businesses tailored to your interests. Based on your recent activity, we curate a personalized experience that keeps you inspired. You'll also see Pins from the people and boards you choose to follow, ensuring a constant stream of fresh, relevant content."
            >
              <div className="mt-20 flex justify-center">
                <Link to="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-green-900 bg-green-400 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
                  Try Now
                </Link>
              </div>
            </Section>

            <Section
              title="Our Mission"
              content="At Pixaro, our mission is to inspire and empower individuals through the power of visual discovery. We believe that every image has a story to tell, and we're dedicated to providing a platform where these stories can be shared, appreciated, and used to spark creativity and connection across the globe."
            />
          </>
        )}

        {activeTab === 'features' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        )}

        {activeTab === 'team' && (
          <>
            <p className="text-center mb-8">
              Behind Pixaro is a passionate team of innovators, designers, and developers dedicated to bringing you the best visual discovery experience.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  )
}

export default About