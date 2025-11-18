import React, { useEffect } from 'react'
import { useCoffee } from '../contexts/CoffeeContext'

const CoffeeDesigner = () => {
    const { 
        coffeeOrder, 
        catalog, 
        loading, 
        error, 
        totalPrice,
        updateOrder, 
        calculatePrice, 
        submitOrder,
        loadCatalog 
    } = useCoffee()

    // Load catalog data when component mounts
    useEffect(() => {
        loadCatalog()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!coffeeOrder.customer_name || !coffeeOrder.coffee_bean) {
            alert('Please fill in customer name and select a coffee bean.')
            return
        }
        await submitOrder()
    }

    // Helper function to safely get numeric values
    const safeNumber = (value) => {
        if (value === null || value === undefined) return 0
        if (typeof value === 'object' && value.value !== undefined) {
            return typeof value.value === 'number' ? value.value : 0
        }
        return typeof value === 'number' ? value : 0
    }

    // Helper function to safely format currency
    const formatCurrency = (value) => {
        const numValue = safeNumber(value)
        return numValue.toFixed(2)
    }

    const renderPremiumBadge = (item) => {
        // Only show premium badge for items with premium_grade or high cup score
        if (item.premium_grade === 'true' || item.cup_score > 90) {
            return (
                <div className="badge-container">
                    <div className="badge-left">
                        <span className="badge premium">⭐ Premium</span>
                    </div>
                </div>
            )
        }
        return null
    }

    if (loading) {
        return (
            <div className="coffee-designer">
                <div className="loading-message">
                    <div className="loading-spinner"></div>
                    <p>Loading coffee options...</p>
                </div>
            </div>
        )
    }

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
                        <div className="option-grid">
                            {catalog.beans.map(bean => (
                                <div 
                                    key={bean.sys_id?.value || bean.sys_id} 
                                    className={`option-card ${coffeeOrder.coffee_bean === (bean.sys_id?.value || bean.sys_id) ? 'selected' : ''}`}
                                    onClick={() => updateOrder({ coffee_bean: bean.sys_id?.value || bean.sys_id })}
                                >
                                    {renderPremiumBadge(bean)}
                                    <div className="option-name">{bean.bean_name?.value || bean.bean_name}</div>
                                    <div className="option-description">
                                        {bean.origin_country?.value || bean.origin_country} • ${bean.price_per_pound?.value || bean.price_per_pound}/lb
                                        {bean.cup_score?.value && <div>Cup Score: {bean.cup_score.value}</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Drink Type Selection */}
                    <div className="section-card">
                        <div className="section-header">
                            <span className="section-icon">☕</span>
                            <h3 className="section-title">Type of Coffee Drink</h3>
                        </div>
                        <div className="option-grid">
                            {[
                                { value: 'espresso', label: 'Espresso ☕', desc: 'Pure, concentrated coffee shot', premium: true },
                                { value: 'americano', label: 'Americano', desc: 'Espresso with hot water' },
                                { value: 'cappuccino', label: 'Cappuccino', desc: 'Espresso, steamed milk, foam' },
                                { value: 'latte', label: 'Latte', desc: 'Espresso with steamed milk' },
                                { value: 'flat_white', label: 'Flat White', desc: 'Double shot, microfoam', premium: true },
                                { value: 'macchiato', label: 'Macchiato', desc: 'Espresso "marked" with foam' },
                                { value: 'cortado', label: 'Cortado', desc: 'Equal parts espresso & milk', premium: true },
                                { value: 'mocha', label: 'Mocha', desc: 'Chocolate espresso drink' },
                                { value: 'cold_brew', label: 'Cold Brew 🧊', desc: 'Slow-steeped, smooth' },
                                { value: 'iced_coffee', label: 'Iced Coffee', desc: 'Chilled coffee over ice' },
                                { value: 'frappuccino', label: 'Frappuccino', desc: 'Blended iced coffee' }
                            ].map(drink => (
                                <div 
                                    key={drink.value} 
                                    className={`option-card ${coffeeOrder.drink_type === drink.value ? 'selected' : ''}`}
                                    onClick={() => updateOrder({ drink_type: drink.value })}
                                >
                                    {drink.premium && (
                                        <div className="badge-container">
                                            <div className="badge-left">
                                                <span className="badge premium">⭐ Premium</span>
                                            </div>
                                        </div>
                                    )}
                                    <div className="option-name">{drink.label}</div>
                                    <div className="option-description">{drink.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Serving Size Selection */}
                    <div className="section-card">
                        <div className="section-header">
                            <span className="section-icon">📏</span>
                            <h3 className="section-title">Serving Size</h3>
                        </div>
                        <div className="option-grid">
                            {[
                                { value: 'piccolo', label: 'Piccolo', desc: '3oz - Perfect for tasting', premium: true },
                                { value: 'small', label: 'Small', desc: '8oz - Traditional cup' },
                                { value: 'medium', label: 'Medium', desc: '12oz - Most popular' },
                                { value: 'large', label: 'Large', desc: '16oz - Coffee lover size' },
                                { value: 'extra_large', label: 'Extra Large', desc: '20oz - Maximum experience', premium: true }
                            ].map(size => (
                                <div 
                                    key={size.value} 
                                    className={`option-card ${coffeeOrder.serving_size === size.value ? 'selected' : ''}`}
                                    onClick={() => updateOrder({ serving_size: size.value })}
                                >
                                    {size.premium && (
                                        <div className="badge-container">
                                            <div className="badge-left">
                                                <span className="badge premium">⭐ Premium</span>
                                            </div>
                                        </div>
                                    )}
                                    <div className="option-name">{size.label}</div>
                                    <div className="option-description">{size.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Milk Type Selection */}
                    <div className="section-card">
                        <div className="section-header">
                            <span className="section-icon">🥛</span>
                            <h3 className="section-title">Milk & Alternatives</h3>
                        </div>
                        <div className="option-grid">
                            <div 
                                className={`option-card ${!coffeeOrder.milk_type ? 'selected' : ''}`}
                                onClick={() => updateOrder({ milk_type: null })}
                            >
                                <div className="option-name">No Milk</div>
                                <div className="option-description">Black coffee</div>
                            </div>
                            {catalog.milkTypes.map(milk => {
                                const additionalCost = safeNumber(milk.additional_cost?.value || milk.additional_cost)
                                return (
                                    <div 
                                        key={milk.sys_id?.value || milk.sys_id} 
                                        className={`option-card ${coffeeOrder.milk_type === (milk.sys_id?.value || milk.sys_id) ? 'selected' : ''}`}
                                        onClick={() => updateOrder({ milk_type: milk.sys_id?.value || milk.sys_id })}
                                    >
                                        <div className="option-name">{milk.milk_name?.value || milk.milk_name}</div>
                                        <div className="option-description">
                                            {additionalCost > 0 && `+$${formatCurrency(additionalCost)}`}
                                            {milk.steaming_quality?.value && <div>Steams: {milk.steaming_quality.value}</div>}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Flavor Profiles */}
                    <div className="section-card">
                        <div className="section-header">
                            <span className="section-icon">🌈</span>
                            <h3 className="section-title">Flavor Profiles & Syrups</h3>
                        </div>
                        <div className="option-grid">
                            <div 
                                className={`option-card ${!coffeeOrder.flavor_profile ? 'selected' : ''}`}
                                onClick={() => updateOrder({ flavor_profile: null })}
                            >
                                <div className="option-name">No Flavor</div>
                                <div className="option-description">Pure coffee taste</div>
                            </div>
                            {catalog.flavorProfiles.map(flavor => {
                                const additionalCost = safeNumber(flavor.additional_cost?.value || flavor.additional_cost || 0.75)
                                return (
                                    <div 
                                        key={flavor.sys_id?.value || flavor.sys_id} 
                                        className={`option-card ${coffeeOrder.flavor_profile === (flavor.sys_id?.value || flavor.sys_id) ? 'selected' : ''}`}
                                        onClick={() => updateOrder({ flavor_profile: flavor.sys_id?.value || flavor.sys_id })}
                                    >
                                        <div className="option-name">{flavor.flavor_name?.value || flavor.flavor_name}</div>
                                        <div className="option-description">
                                            +${formatCurrency(additionalCost)}
                                            {flavor.intensity?.value && <div>{flavor.intensity.value} intensity</div>}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Temperature Preference */}
                    <div className="section-card">
                        <div className="section-header">
                            <span className="section-icon">🌡️</span>
                            <h3 className="section-title">Temperature Preference</h3>
                        </div>
                        <div className="option-grid">
                            {[
                                { value: 'extra_hot', label: 'Extra Hot', desc: '185°F+', premium: true },
                                { value: 'hot', label: 'Hot', desc: '165-175°F' },
                                { value: 'warm', label: 'Warm', desc: '145-155°F' },
                                { value: 'iced', label: 'Iced', desc: 'Over ice' },
                                { value: 'cold_brew', label: 'Cold Brew', desc: 'Smooth & cold', premium: true }
                            ].map(temp => (
                                <div 
                                    key={temp.value} 
                                    className={`option-card ${coffeeOrder.temperature_preference === temp.value ? 'selected' : ''}`}
                                    onClick={() => updateOrder({ temperature_preference: temp.value })}
                                >
                                    {temp.premium && (
                                        <div className="badge-container">
                                            <div className="badge-left">
                                                <span className="badge premium">⭐ Premium</span>
                                            </div>
                                        </div>
                                    )}
                                    <div className="option-name">{temp.label}</div>
                                    <div className="option-description">{temp.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Brewing Method */}
                    <div className="section-card">
                        <div className="section-header">
                            <span className="section-icon">⚗️</span>
                            <h3 className="section-title">Brewing Method</h3>
                        </div>
                        <div className="option-grid">
                            {[
                                { value: 'espresso', label: 'Espresso ☕', desc: 'High pressure extraction', premium: true },
                                { value: 'pour_over', label: 'Pour Over 🫖', desc: 'Hand-crafted precision', premium: true },
                                { value: 'french_press', label: 'French Press 🔄', desc: 'Full immersion brewing' },
                                { value: 'chemex', label: 'Chemex ⚗️', desc: 'Clean, bright flavors', premium: true },
                                { value: 'aeropress', label: 'AeroPress 💨', desc: 'Quick & smooth' },
                                { value: 'cold_brew', label: 'Cold Brew 🧊', desc: 'Slow-steeped overnight' },
                                { value: 'drip', label: 'Drip Coffee', desc: 'Classic automatic brew' }
                            ].map(method => (
                                <div 
                                    key={method.value} 
                                    className={`option-card ${coffeeOrder.brew_method === method.value ? 'selected' : ''}`}
                                    onClick={() => updateOrder({ brew_method: method.value })}
                                >
                                    {method.premium && (
                                        <div className="badge-container">
                                            <div className="badge-left">
                                                <span className="badge premium">⭐ Premium</span>
                                            </div>
                                        </div>
                                    )}
                                    <div className="option-name">{method.label}</div>
                                    <div className="option-description">{method.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Fine-Tuning Controls */}
                    <div className="section-card">
                        <div className="section-header">
                            <span className="section-icon">🎛️</span>
                            <h3 className="section-title">Fine-Tune Your Coffee</h3>
                        </div>
                        
                        <div className="control-group">
                            <label className="control-label">Sweetness Level (1-10)</label>
                            <div className="slider-container">
                                <input 
                                    type="range" 
                                    min="1" 
                                    max="10" 
                                    value={coffeeOrder.sweetness_level || 5}
                                    onChange={(e) => updateOrder({ sweetness_level: parseInt(e.target.value) })}
                                    className="coffee-slider"
                                />
                                <span className="slider-value">{coffeeOrder.sweetness_level || 5}</span>
                            </div>
                        </div>

                        <div className="control-group">
                            <label className="control-label">Espresso Shots (1-5)</label>
                            <div className="slider-container">
                                <input 
                                    type="range" 
                                    min="1" 
                                    max="5" 
                                    value={coffeeOrder.caffeine_shots || 2}
                                    onChange={(e) => updateOrder({ caffeine_shots: parseInt(e.target.value) })}
                                    className="coffee-slider"
                                />
                                <span className="slider-value">{coffeeOrder.caffeine_shots || 2}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Order Summary */}
            <div className="order-summary">
                <div className="summary-header">
                    <h2 className="summary-title">Your Coffee Order</h2>
                    <div className="coffee-visualization">☕</div>
                    <div className="total-price">${formatCurrency(totalPrice)}</div>
                </div>

                <div className="order-details">
                    {coffeeOrder.coffee_bean && (
                        <div className="detail-item">
                            <span className="detail-label">Bean:</span>
                            <span className="detail-value">
                                {catalog.beans.find(b => (b.sys_id?.value || b.sys_id) === coffeeOrder.coffee_bean)?.bean_name?.value || 
                                 catalog.beans.find(b => (b.sys_id?.value || b.sys_id) === coffeeOrder.coffee_bean)?.bean_name || 'Selected'}
                            </span>
                        </div>
                    )}
                    <div className="detail-item">
                        <span className="detail-label">Drink:</span>
                        <span className="detail-value">{coffeeOrder.drink_type || 'Cappuccino'}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Size:</span>
                        <span className="detail-value">{coffeeOrder.serving_size || 'Medium'}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Shots:</span>
                        <span className="detail-value">{coffeeOrder.caffeine_shots || 2}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Sweetness:</span>
                        <span className="detail-value">{coffeeOrder.sweetness_level || 5}/10</span>
                    </div>
                </div>

                {/* Customer Information Form */}
                <form onSubmit={handleSubmit} className="customer-form">
                    <h3 style={{marginBottom: '1rem', color: 'var(--coffee-primary)'}}>Customer Information</h3>
                    
                    <div className="form-group">
                        <label className="form-label">Name *</label>
                        <input 
                            type="text"
                            name="name"
                            value={coffeeOrder.customer_name || ''}
                            onChange={(e) => updateOrder({ customer_name: e.target.value })}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input 
                            type="email"
                            name="email"
                            value={coffeeOrder.customer_email || ''}
                            onChange={(e) => updateOrder({ customer_email: e.target.value })}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Special Instructions</label>
                        <textarea 
                            name="special_instructions"
                            value={coffeeOrder.special_instructions || ''}
                            onChange={(e) => updateOrder({ special_instructions: e.target.value })}
                            className="form-input form-textarea"
                            placeholder="Any special requests or notes..."
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button 
                        type="submit" 
                        className="coffee-button"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="loading-spinner"></span>
                                Placing Order...
                            </>
                        ) : (
                            `Place Order - $${formatCurrency(totalPrice)}`
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CoffeeDesigner