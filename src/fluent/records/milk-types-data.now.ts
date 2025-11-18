import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Premium Organic Whole Milk
Record({
    $id: Now.ID['milk_whole_organic'],
    table: 'x_snc_coffee_desig_milk_types',
    data: {
        milk_name: 'Premium Organic Whole Milk',
        category: 'premium_dairy',
        fat_content: 'whole',
        texture_profile: 'rich',
        flavor_profile: 'Rich, creamy with subtle sweetness and clean finish',
        steaming_quality: 'excellent',
        additional_cost: 1.50,
        organic: true,
        lactose_free: false,
        vegan: false,
        gluten_free: true,
        available: true,
        description: 'Premium organic whole milk from grass-fed cows, perfect for lattes and cappuccinos',
        allergen_info: 'Contains dairy. Not suitable for lactose intolerant individuals.'
    }
})

// Regular Whole Milk
Record({
    $id: Now.ID['milk_whole_regular'],
    table: 'x_snc_coffee_desig_milk_types',
    data: {
        milk_name: 'Whole Milk',
        category: 'dairy',
        fat_content: 'whole',
        texture_profile: 'creamy',
        flavor_profile: 'Classic creamy milk taste with natural sweetness',
        steaming_quality: 'excellent',
        additional_cost: 0.00,
        organic: false,
        lactose_free: false,
        vegan: false,
        gluten_free: true,
        available: true,
        description: 'Traditional whole milk, the classic choice for coffee drinks',
        allergen_info: 'Contains dairy. Not suitable for lactose intolerant individuals.'
    }
})

// 2% Reduced Fat Milk
Record({
    $id: Now.ID['milk_2percent'],
    table: 'x_snc_coffee_desig_milk_types',
    data: {
        milk_name: '2% Reduced Fat Milk',
        category: 'dairy',
        fat_content: 'low_fat',
        texture_profile: 'light',
        flavor_profile: 'Mild, clean taste with reduced richness',
        steaming_quality: 'good',
        additional_cost: 0.00,
        organic: false,
        lactose_free: false,
        vegan: false,
        gluten_free: true,
        available: true,
        description: 'Reduced fat milk for those who prefer a lighter option',
        allergen_info: 'Contains dairy. Not suitable for lactose intolerant individuals.'
    }
})

// Non-Fat Skim Milk
Record({
    $id: Now.ID['milk_skim'],
    table: 'x_snc_coffee_desig_milk_types',
    data: {
        milk_name: 'Non-Fat Skim Milk',
        category: 'dairy',
        fat_content: 'nonfat',
        texture_profile: 'light',
        flavor_profile: 'Clean, light taste with minimal richness',
        steaming_quality: 'fair',
        additional_cost: 0.00,
        organic: false,
        lactose_free: false,
        vegan: false,
        gluten_free: true,
        available: true,
        description: 'Fat-free milk option for health-conscious customers',
        allergen_info: 'Contains dairy. Not suitable for lactose intolerant individuals.'
    }
})

// Oat Milk
Record({
    $id: Now.ID['milk_oat'],
    table: 'x_snc_coffee_desig_milk_types',
    data: {
        milk_name: 'Premium Oat Milk',
        category: 'plant_based',
        fat_content: 'variable',
        texture_profile: 'creamy',
        flavor_profile: 'Naturally sweet with subtle vanilla notes and oat flavor',
        steaming_quality: 'excellent',
        additional_cost: 0.75,
        organic: true,
        lactose_free: true,
        vegan: true,
        gluten_free: false,
        available: true,
        description: 'Barista-quality oat milk that steams beautifully for latte art',
        allergen_info: 'Contains oats. May contain gluten. Produced in facility that processes nuts.'
    }
})

// Almond Milk
Record({
    $id: Now.ID['milk_almond'],
    table: 'x_snc_coffee_desig_milk_types',
    data: {
        milk_name: 'Organic Almond Milk',
        category: 'plant_based',
        fat_content: 'low_fat',
        texture_profile: 'light',
        flavor_profile: 'Light almond flavor with subtle nuttiness',
        steaming_quality: 'good',
        additional_cost: 0.65,
        organic: true,
        lactose_free: true,
        vegan: true,
        gluten_free: true,
        available: true,
        description: 'Smooth, organic almond milk perfect for those avoiding dairy',
        allergen_info: 'Contains tree nuts (almonds). Produced in facility that processes other nuts.'
    }
})

// Coconut Milk
Record({
    $id: Now.ID['milk_coconut'],
    table: 'x_snc_coffee_desig_milk_types',
    data: {
        milk_name: 'Rich Coconut Milk',
        category: 'plant_based',
        fat_content: 'extra_rich',
        texture_profile: 'rich',
        flavor_profile: 'Tropical coconut flavor with natural sweetness',
        steaming_quality: 'good',
        additional_cost: 0.80,
        organic: true,
        lactose_free: true,
        vegan: true,
        gluten_free: true,
        available: true,
        description: 'Creamy coconut milk that adds tropical richness to coffee',
        allergen_info: 'Contains coconut. Produced in facility that may process tree nuts.'
    }
})

// Soy Milk
Record({
    $id: Now.ID['milk_soy'],
    table: 'x_snc_coffee_desig_milk_types',
    data: {
        milk_name: 'Organic Soy Milk',
        category: 'plant_based',
        fat_content: 'variable',
        texture_profile: 'creamy',
        flavor_profile: 'Neutral taste with slight bean undertones',
        steaming_quality: 'good',
        additional_cost: 0.60,
        organic: false,
        lactose_free: true,
        vegan: true,
        gluten_free: true,
        available: true,
        description: 'Traditional plant-based milk alternative with good protein content',
        allergen_info: 'Contains soy. Produced in facility that processes tree nuts.'
    }
})

// Macadamia Milk
Record({
    $id: Now.ID['milk_macadamia'],
    table: 'x_snc_coffee_desig_milk_types',
    data: {
        milk_name: 'Luxury Macadamia Milk',
        category: 'specialty',
        fat_content: 'extra_rich',
        texture_profile: 'rich',
        flavor_profile: 'Buttery, rich with subtle vanilla and natural sweetness',
        steaming_quality: 'excellent',
        additional_cost: 1.25,
        organic: true,
        lactose_free: true,
        vegan: true,
        gluten_free: true,
        available: true,
        description: 'Ultra-premium macadamia milk for the ultimate indulgent coffee experience',
        allergen_info: 'Contains tree nuts (macadamias). Produced in facility that processes other nuts.'
    }
})

// Cashew Milk
Record({
    $id: Now.ID['milk_cashew'],
    table: 'x_snc_coffee_desig_milk_types',
    data: {
        milk_name: 'Artisan Cashew Milk',
        category: 'specialty',
        fat_content: 'extra_rich',
        texture_profile: 'thick',
        flavor_profile: 'Ultra-creamy with natural cashew sweetness',
        steaming_quality: 'excellent',
        additional_cost: 1.10,
        organic: true,
        lactose_free: true,
        vegan: true,
        gluten_free: true,
        available: true,
        description: 'House-made cashew milk with exceptional creaminess and flavor',
        allergen_info: 'Contains tree nuts (cashews). Produced in facility that processes other nuts.'
    }
})