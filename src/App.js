import React from 'react';
import './App.css';
import HomePage from './customer/pages/HomePage/HomePage';
import EnhancedNavigation from './customer/components/Navigation/EnhancedNavigation';
import { CartProvider } from './context/CartContext';

// 🧪 Bonus Debug Tip: Check if components are valid
console.log("🔍 HomePage type:", typeof HomePage);
console.log("🔍 EnhancedNavigation type:", typeof EnhancedNavigation);

function App() {
  return (
    <CartProvider>
      <div>
        <EnhancedNavigation />
        <HomePage />
      </div>
    </CartProvider>
  );
}

export default App;