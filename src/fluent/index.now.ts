import '@servicenow/sdk/global'

// Import all table definitions
export { x_snc_coffee_desig_coffee_orders } from './tables/coffee-orders.now'
export { x_snc_coffee_desig_coffee_beans } from './tables/coffee-beans.now'
export { x_snc_coffee_desig_milk_types } from './tables/milk-types.now'
export { x_snc_coffee_desig_flavor_profiles } from './tables/flavor-profiles.now'
export { x_snc_coffee_desig_premium_addins } from './tables/premium-addins.now'

// Import business rules
export { 
    CalculateOrderTotal, 
    ValidateOrderCombination, 
    SetOrderDefaults, 
    NotifyOrderStatus 
} from './business-rules/coffee-order-rules.now'

// Import sample data
export { 
    jamaican_blue_mountain,
    hawaiian_kona,
    ethiopian_geisha,
    panama_geisha,
    colombian_pink_bourbon
} from './records/coffee-beans-data.now'

// Import UI Page
export { coffee_designer_ui } from './ui-pages/coffee-designer.now'