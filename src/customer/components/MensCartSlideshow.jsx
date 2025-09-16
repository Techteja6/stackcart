import React, { useState } from 'react';
import mensCartItems from '../data/mensCartItems';

const MensCartSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = mensCartItems.length;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  const currentItem = mensCartItems[currentIndex];

  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Men's Cart Slideshow</h2>

        <div className="relative">
          <img
            src={currentItem.image}
            alt={currentItem.name}
            className="w-full aspect-[3/4] object-top object-contain rounded-lg shadow"
          />

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-l hover:bg-gray-600"
          >
            &lt;
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-r hover:bg-gray-600"
          >
            &gt;
          </button>
        </div>

        {/* Product Info */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold">{currentItem.brand}</h3>
          <p className="text-gray-600">{currentItem.name}</p>
          <p className="text-indigo-600 font-bold mt-2">₹{currentItem.price}</p>
          <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default MensCartSlideshow;