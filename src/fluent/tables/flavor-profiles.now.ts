import '@servicenow/sdk/global'
import { 
    Table, 
    StringColumn, 
    DecimalColumn, 
    ChoiceColumn, 
    BooleanColumn 
} from '@servicenow/sdk/core'

export const x_snc_coffee_desig_flavor_profiles = Table({
    name: 'x_snc_coffee_desig_flavor_profiles',
    label: 'Flavor Profiles & Syrups',
    schema: {
        flavor_name: StringColumn({
            label: 'Flavor Name',
            maxLength: 80,
            mandatory: true
        }),
        category: ChoiceColumn({
            label: 'Flavor Category',
            choices: {
                classic: { label: 'Classic Syrups', sequence: 0 },
                premium: { label: 'Premium Artisan', sequence: 1 },
                seasonal: { label: 'Seasonal Special', sequence: 2 },
                spice: { label: 'Spice & Herbs', sequence: 3 },
                fruit: { label: 'Fruit & Berry', sequence: 4 },
                dessert: { label: 'Dessert Inspired', sequence: 5 },
                nutty: { label: 'Nuts & Cream', sequence: 6 },
                floral: { label: 'Floral & Tea', sequence: 7 }
            },
            mandatory: true
        }),
        intensity: ChoiceColumn({
            label: 'Flavor Intensity',
            choices: {
                subtle: { label: 'Subtle Hint', sequence: 0 },
                light: { label: 'Light Accent', sequence: 1 },
                medium: { label: 'Medium Presence', sequence: 2 },
                bold: { label: 'Bold Statement', sequence: 3 },
                intense: { label: 'Intense Experience', sequence: 4 }
            },
            default: 'medium'
        }),
        sweetness_level: ChoiceColumn({
            label: 'Sweetness Level',
            choices: {
                unsweetened: { label: 'Unsweetened/Natural', sequence: 0 },
                lightly_sweet: { label: 'Lightly Sweet', sequence: 1 },
                moderately_sweet: { label: 'Moderately Sweet', sequence: 2 },
                sweet: { label: 'Sweet', sequence: 3 },
                very_sweet: { label: 'Very Sweet', sequence: 4 }
            },
            default: 'moderately_sweet'
        }),
        temperature_compatibility: ChoiceColumn({
            label: 'Temperature Compatibility',
            choices: {
                hot_only: { label: 'Hot Drinks Only', sequence: 0 },
                cold_only: { label: 'Cold Drinks Only', sequence: 1 },
                both: { label: 'Hot & Cold Compatible', sequence: 2 },
                best_hot: { label: 'Best in Hot Drinks', sequence: 3 },
                best_cold: { label: 'Best in Cold Drinks', sequence: 4 }
            },
            default: 'both'
        }),
        additional_cost: DecimalColumn({
            label: 'Additional Cost ($)',
            default: '0.75'
        }),
        sugar_free: BooleanColumn({
            label: 'Sugar-Free Available',
            default: false
        }),
        organic: BooleanColumn({
            label: 'Organic',
            default: false
        }),
        natural_flavor: BooleanColumn({
            label: 'Natural Flavoring',
            default: true
        }),
        vegan: BooleanColumn({
            label: 'Vegan',
            default: true
        }),
        seasonal_availability: StringColumn({
            label: 'Seasonal Availability',
            maxLength: 100
        }),
        available: BooleanColumn({
            label: 'Available',
            default: true
        }),
        description: StringColumn({
            label: 'Flavor Description',
            maxLength: 500
        }),
        pairing_notes: StringColumn({
            label: 'Coffee Pairing Notes',
            maxLength: 300
        })
    },
    display: 'flavor_name',
    allow_web_service_access: true,
    accessible_from: 'public',
    actions: ['create', 'read', 'update', 'delete']
})