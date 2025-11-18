import React from 'react';
import { useCoffee } from '../contexts/CoffeeContext.jsx';

export default function Navigation() {
  const { currentView, navigate } = useCoffee();

  return (
    <nav className="coffee-navigation">
      <button 
        className={`nav-button ${currentView === 'designer' ? 'active' : ''}`}
        onClick={() => navigate('designer')}
      >
        ☕ Design Coffee
      </button>
      <button 
        className={`nav-button ${currentView === 'orders' ? 'active' : ''}`}
        onClick={() => navigate('orders')}
      >
        📋 Order History
      </button>
    </nav>
  );
}