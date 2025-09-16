import React, { useState } from "react";
import FakeRazorpayModal from "./FakeRazorpayModal"; // Make sure this file exists

const CheckoutButton = ({ amount }) => {
  const [showModal, setShowModal] = useState(false);

  const handleMockCheckout = () => {
    setShowModal(true);
  };

  return (
    <>
      <button
        onClick={handleMockCheckout}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md mt-4"
      >
        Checkout ₹{amount}
      </button>

      {showModal && (
        <FakeRazorpayModal amount={amount} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default CheckoutButton;