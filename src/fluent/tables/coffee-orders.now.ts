import '@servicenow/sdk/global'
import { 
    Table, 
    StringColumn, 
    ReferenceColumn, 
    DecimalColumn, 
    IntegerColumn, 
    DateTimeColumn, 
    ChoiceColumn 
} from '@servicenow/sdk/core'

export const x_snc_coffee_desig_coffee_orders = Table({
    name: 'x_snc_coffee_desig_coffee_orders',
    label: 'Coffee Orders',
    schema: {
        order_number: StringColumn({
            label: 'Order Number',
            maxLength: 40,
            read_only: true,
            default: 'javascript:global.getNextObjNumberPadded();'
        }),
        customer_name: StringColumn({
            label: 'Customer Name',
            maxLength: 100,
            mandatory: true
        }),
        customer_email: StringColumn({
            label: 'Customer Email',
            maxLength: 100
        }),
        coffee_bean: ReferenceColumn({
            label: 'Coffee Bean Selection',
            referenceTable: 'x_snc_coffee_desig_coffee_beans',
            mandatory: true
        }),
        milk_type: ReferenceColumn({
            label: 'Milk Type',
            referenceTable: 'x_snc_coffee_desig_milk_types'
        }),
        flavor_profile: ReferenceColumn({
            label: 'Flavor Profile',
            referenceTable: 'x_snc_coffee_desig_flavor_profiles'
        }),
        temperature_preference: ChoiceColumn({
            label: 'Temperature Preference',
            choices: {
                extra_hot: { label: 'Extra Hot (185°F+)', sequence: 0 },
                hot: { label: 'Hot (165-175°F)', sequence: 1 },
                warm: { label: 'Warm (145-155°F)', sequence: 2 },
                iced: { label: 'Iced', sequence: 3 },
                cold_brew: { label: 'Cold Brew', sequence: 4 }
            },
            default: 'hot',
            mandatory: true
        }),
        grind_size: ChoiceColumn({
            label: 'Grind Size',
            choices: {
                extra_coarse: { label: 'Extra Coarse (French Press)', sequence: 0 },
                coarse: { label: 'Coarse (Cold Brew)', sequence: 1 },
                medium_coarse: { label: 'Medium-Coarse (Chemex)', sequence: 2 },
                medium: { label: 'Medium (Drip Coffee)', sequence: 3 },
                medium_fine: { label: 'Medium-Fine (Pour Over)', sequence: 4 },
                fine: { label: 'Fine (Espresso)', sequence: 5 },
                extra_fine: { label: 'Extra Fine (Turkish)', sequence: 6 }
            },
            default: 'medium',
            mandatory: true
        }),
        brew_method: ChoiceColumn({
            label: 'Brewing Method',
            choices: {
                espresso: { label: 'Espresso', sequence: 0 },
                pour_over: { label: 'Pour Over', sequence: 1 },
                french_press: { label: 'French Press', sequence: 2 },
                chemex: { label: 'Chemex', sequence: 3 },
                aeropress: { label: 'AeroPress', sequence: 4 },
                cold_brew: { label: 'Cold Brew', sequence: 5 },
                drip: { label: 'Drip Coffee', sequence: 6 }
            },
            default: 'espresso',
            mandatory: true
        }),
        serving_size: ChoiceColumn({
            label: 'Serving Size',
            choices: {
                piccolo: { label: 'Piccolo (3oz)', sequence: 0 },
                cortado: { label: 'Cortado (4oz)', sequence: 1 },
                cappuccino: { label: 'Cappuccino (6oz)', sequence: 2 },
                flat_white: { label: 'Flat White (6oz)', sequence: 3 },
                latte: { label: 'Latte (8oz)', sequence: 4 },
                americano: { label: 'Americano (8oz)', sequence: 5 },
                large: { label: 'Large (12oz)', sequence: 6 },
                extra_large: { label: 'Extra Large (16oz)', sequence: 7 }
            },
            default: 'cappuccino',
            mandatory: true
        }),
        sweetness_level: IntegerColumn({
            label: 'Sweetness Level (1-10)',
            min: 1,
            max: 10,
            default: '5'
        }),
        caffeine_shots: IntegerColumn({
            label: 'Espresso Shots',
            min: 1,
            max: 5,
            default: '2'
        }),
        total_price: DecimalColumn({
            label: 'Total Price',
            read_only: true
        }),
        order_status: ChoiceColumn({
            label: 'Order Status',
            choices: {
                pending: { label: 'Pending Review', sequence: 0 },
                confirmed: { label: 'Confirmed', sequence: 1 },
                preparing: { label: 'Preparing', sequence: 2 },
                ready: { label: 'Ready for Pickup', sequence: 3 },
                completed: { label: 'Completed', sequence: 4 },
                cancelled: { label: 'Cancelled', sequence: 5 }
            },
            default: 'pending'
        }),
        special_instructions: StringColumn({
            label: 'Special Instructions',
            maxLength: 500
        }),
        order_date: DateTimeColumn({
            label: 'Order Date',
            default: 'javascript:gs.nowDateTime()'
        }),
        requested_pickup_time: DateTimeColumn({
            label: 'Requested Pickup Time'
        })
    },
    extends: 'task',
    display: 'order_number',
    auto_number: {
        prefix: 'COFFEE',
        number: 1000,
        number_of_digits: 6
    },
    allow_web_service_access: true,
    accessible_from: 'public',
    actions: ['create', 'read', 'update', 'delete']
})