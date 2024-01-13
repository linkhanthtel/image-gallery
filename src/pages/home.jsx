import React from 'react'
import { useState, useEffect } from "react";
import ImageCard from '../components/imageCard';
import ImageSearch from '../components/imageSearch';

export default function Home() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [terms, setTerms] = useState('');

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=40151661-981db9326d5240a2652c46106&q=${terms}&image_type=photo&pretty=true`)
        .then((res) => res.json())
        .then((data) => {
          setImages(data.hits);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }, [terms]);

    return (
    <div>
      <ImageSearch searchText={(text) => setTerms(text)} />
          {!isLoading && images.length === 0 && <h1 className="text-4xl font-bold text-center my-28 text-slate-600 mb-64">No images found</h1>}
          {isLoading ? <h1 className="text-4xl font-bold text-center my-28 text-slate-600">Loading...</h1> : <div className="pl-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image) => (
          <ImageCard key={image.id} image={image} />
          ))}
          </div>}
    </div>
  )
}
