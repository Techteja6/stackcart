import React, { useRef } from 'react';
import mensCartItems from '../data/mensCartItems';

const MensCartSection = ({ addToCart }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-12 px-4 md:px-6 w-full">
      <h2 className="text-3xl font-bold text-center mb-6">Men's Cart</h2>
      <p className="text-center text-gray-600 mb-10">
        Explore our latest collection of men's kurtas.
      </p>

      {/* Scrollable Section with Centered Buttons */}
      <div className="relative w-full overflow-hidden">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-2xl px-3 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          &lt;
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-2xl px-3 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          &gt;
        </button>

        {/* Scrollable Product List */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-10"
        >
          {mensCartItems.map((item) => (
            <div
              key={item.id}
              className="min-w-[240px] flex-shrink-0 flex flex-col items-center border rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[220px] h-[280px] object-contain p-2 rounded-lg bg-white"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{item.brand}</h3>
                <p className="text-gray-600 text-sm">{item.name}</p>
                <p className="mt-2 text-indigo-600 font-bold">₹{item.price}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MensCartSection;