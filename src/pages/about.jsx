import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function About() {
  return (
    <div>
      <div className='h-fit px-3 md:px-10 text-white w-screen py-5' style={{backgroundImage: `url(${require('../images/image1.jpg')})`, backgroundSize: 'cover', brightness: '50', backgroundPosition: 'center'}}>
        <motion.div 
          className='border-b border-white'
          animate={{ opacity: 1}}
          initial={{ opacity: 0.1}}
          transition={{ duration: 3}}
          >
          <h1 className='text-center py-10 text-3xl'>About</h1>
          <p className='text-justify py-5'>Welcome to Pixaro Image Gallery App. This app is user-friendly and will help you find the images you are looking for. You can type anything in the search bar and it will show the stunning images related to the keywords. Pixabay API is used and you can see the photographer of the image, downloads, likes and views. The amazing images are described with hashtags.</p>
        </motion.div>
        <motion.div 
          className='pb-10 border-b border-white'
          animate={{ x:0, opacity: 1}}
          initial={{ x: 1000, opacity: 0.1}}
          transition={{ duration: 2}}
        >
          <h1 className='text-center py-10 text-3xl'>Pixaro Image Gallery App</h1>
          <p className='text-justify py-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis sint mollitia, tempore natus saepe eveniet eius aliquam similique at amet laboriosam sapiente doloremque aperiam corrupti quia, veniam autem consequatur! Commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores dolores quos explicabo nisi unde voluptatum numquam suscipit quam doloremque quisquam, ad omnis illo, aliquid consequatur quidem tenetur impedit quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis accusantium est alias excepturi voluptatem doloremque, quos quisquam aspernatur, eum saepe! Mollitia animi totam saepe maxime nihil exercitationem in ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, quo alias sint eius quasi repudiandae dolor? Et, laborum debitis. Laborum placeat id, qui eaque sapiente distinctio quo architecto alias! Sint.</p>
          <div className='flex justify-center items-center'>
            <Link to="/" className='p-3 border-2 border-white rounded-full hover:bg-green-700'>Try Now</Link>
          </div>
        </motion.div>
        <motion.div 
          className='border-b border-white'
          animate={{ x:0, opacity: 1}}
          initial={{ x:-1000, opacity: 0.1}}
          transition={{ duration: 2}}
        >
          <h1 className='text-center py-10 text-3xl'>Our Team</h1>
          <p className='text-justify py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptate deserunt officiis blanditiis voluptates beatae corrupti, atque tenetur illum. Animi suscipit vitae praesentium omnis quasi! Nulla obcaecati omnis illum ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, provident. Delectus repellat ut fugiat itaque soluta voluptatem aliquam doloremque suscipit. Corporis rerum cupiditate ratione. Nulla ipsa corrupti unde reiciendis aut.l Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum officiis deleniti placeat tempora? Repellendus magnam reiciendis hic perferendis dolorem cupiditate odio. In, commodi dignissimos quasi veniam vitae nesciunt beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium distinctio quo aliquid enim eum dolorum provident perspiciatis optio alias unde iste totam aliquam nihil, suscipit minus facilis odit voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum doloribus earum neque, eaque officiis facilis numquam impedit similique repudiandae libero natus dignissimos ducimus maxime iusto? Officiis dicta fugit necessitatibus tempore.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default About
