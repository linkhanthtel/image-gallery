import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }

    return (
        <div className='h-fit py-10 md:py-[200px] w-screen mb-10 border-b-2 border-green-400' style={{backgroundImage : `url(${require('../images/cover3.png')})`, backgroundSize: 'cover', backgroundPosition: 'bottom'}} >
        <div className='w-80 md:w-[600px] rounded-xl overflow-hidden my-10 mx-auto'>
            <form onSubmit={onSubmit} className="w-80 md:w-[600px]">
                <motion.div 
                    className='bg-white py-5 px-5 rounded-lg'
                    animate={{ y:0, opacity: 1}}
                    initial={{ y:100, opacity: 0.1}}
                    transition={{ duration: 1}}
                >
                    <div className="flex items-center border-b-2 border-green-500 py-2">
                    <input onChange={(e) => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" value={text} placeholder="Search Image..." />
                    <button className="flex-shrink-0 bg-green-400 hover:bg-green-600 text-sm text-white py-2 px-3 rounded" type="submit">Search</button>
                    </div>
                </motion.div>
            </form>
        </div>
        </div>
    )
}

export default ImageSearch;
