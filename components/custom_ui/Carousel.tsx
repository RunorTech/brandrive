// Carousel.tsx
'use client'
import Image, { StaticImageData } from 'next/image';
import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images: StaticImageData[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handle = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(handle); // Cleanup the interval on unmount
  }, [images.length, interval]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className=" navBtnDiv relative w-full max-w-xl overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full transition-opacity duration-500">
            <Image src={image} alt={`Slide ${index}`}  />
          </div>
        ))}
      </div>
      <button
        className="navBtnL"
        onClick={handlePrev}
      >
        &#10094;
      </button>
      <button
        className=" navBtnR "
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
