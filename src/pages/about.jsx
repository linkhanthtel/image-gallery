import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function About() {
  return (
    <div>
      <div className='h-fit px-3 text-green-800 md:px-10 w-screen py-5'>
        <motion.div 
          animate={{ opacity: 1, y: 0}}
          initial={{ opacity: 0.1, y: 50}}
          transition={{ duration: 1}}
          >
          <h1 className='text-center py-10 text-3xl'>What is Pixaro?</h1>
          <p className='text-justify py-5'>Pixaro is an image searching app and dive into a world of stunning visuals in our image gallery! Here, you'll discover a treasure trove of captivating images, meticulously organized for your browsing pleasure. Whether you're a seasoned photographer or simply someone who appreciates the beauty of a well-captured moment, our gallery offers something for everyone.  Explore a diverse range of themes and categories, or lose yourself in a curated collection.  With intuitive navigation and a user-friendly interface, finding the perfect image is a breeze.  And for those who crave a deeper connection, captions and descriptions will provide valuable context and ignite your imagination. So come on in, browse, and let the power of images transport you!</p>
        </motion.div>
        <motion.div 
          animate={{ opacity: 1, y: 0}}
          initial={{ opacity: 0.1, y: 50}}
          transition={{ duration: 1}}
        >
          <h1 className='text-center py-10 text-3xl'>Browse your home feed</h1>
          <p className='text-justify py-5'>Your home feed is where you'll find Pins, people and businesses we think you'll love, based on your recent activity. We'll also show you Pins from the people and boards you choose to follow. You can also search for Pins by typing in keywords into the search bar. Try typing "birthday party" in the search bar to see ideas for birthday party decor, party food recipes, and birthday gift ideas. Use the search bar to discover ideas, people and trends. Explore suggested topics or search for topics of your own. Use your camera to find ideas relevant to your photos and narrow beauty results.</p>
          <div className='flex justify-center items-center'>
            <Link to="/" className='p-3 border-2 border-green-500 rounded-full hover:bg-green-500 hover:text-white'>Try Now</Link>
          </div>
        </motion.div>
        <motion.div 
          animate={{ opacity: 1, y: 0}}
          initial={{ opacity: 0.1, y: 50}}
          transition={{ duration: 1}}
        >
          <h1 className='text-center py-10 text-3xl'>Our Team</h1>
          <p className='text-justify py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptate deserunt officiis blanditiis voluptates beatae corrupti, atque tenetur illum. Animi suscipit vitae praesentium omnis quasi! Nulla obcaecati omnis illum ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, provident. Delectus repellat ut fugiat itaque soluta voluptatem aliquam doloremque suscipit. Corporis rerum cupiditate ratione. Nulla ipsa corrupti unde reiciendis aut.l Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum officiis deleniti placeat tempora? Repellendus magnam reiciendis hic perferendis dolorem cupiditate odio. In, commodi dignissimos quasi veniam vitae nesciunt beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium distinctio quo aliquid enim eum dolorum provident perspiciatis optio alias unde iste totam aliquam nihil, suscipit minus facilis odit voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum doloribus earum neque, eaque officiis facilis numquam impedit similique repudiandae libero natus dignissimos ducimus maxime iusto? Officiis dicta fugit necessitatibus tempore.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default About
