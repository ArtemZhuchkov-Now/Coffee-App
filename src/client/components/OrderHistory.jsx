import React, { useEffect } from 'react';
import { useCoffee } from '../contexts/CoffeeContext.jsx';
import { display, value } from '../utils/fields.js';

export default function OrderHistory() {
  const { orders, loadOrders, loading } = useCoffee();

  useEffect(() => {
    loadOrders();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: '#f39c12',
      confirmed: '#3498db',
      preparing: '#e67e22',
      ready: '#27ae60',
      completed: '#2ecc71',
      cancelled: '#e74c3c'
    };
    return colors[status] || '#95a5a6';
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div className="loading-spinner" style={{ margin: '0 auto' }}></div>
        <p>Loading orders...</p>
      </div>
    );
  }

  return (
    <div className="order-history">
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        fontFamily: 'Playfair Display, serif',
        color: 'var(--coffee-primary)'
      }}>
        Order History
      </h2>
      
      {orders.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '3rem',
          color: 'var(--coffee-primary)'
        }}>
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>☕</span>
          <p>No orders yet. Start designing your perfect coffee!</p>
        </div>
      ) : (
        <div style={{ 
          display: 'grid', 
          gap: '1.5rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {orders.map(order => (
            <div 
              key={value(order.sys_id)}
              className="section-card"
              style={{ padding: '1.5rem' }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <h3 style={{ color: 'var(--coffee-primary)' }}>
                  Order {display(order.order_number)}
                </h3>
                <span 
                  style={{ 
                    backgroundColor: getStatusColor(display(order.order_status)),
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    textTransform: 'capitalize'
                  }}
                >
                  {display(order.order_status)}
                </span>
              </div>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div>
                  <strong>Customer:</strong> {display(order.customer_name)}
                </div>
                <div>
                  <strong>Total:</strong> ${display(order.total_price)}
                </div>
                <div>
                  <strong>Brewing Method:</strong> {display(order.brew_method).replace('_', ' ')}
                </div>
                <div>
                  <strong>Serving Size:</strong> {display(order.serving_size).replace('_', ' ')}
                </div>
              </div>
              
              <div style={{ 
                fontSize: '0.9rem', 
                color: 'var(--coffee-primary)',
                borderTop: '1px solid var(--coffee-light)',
                paddingTop: '0.75rem'
              }}>
                <strong>Ordered:</strong> {formatDate(display(order.order_date))}
                {display(order.special_instructions) && (
                  <div style={{ marginTop: '0.5rem' }}>
                    <strong>Special Instructions:</strong> {display(order.special_instructions)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}