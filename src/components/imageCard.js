import React from 'react';
import { motion } from 'framer-motion';

const ImageCard = ({image}) => {
    const tags = image.tags.split(',');

    return (
        <motion.div
            animate={{ y: 70, opacity: 0}}
            whileInView={{ y: 0, opacity: 1}}
            transition={{ duration: 1}}
            viewport={{ once: true }}
        >
            <div className="max-w-sm my-3 h-fit rounded-lg shadow-lg overflow-hidden">
            <img src={image.webformatURL} className="w-full h-80" />
            <div className="px-6 py-4">
                <div className="text-purple-500 mb-2 text-lg font-bold">Photo by {image.user}</div>
                <ul>
                    <li><strong>Views : </strong>{image.views}</li>
                    <li><strong>Downloads : </strong>{image.downloads}</li>
                    <li><strong>Likes : </strong>{image.likes}</li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag,index) => (
                    <span key={index} className="inline-block bg-orange-200 rounded-full text-sm font-semibold px-3 py-1 mr-2 my-2">#{tag}</span>
                ))}
            </div>
            </div>
        </motion.div>
    )
}

export default ImageCard;
