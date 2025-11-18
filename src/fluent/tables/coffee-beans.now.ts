import '@servicenow/sdk/global'
import { 
    Table, 
    StringColumn, 
    DecimalColumn, 
    ChoiceColumn, 
    BooleanColumn 
} from '@servicenow/sdk/core'

export const x_snc_coffee_desig_coffee_beans = Table({
    name: 'x_snc_coffee_desig_coffee_beans',
    label: 'Premium Coffee Beans',
    schema: {
        bean_name: StringColumn({
            label: 'Bean Name',
            maxLength: 100,
            mandatory: true
        }),
        origin_country: StringColumn({
            label: 'Origin Country',
            maxLength: 50,
            mandatory: true
        }),
        region: StringColumn({
            label: 'Region/Estate',
            maxLength: 100
        }),
        variety: ChoiceColumn({
            label: 'Coffee Variety',
            choices: {
                arabica: { label: 'Arabica', sequence: 0 },
                robusta: { label: 'Robusta', sequence: 1 },
                liberica: { label: 'Liberica', sequence: 2 },
                excelsa: { label: 'Excelsa', sequence: 3 },
                geisha: { label: 'Geisha/Gesha', sequence: 4 },
                bourbon: { label: 'Bourbon', sequence: 5 },
                typica: { label: 'Typica', sequence: 6 },
                caturra: { label: 'Caturra', sequence: 7 }
            },
            default: 'arabica',
            mandatory: true
        }),
        processing_method: ChoiceColumn({
            label: 'Processing Method',
            choices: {
                washed: { label: 'Washed/Wet Process', sequence: 0 },
                natural: { label: 'Natural/Dry Process', sequence: 1 },
                honey: { label: 'Honey Process', sequence: 2 },
                semi_washed: { label: 'Semi-Washed', sequence: 3 },
                anaerobic: { label: 'Anaerobic Fermentation', sequence: 4 },
                carbonic: { label: 'Carbonic Maceration', sequence: 5 }
            },
            mandatory: true
        }),
        roast_level: ChoiceColumn({
            label: 'Roast Level',
            choices: {
                light: { label: 'Light Roast', sequence: 0 },
                medium_light: { label: 'Medium-Light', sequence: 1 },
                medium: { label: 'Medium Roast', sequence: 2 },
                medium_dark: { label: 'Medium-Dark', sequence: 3 },
                dark: { label: 'Dark Roast', sequence: 4 },
                french: { label: 'French Roast', sequence: 5 },
                italian: { label: 'Italian Roast', sequence: 6 }
            },
            default: 'medium',
            mandatory: true
        }),
        flavor_notes: StringColumn({
            label: 'Flavor Notes',
            maxLength: 300
        }),
        acidity_level: ChoiceColumn({
            label: 'Acidity Level',
            choices: {
                low: { label: 'Low Acidity', sequence: 0 },
                medium: { label: 'Medium Acidity', sequence: 1 },
                high: { label: 'High Acidity', sequence: 2 },
                bright: { label: 'Bright & Vibrant', sequence: 3 }
            },
            default: 'medium'
        }),
        body_strength: ChoiceColumn({
            label: 'Body Strength',
            choices: {
                light: { label: 'Light Body', sequence: 0 },
                medium: { label: 'Medium Body', sequence: 1 },
                full: { label: 'Full Body', sequence: 2 },
                heavy: { label: 'Heavy Body', sequence: 3 }
            },
            default: 'medium'
        }),
        altitude_grown: StringColumn({
            label: 'Altitude Grown (meters)',
            maxLength: 20
        }),
        harvest_date: StringColumn({
            label: 'Harvest Season/Year',
            maxLength: 30
        }),
        price_per_pound: DecimalColumn({
            label: 'Price per Pound ($)',
            mandatory: true
        }),
        premium_grade: BooleanColumn({
            label: 'Premium Grade',
            default: false
        }),
        single_origin: BooleanColumn({
            label: 'Single Origin',
            default: true
        }),
        organic_certified: BooleanColumn({
            label: 'Organic Certified',
            default: false
        }),
        fair_trade: BooleanColumn({
            label: 'Fair Trade Certified',
            default: false
        }),
        cup_score: DecimalColumn({
            label: 'Cup Score (80-100)',
            maxLength: 5
        }),
        available: BooleanColumn({
            label: 'Available',
            default: true
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 1000
        })
    },
    display: 'bean_name',
    allow_web_service_access: true,
    accessible_from: 'public',
    actions: ['create', 'read', 'update', 'delete']
})