import React, { useContext } from 'react';
import ImageCarousel from '../../components/ImageCarousel';
import MensCartSection from '../../components/MensCartSection';
import WomensKurtaSection from '../../components/WomensKurtaSection';
import ShoesSection from '../../components/ShoesSection';
import CheckoutButton from '../../components/CheckoutButton';
import Footer from '../../components/Footer';
import { CartContext } from '../../../context/CartContext';

const HomePage = () => {
  const { cartItems, addToCart } = useContext(CartContext);

  const totalAmount = Array.isArray(cartItems) && cartItems.length > 0
    ? cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0)
    : 0;

  console.log("🛒 Cart contents:", cartItems);

  return (
    <div>
      {/* ✅ Hero Carousel */}
      <ImageCarousel />

      {/* ✅ About Section */}
      <section id="about" className="bg-white py-16 px-6 md:px-20">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6 tracking-tight">
          <span className="text-indigo-600">About</span> StackCart
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto animate-fade-in">
          <span className="font-serif italic">
            StackCart is a modern e-commerce platform designed to provide a seamless online shopping experience across diverse product categories, including men’s fashion, women’s wear, kids’ clothing, and accessories. With a focus on usability, speed, and responsive design, StackCart combines a clean interface with robust functionality to meet the evolving needs of digital retail.
          </span>
        </p>
      </section>

      {/* ✅ Men's Section */}
      <section id="men">
        <MensCartSection addToCart={addToCart} />
      </section>

      {/* ✅ Women's Section */}
      <section id="women">
        <WomensKurtaSection addToCart={addToCart} />
      </section>

      {/* ✅ Shoes Section */}
      <section id="shoes">
        <ShoesSection addToCart={addToCart} />
      </section>

      {/* ✅ Cart & Checkout Section */}
      <section id="cart" className="mt-10 p-6 border rounded-lg shadow-md bg-gray-50 mx-6 md:mx-20">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {Array.isArray(cartItems) && cartItems.length > 0 ? (
          <>
            <ul className="mb-4">
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between py-2 border-b">
                  <span>{item.name || "Unnamed Item"}</span>
                  <span>₹{item.price || 0} × {item.quantity || 1}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-2">Total: ₹{totalAmount}</h3>
            <CheckoutButton amount={totalAmount} />
          </>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </section>

      {/* ✅ Stores Section */}
      <section id="stores" className="bg-gray-50 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Stores</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          StackCart has physical stores in major cities across India and Canada. Visit us for exclusive in-store deals, personalized styling, and premium collections.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-lg font-semibold text-indigo-600">Hyderabad</h3>
            <p className="text-sm text-gray-600">Gachibowli, Inorbit Mall</p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-lg font-semibold text-indigo-600">London</h3>
            <p className="text-sm text-gray-600">Canary Westfield Mall</p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-lg font-semibold text-indigo-600">Bangalore</h3>
            <p className="text-sm text-gray-600">Phoenix MarketCity</p>
          </div>
        </div>
      </section>

      {/* ✅ Razorpay Test Button */}
      <section className="bg-white p-6 mx-6 md:mx-20 mt-10 border rounded shadow">
        <h2 className="text-xl font-bold mb-4">Test Razorpay Button</h2>
        <CheckoutButton amount={1000} />
      </section>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
