import '@servicenow/sdk/global'

// Import all table definitions
export { x_snc_coffee_desig_coffee_orders } from './tables/coffee-orders.now'
export { x_snc_coffee_desig_coffee_beans } from './tables/coffee-beans.now'
export { x_snc_coffee_desig_milk_types } from './tables/milk-types.now'
export { x_snc_coffee_desig_flavor_profiles } from './tables/flavor-profiles.now'
export { x_snc_coffee_desig_premium_addins } from './tables/premium-addins.now'

export { coffee_designer_ui } from './ui-pages/coffee-designer.now'