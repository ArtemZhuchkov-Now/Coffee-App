import '@servicenow/sdk/global'
import { 
    Table, 
    StringColumn, 
    DecimalColumn, 
    ChoiceColumn, 
    BooleanColumn 
} from '@servicenow/sdk/core'

export const x_snc_coffee_desig_milk_types = Table({
    name: 'x_snc_coffee_desig_milk_types',
    label: 'Milk Types & Alternatives',
    schema: {
        milk_name: StringColumn({
            label: 'Milk Type Name',
            maxLength: 80,
            mandatory: true
        }),
        category: ChoiceColumn({
            label: 'Milk Category',
            choices: {
                dairy: { label: 'Dairy Milk', sequence: 0 },
                plant_based: { label: 'Plant-Based', sequence: 1 },
                premium_dairy: { label: 'Premium Dairy', sequence: 2 },
                specialty: { label: 'Specialty Alternative', sequence: 3 }
            },
            mandatory: true
        }),
        fat_content: ChoiceColumn({
            label: 'Fat Content',
            choices: {
                nonfat: { label: 'Non-Fat (0%)', sequence: 0 },
                low_fat: { label: 'Low-Fat (1-2%)', sequence: 1 },
                whole: { label: 'Whole (3.25%)', sequence: 2 },
                extra_rich: { label: 'Extra Rich (4%+)', sequence: 3 },
                variable: { label: 'Variable', sequence: 4 }
            }
        }),
        texture_profile: ChoiceColumn({
            label: 'Texture Profile',
            choices: {
                light: { label: 'Light & Smooth', sequence: 0 },
                creamy: { label: 'Creamy', sequence: 1 },
                rich: { label: 'Rich & Velvety', sequence: 2 },
                frothy: { label: 'Frothy', sequence: 3 },
                thick: { label: 'Thick & Dense', sequence: 4 }
            }
        }),
        flavor_profile: StringColumn({
            label: 'Flavor Profile',
            maxLength: 200
        }),
        steaming_quality: ChoiceColumn({
            label: 'Steaming Quality',
            choices: {
                excellent: { label: 'Excellent - Creates Perfect Microfoam', sequence: 0 },
                good: { label: 'Good - Steams Well', sequence: 1 },
                fair: { label: 'Fair - Adequate for Basic Drinks', sequence: 2 },
                poor: { label: 'Poor - Does Not Steam Well', sequence: 3 },
                not_recommended: { label: 'Not Recommended for Steaming', sequence: 4 }
            },
            default: 'good'
        }),
        additional_cost: DecimalColumn({
            label: 'Additional Cost ($)',
            default: '0.00'
        }),
        organic: BooleanColumn({
            label: 'Organic',
            default: false
        }),
        lactose_free: BooleanColumn({
            label: 'Lactose Free',
            default: false
        }),
        vegan: BooleanColumn({
            label: 'Vegan',
            default: false
        }),
        gluten_free: BooleanColumn({
            label: 'Gluten Free',
            default: true
        }),
        available: BooleanColumn({
            label: 'Available',
            default: true
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 500
        }),
        allergen_info: StringColumn({
            label: 'Allergen Information',
            maxLength: 300
        })
    },
    display: 'milk_name',
    allow_web_service_access: true,
    accessible_from: 'public',
    actions: ['create', 'read', 'update', 'delete']
})