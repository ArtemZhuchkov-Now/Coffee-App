import { gs, GlideRecord, GlideDateTime } from '@servicenow/glide'

export function calculateOrderTotal(current, previous) {
    // Initialize base price
    let totalPrice = 0;
    
    // Get coffee bean price
    if (current.getValue('coffee_bean')) {
        const beanRecord = new GlideRecord('x_snc_coffee_desig_coffee_beans');
        if (beanRecord.get(current.getValue('coffee_bean'))) {
            const beanPrice = parseFloat(beanRecord.getValue('price_per_pound') || '0');
            
            // Calculate serving size multiplier
            const servingSize = current.getValue('serving_size');
            let servingMultiplier = 1.0;
            
            switch (servingSize) {
                case 'piccolo':
                    servingMultiplier = 0.5;
                    break;
                case 'cortado':
                    servingMultiplier = 0.7;
                    break;
                case 'cappuccino':
                case 'flat_white':
                    servingMultiplier = 1.0;
                    break;
                case 'latte':
                case 'americano':
                    servingMultiplier = 1.3;
                    break;
                case 'large':
                    servingMultiplier = 1.8;
                    break;
                case 'extra_large':
                    servingMultiplier = 2.3;
                    break;
            }
            
            // Base coffee price (assuming 0.5 oz of beans per serving)
            totalPrice += (beanPrice * 0.03125) * servingMultiplier;
        }
    }
    
    // Add milk type cost
    if (current.getValue('milk_type')) {
        const milkRecord = new GlideRecord('x_snc_coffee_desig_milk_types');
        if (milkRecord.get(current.getValue('milk_type'))) {
            const milkCost = parseFloat(milkRecord.getValue('additional_cost') || '0');
            totalPrice += milkCost;
        }
    }
    
    // Add flavor profile cost
    if (current.getValue('flavor_profile')) {
        const flavorRecord = new GlideRecord('x_snc_coffee_desig_flavor_profiles');
        if (flavorRecord.get(current.getValue('flavor_profile'))) {
            const flavorCost = parseFloat(flavorRecord.getValue('additional_cost') || '0');
            totalPrice += flavorCost;
        }
    }
    
    // Add extra shots cost ($0.75 per additional shot beyond 2)
    const caffeineShots = parseInt(current.getValue('caffeine_shots') || '2');
    if (caffeineShots > 2) {
        totalPrice += (caffeineShots - 2) * 0.75;
    }
    
    // Premium brewing method charges
    const brewMethod = current.getValue('brew_method');
    switch (brewMethod) {
        case 'chemex':
        case 'aeropress':
            totalPrice += 2.00;
            break;
        case 'cold_brew':
            totalPrice += 1.50;
            break;
        case 'pour_over':
            totalPrice += 1.00;
            break;
    }
    
    // Set calculated total price
    current.setValue('total_price', totalPrice.toFixed(2));
    
    gs.addInfoMessage(`Coffee order total calculated: $${totalPrice.toFixed(2)}`);
}

export function validateOrderCombination(current, previous) {
    // Check cold brew compatibility
    const brewMethod = current.getValue('brew_method');
    const temperature = current.getValue('temperature_preference');
    
    if (brewMethod === 'cold_brew' && (temperature === 'hot' || temperature === 'extra_hot' || temperature === 'warm')) {
        gs.addErrorMessage('Cold brew method is not compatible with hot temperature preferences. Please select "iced" or "cold_brew" temperature.');
        current.setAbortAction(true);
        return;
    }
    
    // Check espresso shot compatibility
    const caffeineShots = parseInt(current.getValue('caffeine_shots') || '2');
    if (brewMethod !== 'espresso' && caffeineShots > 3) {
        gs.addErrorMessage('Non-espresso brewing methods cannot exceed 3 caffeine shots.');
        current.setAbortAction(true);
        return;
    }
    
    // Check grind size recommendations
    const grindSize = current.getValue('grind_size');
    const brewMethodGrindMap = {
        'french_press': ['extra_coarse', 'coarse'],
        'cold_brew': ['coarse', 'medium_coarse'],
        'chemex': ['medium_coarse'],
        'pour_over': ['medium_fine'],
        'espresso': ['fine'],
        'drip': ['medium']
    };
    
    if (brewMethodGrindMap[brewMethod] && !brewMethodGrindMap[brewMethod].includes(grindSize)) {
        gs.addInfoMessage(`Recommended grind size for ${brewMethod} is: ${brewMethodGrindMap[brewMethod].join(' or ')}. Your selection may affect taste quality.`);
    }
}

export function setOrderDefaults(current, previous) {
    // Set order date if not provided
    if (!current.getValue('order_date')) {
        const now = new GlideDateTime();
        current.setValue('order_date', now.getDisplayValue());
    }
    
    // Generate order number if not present
    if (!current.getValue('order_number')) {
        // This will be handled by the auto-number configuration
        gs.addInfoMessage('Order number will be auto-generated upon save.');
    }
    
    // Set default requested pickup time (30 minutes from now)
    if (!current.getValue('requested_pickup_time')) {
        const pickupTime = new GlideDateTime();
        pickupTime.add(1800000); // Add 30 minutes (30 * 60 * 1000 ms)
        current.setValue('requested_pickup_time', pickupTime.getDisplayValue());
    }
}

export function notifyOrderStatus(current, previous) {
    const currentStatus = current.getValue('order_status');
    const previousStatus = previous ? previous.getValue('order_status') : '';
    
    if (currentStatus !== previousStatus) {
        const customerEmail = current.getValue('customer_email');
        const customerName = current.getValue('customer_name');
        const orderNumber = current.getValue('order_number');
        
        let statusMessage = '';
        switch (currentStatus) {
            case 'confirmed':
                statusMessage = 'Your artisan coffee order has been confirmed and is being prepared with premium beans.';
                break;
            case 'preparing':
                statusMessage = 'Our master barista is carefully crafting your custom coffee creation.';
                break;
            case 'ready':
                statusMessage = 'Your premium coffee order is ready for pickup! Come enjoy your perfectly crafted beverage.';
                break;
            case 'completed':
                statusMessage = 'Thank you for choosing our coffee designer service! We hope you enjoyed your custom coffee experience.';
                break;
            case 'cancelled':
                statusMessage = 'Your coffee order has been cancelled. If you have any questions, please contact us.';
                break;
        }
        
        if (statusMessage && customerEmail) {
            gs.addInfoMessage(`Order ${orderNumber} status updated to "${currentStatus}" - Customer ${customerName} will be notified.`);
            // In a real implementation, this would trigger an email notification
        }
    }
}