import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CoffeeService } from '../services/CoffeeService.js';

const CoffeeContext = createContext();

const initialState = {
  currentView: 'designer',
  coffeeOrder: {
    customer_name: '',
    customer_email: '',
    coffee_bean: null,
    drink_type: 'cappuccino',
    serving_size: 'medium',
    milk_type: null,
    flavor_profile: null,
    temperature_preference: 'hot',
    grind_size: 'medium',
    brew_method: 'espresso',
    sweetness_level: 5,
    caffeine_shots: 2,
    special_instructions: ''
  },
  catalog: {
    beans: [],
    milkTypes: [],
    flavorProfiles: [],
    addins: []
  },
  orders: [],
  loading: false,
  error: null,
  totalPrice: 0
};

function coffeeReducer(state, action) {
  switch (action.type) {
    case 'SET_VIEW':
      return { ...state, currentView: action.payload };
    case 'UPDATE_ORDER':
      return { 
        ...state, 
        coffeeOrder: { ...state.coffeeOrder, ...action.payload } 
      };
    case 'SET_CATALOG':
      return { 
        ...state, 
        catalog: { ...state.catalog, ...action.payload } 
      };
    case 'SET_ORDERS':
      return { ...state, orders: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_PRICE':
      return { ...state, totalPrice: action.payload };
    case 'RESET_ORDER':
      return { ...state, coffeeOrder: initialState.coffeeOrder, totalPrice: 0 };
    default:
      return state;
  }
}

export function CoffeeProvider({ children }) {
  const [state, dispatch] = useReducer(coffeeReducer, initialState);
  const service = new CoffeeService();

  const navigate = (view) => {
    dispatch({ type: 'SET_VIEW', payload: view });
    window.location.hash = view;
  };

  const updateOrder = (updates) => {
    dispatch({ type: 'UPDATE_ORDER', payload: updates });
  };

  const calculatePrice = (order) => {
    let total = 6.50; // Base price
    
    // Add premium bean cost (simplified calculation)
    if (order.coffee_bean) {
      const bean = state.catalog.beans.find(b => b.sys_id?.value === order.coffee_bean);
      if (bean && bean.premium_grade?.value === 'true') {
        total += 2.50;
      }
    }

    // Serving size multiplier
    const sizeMultipliers = {
      small: 0.8, medium: 1.0, large: 1.4, extra_large: 1.8
    };
    const multiplier = sizeMultipliers[order.serving_size] || 1.0;
    total *= multiplier;

    // Drink type adjustments
    const drinkAdjustments = {
      espresso: -1.50, // Less volume
      americano: 0,
      cappuccino: 0.50,
      latte: 1.00,
      flat_white: 1.25,
      macchiato: 0.75,
      cortado: 0.50,
      mocha: 2.00, // Chocolate addition
      gibraltar: 1.00,
      red_eye: 1.50 // Extra shot included
    };
    total += drinkAdjustments[order.drink_type] || 0;

    // Extra shots
    if (order.caffeine_shots > 2) {
      total += (order.caffeine_shots - 2) * 0.75;
    }

    // Milk type cost
    if (order.milk_type) {
      const milk = state.catalog.milkTypes.find(m => m.sys_id?.value === order.milk_type);
      if (milk && milk.additional_cost?.value) {
        total += parseFloat(milk.additional_cost.value);
      }
    }

    // Flavor profile cost
    if (order.flavor_profile) {
      const flavor = state.catalog.flavorProfiles.find(f => f.sys_id?.value === order.flavor_profile);
      if (flavor && flavor.additional_cost?.value) {
        total += parseFloat(flavor.additional_cost.value);
      }
    }

    // Specialty brewing methods
    const brewCosts = {
      chemex: 2.00, aeropress: 2.00, cold_brew: 1.50, pour_over: 1.00
    };
    total += brewCosts[order.brew_method] || 0;

    dispatch({ type: 'SET_PRICE', payload: total });
    return total;
  };

  const loadCatalog = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const [beans, milkTypes, flavorProfiles, addins] = await Promise.all([
        service.getCoffeeBeans(),
        service.getMilkTypes(),
        service.getFlavorProfiles(),
        service.getPremiumAddins()
      ]);
      
      dispatch({ 
        type: 'SET_CATALOG', 
        payload: { beans, milkTypes, flavorProfiles, addins } 
      });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const submitOrder = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const result = await service.createOrder(state.coffeeOrder);
      dispatch({ type: 'RESET_ORDER' });
      return result;
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const loadOrders = async () => {
    try {
      const orders = await service.getOrders();
      dispatch({ type: 'SET_ORDERS', payload: orders });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'designer';
      dispatch({ type: 'SET_VIEW', payload: hash });
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    calculatePrice(state.coffeeOrder);
  }, [state.coffeeOrder, state.catalog.beans, state.catalog.milkTypes, state.catalog.flavorProfiles]);

  const value = {
    ...state,
    navigate,
    updateOrder,
    loadCatalog,
    submitOrder,
    loadOrders,
    calculatePrice
  };

  return (
    <CoffeeContext.Provider value={value}>
      {children}
    </CoffeeContext.Provider>
  );
}

export const useCoffee = () => {
  const context = useContext(CoffeeContext);
  if (!context) {
    throw new Error('useCoffee must be used within CoffeeProvider');
  }
  return context;
};