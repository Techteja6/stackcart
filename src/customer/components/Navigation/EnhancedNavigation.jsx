import React, { useState, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { CartContext } from '../../../context/CartContext';

const EnhancedNavigation = () => {
  const [modalType, setModalType] = useState('');
  const [showModal, setShowModal] = useState(false);
  const {
    cartItems,
    totalPrice,
    updateQuantity,
    removeFromCart,
    setCartItems,
  } = useContext(CartContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const validUser = {
    email: 'tejavejju17@gmail.com',
    password: 'stack123',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    console.log("🛒 Cart Items Updated:", cartItems);
  }, [cartItems]);

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    if (formData.email === validUser.email && formData.password === validUser.password) {
      alert('✅ Login successful!');
      closeModal();
    } else {
      alert('❌ Invalid email or password');
    }
  };

  const handleCreateAccountSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      alert('❌ All fields are required');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('❌ Passwords do not match');
      return;
    }
    alert(`✅ Account created for ${formData.name}`);
    closeModal();
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) {
      alert('❌ Please enter your email');
      return;
    }
    alert(`✅ Password reset link sent to ${formData.email}`);
    closeModal();
  };

  const handleSignIn = () => {
    setModalType('signin');
    setFormData({ email: '', password: '' });
    setShowModal(true);
  };

  const handleCreateAccount = () => {
    setModalType('create');
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setShowModal(true);
  };

  const handleCartClick = () => {
    setModalType('cart');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType('');
  };

  const renderModalContent = () => {
    if (modalType === 'signin') {
      return (
        <>
          <form onSubmit={handleSignInSubmit} className="space-y-4 text-left">
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="w-full border p-2 rounded" required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} className="w-full border p-2 rounded" required />
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">Sign In</button>
          </form>
          <button onClick={() => { setModalType('forgot'); setFormData({ email: '' }); }} className="mt-4 text-sm text-indigo-600 hover:underline">Forgot Password?</button>
        </>
      );
    }

    if (modalType === 'forgot') {
      return (
        <form onSubmit={handleForgotPasswordSubmit} className="space-y-4 text-left">
          <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} className="w-full border p-2 rounded" required />
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">Send Reset Link</button>
        </form>
      );
    }

    if (modalType === 'create') {
      return (
        <form onSubmit={handleCreateAccountSubmit} className="space-y-4 text-left">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} className="w-full border p-2 rounded" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="w-full border p-2 rounded" required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} className="w-full border p-2 rounded" required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} className="w-full border p-2 rounded" required />
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">Create Account</button>
        </form>
      );
    }

    if (modalType === 'cart') {
      return (
        <div className="text-left space-y-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.id || Math.random()} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <span className="font-semibold">{item.name || 'Unnamed Product'}</span>
                    <div className="text-sm text-gray-500">₹{item.price || 0} × {item.quantity}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-12 border rounded text-center"
                    />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:underline text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="pt-4 font-semibold text-right">
                Total: ₹{totalPrice}
              </div>
              <button
                onClick={() => setCartItems([])}
                className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
              >
                Clear Cart
              </button>
            </>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <Helmet>
        <title>StackCart – Fashion That Wins</title>
        <meta name="description" content="Shop the latest fashion for men and women at StackCart." />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <header className="w-full sticky top-0 z-50">
        <div className="bg-blue-600 text-white text-center py-2 text-sm md:text-base font-medium tracking-wide">
          Get free delivery on orders over ₹1000
        </div>

        <nav className="flex items-center justify-between px-4 md:px-10 py-4 bg-white shadow-md text-gray-800">
          <div
            onClick={scrollToTop}
            className="text-xl font-bold tracking-wide text-indigo-600 cursor-pointer hover:text-indigo-700 transition duration-200"
          >
            StackCart
          </div>

          <ul className="flex gap-6 text-sm md:text-base font-semibold">
            <li><a href="#women" className="hover:text-indigo-600">Women</a></li>
            <li><a href="#men" className="hover:text-indigo-600">Men</a></li>
            <li><a href="#about" className="hover:text-indigo-600">Company</a></li>
            <li><a href="#stores" className="hover:text-indigo-600">Stores</a></li>
          </ul>

          <div className="flex items-center gap-4 text-sm md:text-base">
            <button onClick={handleSignIn} className="hover:text-indigo-600 transition duration-200">Sign in</button>
            <button onClick={handleCreateAccount} className="hover:text-indigo-600 transition duration-200">Create account</button>
            <select className="bg-transparent border-none text-gray-600 focus:outline-none">
              <option value="INR">INR ₹</option>
              <option value="USD">USD $</option>
            </select>
                        <span onClick={handleCartClick} className="relative text-xl cursor-pointer">
              🛍️
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </span>
          </div>
        </nav>

        {showModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white p-6 rounded shadow-lg max-w-md w-full text-center">
              <h2 className="text-lg font-bold mb-4">StackCart</h2>
              {renderModalContent()}
              <button
                onClick={closeModal}
                className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default EnhancedNavigation;