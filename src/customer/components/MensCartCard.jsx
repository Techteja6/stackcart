import React from 'react';

const MensCartCard = ({ item }) => {
  if (!item) return null; // Prevent crash if item is undefined

  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300">
      <img
        src={item.image}
        alt={item.name}
        className="w-full aspect-[3/4] object-top object-contain"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.brand}</h3>
        <p className="text-gray-600 text-sm">{item.name}</p>
        <p className="mt-2 text-indigo-600 font-bold">₹{item.price}</p>
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MensCartCard;