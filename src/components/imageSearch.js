import React from 'react'
import { useState } from 'react';

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }

    return (
        <div className='h-fit py-5 md:h-full w-screen pt-24 mb-10' style={{backgroundImage : `url(${require('../images/image2.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'bottom'}} >
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
            <form onSubmit={onSubmit} className="w-fullmax-w-sm">
                <div className='bg-gray-200 py-5 px-5 rounded-lg'>
                <div className="flex items-center border-b-2 border-blue-500 py-2">
                <input onChange={(e) => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" value={text} placeholder="Search Image.." />
                <button className="flex-shrink-0 bg-slate-900 hover:bg-slate-800 text-sm text-white py-2 px-3 rounded" type="submit"> Search </button>
                </div>
                </div>
            </form>
        </div>
        </div>
    )
}

export default ImageSearch;
