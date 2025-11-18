import React, { useEffect, useState } from 'react';
import { useCoffee } from '../contexts/CoffeeContext.jsx';
import { display, value } from '../utils/fields.js';

export default function CoffeeDesigner() {
  const { 
    coffeeOrder, 
    catalog, 
    updateOrder, 
    totalPrice, 
    submitOrder, 
    loading, 
    error 
  } = useCoffee();

  const [showSuccess, setShowSuccess] = useState(false);

  const handleOptionSelect = (field, selectedValue) => {
    updateOrder({ [field]: selectedValue });
  };

  const handleSliderChange = (field, newValue) => {
    updateOrder({ [field]: parseInt(newValue) });
  };

  const handleSubmit = async () => {
    if (!coffeeOrder.customer_name || !coffeeOrder.coffee_bean) {
      alert('Please enter your name and select a coffee bean');
      return;
    }

    const result = await submitOrder();
    if (result) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  const renderBeanOptions = () => (
    <div className="option-grid">
      {catalog.beans.map(bean => (
        <div 
          key={value(bean.sys_id)}
          className={`option-card ${coffeeOrder.coffee_bean === value(bean.sys_id) ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('coffee_bean', value(bean.sys_id))}
        >
          {display(bean.premium_grade) === 'true' && <div className="premium-badge">Premium</div>}
          <div className="option-name">{display(bean.bean_name)}</div>
          <div className="option-description">{display(bean.origin_country)}</div>
          <div className="option-description">{display(bean.roast_level)}</div>
        </div>
      ))}
    </div>
  );

  const renderMilkOptions = () => (
    <div className="option-grid">
      {catalog.milkTypes.map(milk => (
        <div 
          key={value(milk.sys_id)}
          className={`option-card ${coffeeOrder.milk_type === value(milk.sys_id) ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('milk_type', value(milk.sys_id))}
        >
          <div className="option-name">{display(milk.milk_name)}</div>
          <div className="option-description">{display(milk.category)}</div>
          {display(milk.vegan) === 'true' && <div className="option-description">🌱 Vegan</div>}
        </div>
      ))}
    </div>
  );

  const renderFlavorOptions = () => (
    <div className="option-grid">
      {catalog.flavorProfiles.map(flavor => (
        <div 
          key={value(flavor.sys_id)}
          className={`option-card ${coffeeOrder.flavor_profile === value(flavor.sys_id) ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('flavor_profile', value(flavor.sys_id))}
        >
          <div className="option-name">{display(flavor.flavor_name)}</div>
          <div className="option-description">{display(flavor.category)}</div>
          <div className="option-description">{display(flavor.intensity)}</div>
        </div>
      ))}
    </div>
  );

  const renderBrewingOptions = () => {
    const methods = [
      { value: 'espresso', label: 'Espresso', icon: '☕' },
      { value: 'pour_over', label: 'Pour Over', icon: '🫖' },
      { value: 'french_press', label: 'French Press', icon: '🔄' },
      { value: 'chemex', label: 'Chemex', icon: '⚗️' },
      { value: 'aeropress', label: 'AeroPress', icon: '💨' },
      { value: 'cold_brew', label: 'Cold Brew', icon: '🧊' }
    ];

    return (
      <div className="option-grid">
        {methods.map(method => (
          <div 
            key={method.value}
            className={`option-card ${coffeeOrder.brew_method === method.value ? 'selected' : ''}`}
            onClick={() => handleOptionSelect('brew_method', method.value)}
          >
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{method.icon}</div>
            <div className="option-name">{method.label}</div>
          </div>
        ))}
      </div>
    );
  };

  const renderServingSizes = () => {
    const sizes = [
      { value: 'piccolo', label: 'Piccolo', size: '3oz' },
      { value: 'cortado', label: 'Cortado', size: '4oz' },
      { value: 'cappuccino', label: 'Cappuccino', size: '6oz' },
      { value: 'flat_white', label: 'Flat White', size: '6oz' },
      { value: 'latte', label: 'Latte', size: '8oz' },
      { value: 'americano', label: 'Americano', size: '8oz' },
      { value: 'large', label: 'Large', size: '12oz' },
      { value: 'extra_large', label: 'Extra Large', size: '16oz' }
    ];

    return (
      <div className="option-grid">
        {sizes.map(size => (
          <div 
            key={size.value}
            className={`option-card ${coffeeOrder.serving_size === size.value ? 'selected' : ''}`}
            onClick={() => handleOptionSelect('serving_size', size.value)}
          >
            <div className="option-name">{size.label}</div>
            <div className="option-description">{size.size}</div>
          </div>
        ))}
      </div>
    );
  };

  const renderTemperatureOptions = () => {
    const temps = [
      { value: 'extra_hot', label: 'Extra Hot', temp: '185°F+' },
      { value: 'hot', label: 'Hot', temp: '165-175°F' },
      { value: 'warm', label: 'Warm', temp: '145-155°F' },
      { value: 'iced', label: 'Iced', temp: 'Cold' },
      { value: 'cold_brew', label: 'Cold Brew', temp: 'Extra Cold' }
    ];

    return (
      <div className="option-grid">
        {temps.map(temp => (
          <div 
            key={temp.value}
            className={`option-card ${coffeeOrder.temperature_preference === temp.value ? 'selected' : ''}`}
            onClick={() => handleOptionSelect('temperature_preference', temp.value)}
          >
            <div className="option-name">{temp.label}</div>
            <div className="option-description">{temp.temp}</div>
          </div>
        ))}
      </div>
    );
  };

  const getSelectedBeanName = () => {
    if (!coffeeOrder.coffee_bean) return 'Select Bean';
    const bean = catalog.beans.find(b => value(b.sys_id) === coffeeOrder.coffee_bean);
    return bean ? display(bean.bean_name) : 'Select Bean';
  };

  return (
    <div className="coffee-designer">
      <div className="designer-left">
        <div className="customization-sections">
          {/* Coffee Bean Selection */}
          <div className="section-card">
            <div className="section-header">
              <span className="section-icon">🫘</span>
              <h3 className="section-title">Premium Coffee Beans</h3>
            </div>
            {renderBeanOptions()}
          </div>

          {/* Brewing Method */}
          <div className="section-card">
            <div className="section-header">
              <span className="section-icon">⚗️</span>
              <h3 className="section-title">Brewing Method</h3>
            </div>
            {renderBrewingOptions()}
          </div>

          {/* Serving Size */}
          <div className="section-card">
            <div className="section-header">
              <span className="section-icon">☕</span>
              <h3 className="section-title">Serving Size</h3>
            </div>
            {renderServingSizes()}
          </div>

          {/* Temperature */}
          <div className="section-card">
            <div className="section-header">
              <span className="section-icon">🌡️</span>
              <h3 className="section-title">Temperature</h3>
            </div>
            {renderTemperatureOptions()}
          </div>

          {/* Milk Options */}
          <div className="section-card">
            <div className="section-header">
              <span className="section-icon">🥛</span>
              <h3 className="section-title">Milk & Alternatives</h3>
            </div>
            {renderMilkOptions()}
          </div>

          {/* Flavor Profiles */}
          <div className="section-card">
            <div className="section-header">
              <span className="section-icon">🍯</span>
              <h3 className="section-title">Flavor Profiles</h3>
            </div>
            {renderFlavorOptions()}
          </div>

          {/* Advanced Controls */}
          <div className="section-card">
            <div className="section-header">
              <span className="section-icon">🎛️</span>
              <h3 className="section-title">Fine Tuning</h3>
            </div>
            
            <div className="control-group">
              <label className="control-label">
                Sweetness Level: {coffeeOrder.sweetness_level}/10
              </label>
              <div className="slider-container">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={coffeeOrder.sweetness_level}
                  onChange={(e) => handleSliderChange('sweetness_level', e.target.value)}
                  className="coffee-slider"
                />
                <span className="slider-value">{coffeeOrder.sweetness_level}</span>
              </div>
            </div>

            <div className="control-group">
              <label className="control-label">
                Espresso Shots: {coffeeOrder.caffeine_shots}
              </label>
              <div className="slider-container">
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={coffeeOrder.caffeine_shots}
                  onChange={(e) => handleSliderChange('caffeine_shots', e.target.value)}
                  className="coffee-slider"
                />
                <span className="slider-value">{coffeeOrder.caffeine_shots}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="order-summary">
        <div className="summary-header">
          <h2 className="summary-title">Your Coffee Creation</h2>
          <div className="coffee-visualization">
            ☕
          </div>
          <div className="total-price">${totalPrice.toFixed(2)}</div>
        </div>

        <div className="order-details">
          <div className="detail-item">
            <span className="detail-label">Bean:</span>
            <span className="detail-value">{getSelectedBeanName()}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Method:</span>
            <span className="detail-value">{coffeeOrder.brew_method.replace('_', ' ')}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Size:</span>
            <span className="detail-value">{coffeeOrder.serving_size.replace('_', ' ')}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Temperature:</span>
            <span className="detail-value">{coffeeOrder.temperature_preference.replace('_', ' ')}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Shots:</span>
            <span className="detail-value">{coffeeOrder.caffeine_shots}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Sweetness:</span>
            <span className="detail-value">{coffeeOrder.sweetness_level}/10</span>
          </div>
        </div>

        {/* Customer Information */}
        <form className="customer-form">
          <div className="form-group">
            <label className="form-label">Your Name *</label>
            <input
              type="text"
              className="form-input"
              value={coffeeOrder.customer_name}
              onChange={(e) => updateOrder({ customer_name: e.target.value })}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              value={coffeeOrder.customer_email}
              onChange={(e) => updateOrder({ customer_email: e.target.value })}
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Special Instructions</label>
            <textarea
              className="form-input form-textarea"
              value={coffeeOrder.special_instructions}
              onChange={(e) => updateOrder({ special_instructions: e.target.value })}
              placeholder="Any special requests or notes..."
            />
          </div>
        </form>

        {error && <div className="error-message">{error}</div>}
        {showSuccess && <div className="success-message">Order placed successfully! ☕</div>}

        <button 
          className="coffee-button"
          onClick={handleSubmit}
          disabled={loading || !coffeeOrder.customer_name || !coffeeOrder.coffee_bean}
        >
          {loading ? <span className="loading-spinner"></span> : '☕ Place Order'}
        </button>
      </div>
    </div>
  );
}