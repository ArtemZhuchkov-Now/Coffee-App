import '@servicenow/sdk/global'
import { 
    Table, 
    StringColumn, 
    DecimalColumn, 
    ChoiceColumn, 
    BooleanColumn 
} from '@servicenow/sdk/core'

export const x_snc_coffee_desig_premium_addins = Table({
    name: 'x_snc_coffee_desig_premium_addins',
    label: 'Premium Add-ins & Toppings',
    schema: {
        addin_name: StringColumn({
            label: 'Add-in Name',
            maxLength: 80,
            mandatory: true
        }),
        category: ChoiceColumn({
            label: 'Add-in Category',
            choices: {
                sweetener: { label: 'Premium Sweeteners', sequence: 0 },
                cream: { label: 'Cream & Foam', sequence: 1 },
                spice: { label: 'Spices & Seasonings', sequence: 2 },
                topping: { label: 'Toppings & Garnish', sequence: 3 },
                extract: { label: 'Extracts & Essences', sequence: 4 },
                chocolate: { label: 'Chocolate & Cocoa', sequence: 5 },
                alcohol: { label: 'Alcohol Infusions', sequence: 6 },
                specialty: { label: 'Specialty Ingredients', sequence: 7 }
            },
            mandatory: true
        }),
        application_method: ChoiceColumn({
            label: 'Application Method',
            choices: {
                mixed_in: { label: 'Mixed Into Coffee', sequence: 0 },
                topped: { label: 'Topped/Garnished', sequence: 1 },
                layered: { label: 'Layered', sequence: 2 },
                infused: { label: 'Infused During Brewing', sequence: 3 },
                side_serving: { label: 'Served on Side', sequence: 4 }
            },
            default: 'mixed_in'
        }),
        intensity_level: ChoiceColumn({
            label: 'Flavor Intensity',
            choices: {
                subtle: { label: 'Subtle Enhancement', sequence: 0 },
                mild: { label: 'Mild Accent', sequence: 1 },
                noticeable: { label: 'Noticeable Addition', sequence: 2 },
                prominent: { label: 'Prominent Feature', sequence: 3 },
                dominant: { label: 'Dominant Flavor', sequence: 4 }
            },
            default: 'noticeable'
        }),
        temperature_compatibility: ChoiceColumn({
            label: 'Temperature Compatibility',
            choices: {
                hot_only: { label: 'Hot Drinks Only', sequence: 0 },
                cold_only: { label: 'Cold Drinks Only', sequence: 1 },
                both: { label: 'Hot & Cold Compatible', sequence: 2 }
            },
            default: 'both'
        }),
        premium_cost: DecimalColumn({
            label: 'Premium Cost ($)',
            mandatory: true
        }),
        artisan_made: BooleanColumn({
            label: 'Artisan Made',
            default: false
        }),
        organic: BooleanColumn({
            label: 'Organic',
            default: false
        }),
        gluten_free: BooleanColumn({
            label: 'Gluten Free',
            default: true
        }),
        vegan: BooleanColumn({
            label: 'Vegan',
            default: true
        }),
        sugar_free: BooleanColumn({
            label: 'Sugar Free',
            default: false
        }),
        limited_edition: BooleanColumn({
            label: 'Limited Edition',
            default: false
        }),
        available: BooleanColumn({
            label: 'Available',
            default: true
        }),
        origin_source: StringColumn({
            label: 'Origin/Source',
            maxLength: 150
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 500
        }),
        usage_instructions: StringColumn({
            label: 'Usage Instructions',
            maxLength: 300
        }),
        allergen_info: StringColumn({
            label: 'Allergen Information',
            maxLength: 200
        })
    },
    display: 'addin_name',
    allow_web_service_access: true,
    accessible_from: 'public',
    actions: ['create', 'read', 'update', 'delete']
})