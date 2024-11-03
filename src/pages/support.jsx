import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import image3 from '../images/image3.jpg'

const ContactInfo = ({ icon: Icon, title, content }) => (
  <motion.div 
    className="flex items-center mb-4"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="text-green-500 text-2xl mr-3" />
    <div>
      <h3 className="font-semibold text-green-600">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </motion.div>
)

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div 
      className="border-b border-green-200 py-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-green-600">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <motion.p 
          className="mt-2 text-gray-600"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  )
}

function Support() {
  const [formData, setFormData] = useState({
    name: '',
    occupation: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', occupation: '', email: '', message: '' })
  }

  return (
    <div className="bg-blue-50 text-green-600">
      <motion.section 
        className="px-4 py-12 md:px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8">Support</h1>
        <div className="max-w-4xl mx-auto">
          <motion.p 
            className="text-gray-600 mb-8 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            At Pixaro, we're committed to providing you with the best possible support. Our team is here to assist you with any questions, concerns, or issues you may have. We strive to ensure your experience with our platform is smooth and enjoyable.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-8">
            <ContactInfo icon={FaEnvelope} title="Email" content="contact@pixaro.com" />
            <ContactInfo icon={FaPhone} title="Phone" content="+65 1234 5678" />
            <ContactInfo icon={FaMapMarkerAlt} title="Address" content="Blk 1, Avenue Road, Singapore 123456" />
            <ContactInfo icon={FaClock} title="Business Hours" content="Mon-Fri: 9AM-6PM SGT" />
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="px-4 py-12 md:px-10 bg-green-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          <FAQItem 
            question="How do I create my account?" 
            answer="For account registration, we are currently doing in process."
          />
          <FAQItem 
            question="Can I use Pixaro images for commercial purposes?" 
            answer="The images are fetched from Pixabay. For commercial or other purposes, kindly visit the Pixabay site directly."
          />
          <FAQItem 
            question="How can I report inappropriate content?" 
            answer="If you come across any inappropriate content, please use the 'Report' button next to the image or contact our support team directly. We take all reports seriously and will investigate promptly."
          />
        </div>
      </motion.section>

      <motion.section 
        className="px-4 py-12 md:px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Have a specific question or feedback? We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible.
        </p>
        <div className="flex flex-col md:flex-row md:justify-between max-w-6xl mx-auto">
          <motion.div 
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Your Information</h2>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="occupation" className="block text-gray-700 text-sm font-bold mb-2">Occupation</label>
                <input 
                  type="text" 
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>
              <motion.button 
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
          <motion.div 
            className="w-full md:w-5/12 flex justify-center items-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={image3} alt="Contact" className="rounded-lg shadow-lg max-w-full h-auto" />
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Support