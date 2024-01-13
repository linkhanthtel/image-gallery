import React from 'react'

const ImageCard = ({image}) => {
    const tags = image.tags.split(',');

    return (
        <div>
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
        </div>
    )
}

export default ImageCard;
