import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock, 
  FaChevronDown,
  FaPaperPlane,
  FaQuestionCircle,
  FaHeadset,
  FaRocket,
} from "react-icons/fa"

// Animated Dark Blue Wallpaper Component using CSS and Framer Motion
const AnimatedWallpaper = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      {/* Base gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
        animate={{
          background: [
            "linear-gradient(45deg, #0f172a, #1e3a8a, #3730a3)",
            "linear-gradient(90deg, #1e3a8a, #3730a3, #0f172a)",
            "linear-gradient(135deg, #3730a3, #0f172a, #1e3a8a)",
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
      {Array.from({ length: 25 }).map((_, i) => (
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

// Enhanced Contact Info Component
const ContactInfo = ({ icon: Icon, title, content, delay = 0 }) => {
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
        y: -5,
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

      <div className="relative z-10 flex items-center">
        <motion.div
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mr-4 border border-white/10"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Icon className="text-2xl text-blue-300" />
        </motion.div>
        <div>
          <h3 className="font-semibold text-white text-lg mb-1">{title}</h3>
          <p className="text-gray-300">{content}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Enhanced FAQ Item Component
const FAQItem = ({ question, answer, delay = 0 }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef(null)
  const itemRef = useRef(null)
  const isInView = useInView(itemRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [answer])

  return (
    <motion.div
      ref={itemRef}
      className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10 mb-4 relative overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        borderColor: "rgba(59, 130, 246, 0.3)",
        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)",
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

      <div className="relative z-10">
        <motion.button
          className="flex justify-between items-center w-full text-left"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="font-semibold text-white text-lg pr-4">{question}</span>
          <motion.div
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaChevronDown className="text-blue-300" />
          </motion.div>
        </motion.button>

        <motion.div
          className="overflow-hidden"
          animate={{
            height: isOpen ? contentHeight : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div ref={contentRef} className="pt-4">
            <p className="text-gray-300 leading-relaxed">{answer}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Enhanced Form Input Component
const FormInput = ({ label, type = "text", name, value, onChange, required = false, rows }) => (
  <motion.div
    className="mb-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <label htmlFor={name} className="block text-white text-sm font-medium mb-2">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    {type === "textarea" ? (
      <motion.textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows || 5}
        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        required={required}
        whileFocus={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.5)" }}
      />
    ) : (
      <motion.input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        required={required}
        whileFocus={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.5)" }}
      />
    )}
  </motion.div>
)

function Support() {
  const [formData, setFormData] = useState({
    name: "",
    occupation: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", occupation: "", email: "", message: "" })

      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  const contactInfo = [
    { icon: FaEnvelope, title: "Email", content: "linkhanthtel@icloud.com" },
    { icon: FaPhone, title: "Phone", content: "+65 8762 5331" },
    { icon: FaMapMarkerAlt, title: "Address", content: "Blk 1, Avenue Road, Singapore 123456" },
    { icon: FaClock, title: "Business Hours", content: "Mon-Fri: 9AM-6PM SGT" },
  ]

  const faqItems = [
    {
      question: "How do I create my account?",
      answer:
        "For account registration, we are currently doing in process. Stay tuned for updates on our registration system.",
    },
    {
      question: "Can I use Pixaro images for commercial purposes?",
      answer:
        "The images are fetched from Pixabay. For commercial or other purposes, kindly visit the Pixabay site directly to check their licensing terms.",
    },
    {
      question: "How can I report inappropriate content?",
      answer:
        "If you come across any inappropriate content, please use the 'Report' button next to the image or contact our support team directly. We take all reports seriously and will investigate promptly.",
    },
    {
      question: "Is Pixaro free to use?",
      answer:
        "Yes, Pixaro is completely free to use. We provide access to millions of high-quality images without any subscription fees.",
    },
    {
      question: "How often is new content added?",
      answer:
        "Our image database is updated regularly with fresh content from Pixabay's extensive collection, ensuring you always have access to the latest images.",
    },
  ]

  return (
    <div className="min-h-screen text-white relative">
      {/* Animated Dark Blue Wallpaper */}
      <AnimatedWallpaper />

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <motion.section
          className="px-4 py-20 md:px-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <FaHeadset className="text-3xl text-white" />
              </motion.div>

              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-6">
                Support
              </h1>

              <motion.div
                className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
            </motion.div>

            <motion.p
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              At Pixaro, we're committed to providing you with the best possible support. Our team is here to assist you
              with any questions, concerns, or issues you may have. We strive to ensure your experience with our
              platform is smooth and enjoyable.
            </motion.p>
          </div>
        </motion.section>

        {/* Contact Info Section */}
        <motion.section
          className="px-4 py-16 md:px-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get in Touch
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <ContactInfo key={index} {...info} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          className="px-4 py-16 md:px-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-6"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <FaQuestionCircle className="text-2xl text-white" />
              </motion.div>

              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div>
              {faqItems.map((item, index) => (
                <FAQItem key={index} {...item} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Form Section */}
        <motion.section
          className="px-4 py-16 md:px-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center mx-auto mb-6"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <FaPaperPlane className="text-2xl text-white" />
              </motion.div>

              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent mb-4">
                Contact Us
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Have a specific question or feedback? We'd love to hear from you. Fill out the form below and our team
                will get back to you as soon as possible.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
              {/* Contact Form */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10 relative overflow-hidden">
                  {/* Animated background */}
                  <motion.div
                    className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

                    <form onSubmit={handleSubmit}>
                      <FormInput label="Name" name="name" value={formData.name} onChange={handleInputChange} required />

                      <FormInput
                        label="Occupation"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleInputChange}
                      />

                      <FormInput
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />

                      <FormInput
                        label="Your Message"
                        type="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        required
                      />

                      <motion.button
                        type="submit"
                        disabled={isSubmitting || isSubmitted}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 relative overflow-hidden group disabled:opacity-50"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/0 via-white/20 to-blue-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              />
                              Sending...
                            </>
                          ) : isSubmitted ? (
                            <>
                              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-green-400">
                                ✓
                              </motion.div>
                              Message Sent!
                            </>
                          ) : (
                            <>
                              <FaRocket />
                              Send Message
                            </>
                          )}
                        </span>
                      </motion.button>
                    </form>

                    <AnimatePresence>
                      {isSubmitted && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 text-center"
                        >
                          Thank you for your message! We'll get back to you soon. 🚀
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              {/* Illustration/Image Side */}
              <motion.div
                className="w-full lg:w-5/12 flex justify-center items-center"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10 relative overflow-hidden">
                  {/* Animated background */}
                  <motion.div
                    className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative z-10 text-center">
                    <motion.div
                      className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-8"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                        scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                      }}
                    >
                      <FaHeadset className="text-5xl text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Our dedicated support team is always ready to help you with any questions or issues you might
                      have.
                    </p>

                    <div className="space-y-4">
                      <motion.div
                        className="flex items-center justify-center gap-3 text-blue-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaRocket />
                        <span>Fast Response Time</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center justify-center gap-3 text-purple-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaHeadset />
                        <span>Expert Assistance</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center justify-center gap-3 text-pink-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaQuestionCircle />
                        <span>Comprehensive Help</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Support
