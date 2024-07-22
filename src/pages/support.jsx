import React from 'react'
import image3 from '../images/image3.jpg'

function Support() {
  return (
    <div>
      <div className='px-2 text-green-600 py-10 md:px-10 bg-blue-50 text-center'>
        <h1 className='text-3xl pb-5'>Support</h1>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nulla similique suscipit facere nemo nostrum aperiam libero earum amet, accusamus aut eaque consectetur? Consequatur, nihil sit minus tempora saepe distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, modi in, placeat, eligendi dolorum eum repellat voluptatum voluptatibus cupiditate tempora recusandae similique praesentium aut hic? Fugiat nobis consequatur possimus! Autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laboriosam, officiis similique facere at, vitae dolores debitis quisquam laborum porro cum velit quos quidem quae. Distinctio itaque odio deserunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem suscipit aut possimus aliquid maiores numquam, repellendus excepturi maxime aspernatur reiciendis veniam eaque distinctio ex quasi cum, vitae nihil exercitationem harum.</p>
        <div className='pt-5 flex justify-around'>
          <p>Email: info@pixaro.com</p>
          <p>Contact: +65 8762 5331</p>
        </div>
      </div>
      <div className='px-2 text-green-600 py-10 md:px-10 bg-blue-50 text-center'>
        <h1 className='text-3xl pb-5'>Contact</h1>
        <p className='text-justify pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nulla similique suscipit facere nemo nostrum aperiam libero earum amet, accusamus aut eaque consectetur? Consequatur, nihil sit minus tempora saepe distinctio.</p>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div className='w-full md:w-[50%]'>
            <form className='flex flex-col border-2 border-green-500 p-5'>
              <h1>Your Information</h1>
              <input type="text" placeholder='Name' className='my-5 p-2' />
              <input type="text" placeholder='Occupation' className='my-5 p-2' />
              <input type="text" placeholder='Email' className='my-5 p-2' />
              <textarea cols="30" rows="10" placeholder='Your Message' className='p-2'></textarea>
              <button className='mt-4 p-3 rounded-full text-white bg-green-500 hover:bg-green-600'>Submit</button>
            </form>
          </div>
          <div className='hidden md:flex md:w-[40%] h-full justify-center'>
            <img src={image3} alt="Image"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
