import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { 
    calculateOrderTotal, 
    validateOrderCombination, 
    setOrderDefaults, 
    notifyOrderStatus 
} from '../../server/coffee-order-logic.js'

// Business rule to calculate order totals
export const CalculateOrderTotal = BusinessRule({
    $id: Now.ID['calculate_order_total'],
    name: 'Calculate Coffee Order Total',
    table: 'x_snc_coffee_desig_coffee_orders',
    when: 'before',
    action: ['insert', 'update'],
    script: calculateOrderTotal,
    order: 100,
    active: true,
    condition: "current.coffee_bean.changes() || current.milk_type.changes() || current.flavor_profile.changes() || current.caffeine_shots.changes() || current.serving_size.changes() || current.drink_type.changes() || current.brew_method.changes()"
})

// Business rule to validate order combinations
export const ValidateOrderCombination = BusinessRule({
    $id: Now.ID['validate_order_combination'],
    name: 'Validate Coffee Order Combination',
    table: 'x_snc_coffee_desig_coffee_orders',
    when: 'before',
    action: ['insert', 'update'],
    script: validateOrderCombination,
    order: 50,
    active: true
})

// Business rule to set order defaults
export const SetOrderDefaults = BusinessRule({
    $id: Now.ID['set_order_defaults'],
    name: 'Set Coffee Order Defaults',
    table: 'x_snc_coffee_desig_coffee_orders',
    when: 'before',
    action: ['insert'],
    script: setOrderDefaults,
    order: 10,
    active: true
})

// Business rule to notify on status changes
export const NotifyOrderStatus = BusinessRule({
    $id: Now.ID['notify_order_status'],
    name: 'Notify Order Status Change',
    table: 'x_snc_coffee_desig_coffee_orders',
    when: 'after',
    action: ['update'],
    script: notifyOrderStatus,
    order: 200,
    active: true,
    condition: "current.order_status.changes()"
})