# ☕ Coffee Designer - Premium Artisan Coffee Experience

<div align="center">

![Coffee Designer Logo](https://img.shields.io/badge/☕-Coffee%20Designer-8B4513?style=for-the-badge&logoColor=white)

[![ServiceNow](https://img.shields.io/badge/ServiceNow-Yokohama-00A1C9?style=flat-square&logo=servicenow)](https://www.servicenow.com/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Fluent%20DSL-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-UNLICENSED-red?style=flat-square)](LICENSE)

**Craft Your Perfect Cup with Professional Barista-Level Customization**

*A premium coffee ordering application built on ServiceNow that allows users to customize every aspect of their coffee experience including bean selection, milk types, flavors, temperature preferences, and specialty add-ins for the ultimate personalized coffee creation.*

[🚀 Live Demo](#-live-demo) • [✨ Features](#-features) • [🛠️ Installation](#️-installation) • [📖 Documentation](#-documentation)

</div>

---

## 🌟 Overview

Coffee Designer is a sophisticated ServiceNow application that transforms the coffee ordering experience into an interactive, visual journey. Built with modern React components and advanced ServiceNow Fluent APIs, it offers professional barista-level customization with an intuitive, coffee-themed interface.

### 🎯 Key Highlights

- **🎨 Interactive Design**: Beautiful coffee-themed UI with animations and real-time visualizations
- **☕ Premium Catalog**: Curated selection of luxury coffee beans from around the world
- **⚗️ Professional Methods**: Support for 6+ brewing methods with intelligent validation
- **💰 Smart Pricing**: Dynamic pricing engine with real-time calculations
- **📱 Responsive**: Fully responsive design that works on all devices
- **🔄 Real-time**: Live order tracking and status management

---

## ✨ Features

### 🫘 **Premium Coffee Bean Selection**
- **Luxury Beans**: Jamaican Blue Mountain, Hawaiian Kona, Ethiopian Geisha, Panama Geisha Auction Lot
- **Detailed Profiles**: Origin country, processing method, roast level, cup scores up to 95.5
- **Premium Indicators**: Visual badges for premium and single-origin beans
- **Price Range**: $67.99 - $199.99 per pound for championship-winning beans

### ⚗️ **Professional Brewing Methods**
- **6+ Methods**: Espresso, Pour Over, French Press, Chemex, AeroPress, Cold Brew
- **Smart Validation**: Prevents incompatible combinations (e.g., cold brew + hot temperature)
- **Premium Surcharges**: Automatic pricing for specialty brewing methods
- **Grind Recommendations**: Expert suggestions for optimal extraction

### 🥛 **Milk & Alternative Options**
- **Diverse Selection**: Traditional dairy and premium plant-based alternatives
- **Dietary Labels**: Clear vegan, organic, and allergen indicators
- **Texture Profiles**: From light & smooth to rich & velvety
- **Steaming Quality**: Professional ratings for barista techniques

### 🌡️ **Precision Controls**
- **Temperature Options**: Extra Hot (185°F+) to Cold Brew
- **Serving Sizes**: Piccolo (3oz) to Extra Large (16oz)
- **Sweetness Scale**: 1-10 precision sweetness control
- **Espresso Shots**: 1-5 shots with premium pricing

### 🎨 **Advanced UI Features**
- **Real-time Visualization**: Animated coffee cup with steam effects
- **Interactive Sliders**: Smooth controls for fine-tuning preferences
- **State Management**: Advanced React Context with useReducer patterns
- **Loading States**: Coffee-themed animations and feedback
- **Error Handling**: Graceful error boundaries with user-friendly messages

---

## 🛠️ Technology Stack

### **Frontend**
- **React 18.2.0** - Modern component architecture with hooks
- **Context API** - Advanced state management with useReducer
- **CSS3** - Custom animations and coffee-themed styling
- **Responsive Design** - Mobile-first approach with CSS Grid/Flexbox

### **Backend**
- **ServiceNow Platform** - Enterprise-grade cloud platform
- **Fluent DSL** - TypeScript-based metadata definition language
- **Table API** - RESTful integration with proper authentication
- **Business Rules** - Server-side validation and price calculation

### **Development**
- **ServiceNow SDK 4.0.2** - Official development toolkit
- **ESLint** - Code quality and consistency
- **Now CLI** - Build and deployment automation

---

## 🚀 Live Demo

**Main Application**: [Coffee Designer Interface](https://demoalectriallwfzu132799.service-now.com/x_snc_coffee_desig_designer.do)

**Data Management**:
- [Coffee Beans Catalog](https://demoalectriallwfzu132799.service-now.com/x_snc_coffee_desig_coffee_beans_list.do?sysparm_clear_stack=true)
- [Coffee Orders](https://demoalectriallwfzu132799.service-now.com/x_snc_coffee_desig_coffee_orders_list.do?sysparm_clear_stack=true)
- [Milk Types & Alternatives](https://demoalectriallwfzu132799.service-now.com/x_snc_coffee_desig_milk_types_list.do?sysparm_clear_stack=true)
- [Flavor Profiles](https://demoalectriallwfzu132799.service-now.com/x_snc_coffee_desig_flavor_profiles_list.do?sysparm_clear_stack=true)

---

## 🛠️ Installation

### **Prerequisites**
- ServiceNow Developer Instance (Yokohama release or later)
- ServiceNow SDK 4.0.2+
- Node.js 16+ (for local development)
- Git

### **Quick Start**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/coffee-designer.git
   cd coffee-designer
   ```

2. **Install ServiceNow SDK** (if not already installed)
   ```bash
   npm install -g @servicenow/sdk
   ```

3. **Connect to Your Instance**
   ```bash
   now-sdk login --instance your-instance-name.service-now.com
   ```

4. **Install Dependencies**
   ```bash
   npm install
   ```

5. **Build the Application**
   ```bash
   npm run build
   ```

6. **Deploy to ServiceNow**
   ```bash
   npm run deploy
   ```

### **Development Setup**

For local development with hot reload:

```bash
# Install dependencies
npm install

# Start development mode
now-sdk develop

# In another terminal, build on changes
now-sdk build --watch
```

---

## 📖 Documentation

### **Application Structure**

```
coffee-designer/
├── src/
│   ├── client/                 # React frontend
│   │   ├── components/         # Reusable UI components
│   │   ├── contexts/           # React Context providers
│   │   ├── services/           # API service layer
│   │   ├── utils/              # Utility functions
│   │   ├── app.jsx             # Main application component
│   │   ├── app.css             # Global styles
│   │   └── index.html          # HTML entry point
│   ├── fluent/                 # ServiceNow metadata
│   │   ├── tables/             # Table definitions
│   │   ├── business-rules/     # Server-side logic
│   │   ├── records/            # Sample data
│   │   └── ui-pages/           # UI Page definitions
│   └── server/                 # Server-side JavaScript
├── package.json                # Dependencies and scripts
└── now.config.json            # ServiceNow configuration
```

### **Key Components**

#### **CoffeeDesigner.jsx**
Main interface component with interactive customization sections:
- Bean selection with premium indicators
- Brewing method selection with icons
- Real-time price calculation
- Customer information form

#### **CoffeeContext.jsx**
Central state management using React Context:
- Order state management
- API integration
- Price calculation logic
- Navigation handling

#### **CoffeeService.js**
API service layer for ServiceNow integration:
- Table API operations (CRUD)
- Authentication handling
- Error management

### **Database Schema**

#### **Coffee Orders** (`x_snc_coffee_desig_coffee_orders`)
- Customer information and contact details
- Bean, milk, and flavor selections
- Brewing preferences and customizations
- Order status and pricing

#### **Coffee Beans** (`x_snc_coffee_desig_coffee_beans`)
- Bean details: name, origin, variety, processing
- Quality metrics: cup score, altitude, harvest date
- Pricing and availability
- Certifications: organic, fair trade

#### **Milk Types** (`x_snc_coffee_desig_milk_types`)
- Dairy and plant-based options
- Nutritional and dietary information
- Steaming quality ratings
- Allergen information

---

## 🔧 Configuration

### **Environment Variables**

Set these in your ServiceNow instance:

```javascript
// src/client/services/CoffeeService.js
const scope = 'x_snc_coffee_desig'; // Your application scope
```

### **Customization**

#### **Adding New Coffee Beans**
1. Navigate to Coffee Beans table
2. Add new record with required fields
3. Set premium_grade for luxury beans
4. Configure pricing and availability

#### **Styling Customization**
Modify CSS variables in `src/client/app.css`:

```css
:root {
  --coffee-primary: #8B4513;    /* Primary brown */
  --coffee-secondary: #D2691E;  /* Secondary orange */
  --coffee-accent: #F4A460;     /* Accent sandy brown */
  --coffee-gold: #DAA520;       /* Premium gold */
}
```

---

## 🤝 Contributing

We welcome contributions to make Coffee Designer even better!

### **Development Process**

1. **Fork the Repository**
2. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make Changes**
   - Follow existing code patterns
   - Add tests for new features
   - Update documentation
4. **Test Thoroughly**
   ```bash
   npm run build
   npm run deploy
   ```
5. **Submit Pull Request**

### **Code Standards**

- **React**: Use functional components with hooks
- **JavaScript**: ES6+ features, async/await for promises
- **CSS**: BEM methodology for class naming
- **ServiceNow**: Follow Fluent DSL best practices

### **Commit Messages**

```
feat: add premium bean filtering
fix: resolve price calculation bug
docs: update installation guide
style: improve mobile responsiveness
```

---

## 🐛 Issues & Support

### **Common Issues**

#### **Build Errors**
```bash
# Clear cache and rebuild
rm -rf node_modules
npm install
npm run build
```

#### **Authentication Issues**
```bash
# Re-login to ServiceNow
now-sdk login --instance your-instance.service-now.com
```

#### **Deployment Failures**
- Verify ServiceNow instance permissions
- Check application scope configuration
- Ensure all dependencies are installed

### **Getting Help**

- 📋 [Create an Issue](https://github.com/yourusername/coffee-designer/issues)
- 💬 [Join Discussions](https://github.com/yourusername/coffee-designer/discussions)
- 📧 Email: your.email@example.com

---

## 📄 License

This project is licensed under the **UNLICENSED** License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **ServiceNow Platform Team** - For the amazing development platform
- **React Community** - For the excellent documentation and ecosystem
- **Coffee Industry** - For inspiring this application
- **Beta Testers** - For valuable feedback and suggestions

---

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/coffee-designer?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/coffee-designer?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/coffee-designer)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/coffee-designer)

---

<div align="center">

**Made with ☕ and ❤️ by the Coffee Designer Team**

[⬆ Back to Top](#-coffee-designer---premium-artisan-coffee-experience)

</div>