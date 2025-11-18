import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Vanilla Bean
Record({
    $id: Now.ID['flavor_vanilla'],
    table: 'x_snc_coffee_desig_flavor_profiles',
    data: {
        flavor_name: 'Madagascar Vanilla Bean',
        category: 'premium',
        intensity: 'medium',
        sweetness_level: 'moderately_sweet',
        temperature_compatibility: 'both',
        additional_cost: 1.25,
        sugar_free: true,
        organic: true,
        natural_flavor: true,
        vegan: true,
        seasonal_availability: 'Year-round',
        available: true,
        description: 'Rich, authentic Madagascar vanilla with complex floral notes and warm sweetness',
        pairing_notes: 'Exceptional with medium to dark roasts, enhances Colombian and Brazilian beans'
    }
})

// Caramel
Record({
    $id: Now.ID['flavor_caramel'],
    table: 'x_snc_coffee_desig_flavor_profiles',
    data: {
        flavor_name: 'Artisan Salted Caramel',
        category: 'premium',
        intensity: 'bold',
        sweetness_level: 'sweet',
        temperature_compatibility: 'both',
        additional_cost: 1.00,
        sugar_free: false,
        organic: false,
        natural_flavor: true,
        vegan: false,
        seasonal_availability: 'Year-round',
        available: true,
        description: 'House-made salted caramel with butter notes and a hint of sea salt',
        pairing_notes: 'Perfect with espresso blends, complements nutty and chocolate notes in coffee'
    }
})

// Hazelnut
Record({
    $id: Now.ID['flavor_hazelnut'],
    table: 'x_snc_coffee_desig_flavor_profiles',
    data: {
        flavor_name: 'Roasted Hazelnut',
        category: 'nutty',
        intensity: 'medium',
        sweetness_level: 'lightly_sweet',
        temperature_compatibility: 'both',
        additional_cost: 0.85,
        sugar_free: true,
        organic: true,
        natural_flavor: true,
        vegan: true,
        seasonal_availability: 'Year-round',
        available: true,
        description: 'Toasted hazelnut with warm, nutty aroma and subtle sweetness',
        pairing_notes: 'Excellent with medium roasts, especially Italian and French roast profiles'
    }
})

// Pumpkin Spice
Record({
    $id: Now.ID['flavor_pumpkin_spice'],
    table: 'x_snc_coffee_desig_flavor_profiles',
    data: {
        flavor_name: 'Autumn Pumpkin Spice',
        category: 'seasonal',
        intensity: 'bold',
        sweetness_level: 'moderately_sweet',
        temperature_compatibility: 'best_hot',
        additional_cost: 1.50,
        sugar_free: false,
        organic: true,
        natural_flavor: true,
        vegan: true,
        seasonal_availability: 'September - November',
        available: true,
        description: 'Warm blend of cinnamon, nutmeg, cloves, and real pumpkin with autumn spices',
        pairing_notes: 'Ideal with medium-dark roasts, enhances Central American coffee origins'
    }
})

// Lavender Honey
Record({
    $id: Now.ID['flavor_lavender_honey'],
    table: 'x_snc_coffee_desig_flavor_profiles',
    data: {
        flavor_name: 'French Lavender Honey',
        category: 'floral',
        intensity: 'subtle',
        sweetness_level: 'lightly_sweet',
        temperature_compatibility: 'both',
        additional_cost: 1.75,
        sugar_free: false,
        organic: true,
        natural_flavor: true,
        vegan: false,
        seasonal_availability: 'Spring - Summer',
        available: true,
        description: 'Delicate French lavender paired with wildflower honey for a sophisticated floral experience',
        pairing_notes: 'Best with light to medium roasts, exceptional with Ethiopian and Kenyan coffees'
    }
})

// Dark Chocolate
Record({
    $id: Now.ID['flavor_dark_chocolate'],
    table: 'x_snc_coffee_desig_flavor_profiles',
    data: {
        flavor_name: '70% Belgian Dark Chocolate',
        category: 'dessert',
        intensity: 'intense',
        sweetness_level: 'moderately_sweet',
        temperature_compatibility: 'both',
        additional_cost: 1.35,
        sugar_free: false,
        organic: true,
        natural_flavor: true,
        vegan: true,
        seasonal_availability: 'Year-round',
        available: true,
        description: 'Rich Belgian dark chocolate with complex cocoa notes and subtle bitterness',
        pairing_notes: 'Outstanding with dark roasts, creates perfect harmony with Brazilian and Guatemalan beans'
    }
})

// Cinnamon Spice
Record({
    $id: Now.ID['flavor_cinnamon'],
    table: 'x_snc_coffee_desig_flavor_profiles',
    data: {
        flavor_name: 'Ceylon Cinnamon Spice',
        category: 'spice',
        intensity: 'medium',
        sweetness_level: 'lightly_sweet',
        temperature_compatibility: 'both',
        additional_cost: 0.65,
        sugar_free: true,
        organic: true,
        natural_flavor: true,
        vegan: true,
        seasonal_availability: 'Year-round',
        available: true,
        description: 'Premium Ceylon cinnamon with warm, sweet spice and subtle heat',
        pairing_notes: 'Versatile with all roast levels, particularly good with Central and South American origins'
    }
})

// Coconut Cream
Record({
    $id: Now.ID['flavor_coconut_cream'],
    table: 'x_snc_coffee_desig_flavor_profiles',
    data: {
        flavor_name: 'Tropical Coconut Cream',
        category: 'dessert',
        intensity: 'medium',
        sweetness_level: 'sweet',
        temperature_compatibility: 'best_cold',
        additional_cost: 1.15,
        sugar_free: false,
        organic: true,
        natural_flavor: true,
        vegan: true,
        seasonal_availability: 'Year-round',
        available: true,
        description: 'Creamy coconut with tropical sweetness and rich, indulgent texture',
        pairing_notes: 'Exceptional in iced drinks, pairs well with medium roasts and island-grown coffees'
    }
})

// Irish Cream
Record({
    $id: Now.ID['flavor_irish_cream'],
    table: 'x_snc_coffee_desig_flavor_profiles',
    data: {
        flavor_name: 'Premium Irish Cream',
        category: 'classic',
        intensity: 'bold',
        sweetness_level: 'sweet',
        temperature_compatibility: 'best_hot',
        additional_cost: 1.20,
        sugar_free: false,
        organic: false,
        natural_flavor: false,
        vegan: false,
        seasonal_availability: 'Year-round',
        available: true,
        description: 'Classic Irish cream with smooth vanilla and whiskey notes (non-alcoholic)',
        pairing_notes: 'Perfect with dark roasts, complements bold espresso blends and Italian roast profiles'
    }
})

// Raspberry White Chocolate
Record({
    $id: Now.ID['flavor_raspberry_white_choc'],
    table: 'x_snc_coffee_desig_flavor_profiles',
    data: {
        flavor_name: 'Raspberry White Chocolate',
        category: 'fruit',
        intensity: 'bold',
        sweetness_level: 'very_sweet',
        temperature_compatibility: 'both',
        additional_cost: 1.65,
        sugar_free: false,
        organic: false,
        natural_flavor: true,
        vegan: false,
        seasonal_availability: 'Year-round',
        available: true,
        description: 'Tart raspberry balanced with creamy white chocolate for an indulgent fruit-dessert experience',
        pairing_notes: 'Best with light to medium roasts, creates beautiful contrast with bright, acidic coffee origins'
    }
})