import React, { useEffect } from 'react';
import { CoffeeProvider, useCoffee } from './contexts/CoffeeContext.jsx';
import CoffeeDesigner from './components/CoffeeDesigner.jsx';
import OrderHistory from './components/OrderHistory.jsx';
import Navigation from './components/Navigation.jsx';
import './app.css';

function AppContent() {
  const { currentView, loadCatalog } = useCoffee();

  useEffect(() => {
    loadCatalog();
  }, []);

  const renderView = () => {
    switch(currentView) {
      case 'orders':
        return <OrderHistory />;
      case 'designer':
      default:
        return <CoffeeDesigner />;
    }
  };

  return (
    <div className="coffee-app">
      <header className="coffee-header">
        <div className="header-content">
          <h1 className="coffee-title">
            <span className="coffee-icon">☕</span>
            Coffee Designer
          </h1>
          <p className="coffee-subtitle">Craft Your Perfect Cup</p>
        </div>
        <Navigation />
      </header>
      
      <main className="coffee-main">
        {renderView()}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <CoffeeProvider>
      <AppContent />
    </CoffeeProvider>
  );
}