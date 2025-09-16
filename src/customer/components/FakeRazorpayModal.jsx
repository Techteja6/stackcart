import React from 'react';

const FakeRazorpayModal = ({ amount, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
        <h2 className="text-xl font-bold text-indigo-600 mb-4">Razorpay Checkout</h2>
        <p className="text-gray-700 mb-2">Amount: ₹{amount}</p>
        <p className="text-sm text-gray-500 mb-4">This is a demo modal for UI testing only.</p>
        <button
          onClick={onClose}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FakeRazorpayModal;