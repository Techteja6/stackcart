import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-gray-800 text-white text-3xl rounded-full p-2 cursor-pointer hover:bg-gray-600"
    onClick={onClick}
  >
    &gt;
  </div>
);

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-gray-800 text-white text-3xl rounded-full p-2 cursor-pointer hover:bg-gray-600"
    onClick={onClick}
  >
    &lt;
  </div>
);

const ImageCarousel = () => {
  const images = [
    '/images/image6.jpg',
    '/images/image5.jpg',
    '/images/image4.png',
    '/images/rolex.jpg',
    '/images/images2.jpg',
    
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full max-w-[1440px] mx-auto py-8">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
className="w-full h-[600px] object-contain rounded-md bg-white"            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;