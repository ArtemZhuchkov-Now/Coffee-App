import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Premium Coffee Beans Sample Data
export const jamaican_blue_mountain = Record({
    $id: Now.ID['bean_jamaican_blue_mountain'],
    table: 'x_snc_coffee_desig_coffee_beans',
    data: {
        bean_name: 'Jamaican Blue Mountain',
        origin_country: 'Jamaica',
        region: 'Blue Mountain Region',
        variety: 'arabica',
        processing_method: 'washed',
        roast_level: 'medium',
        flavor_notes: 'Chocolate, nuts, mild citrus, clean finish',
        acidity_level: 'medium',
        body_strength: 'medium',
        altitude_grown: '1200-1700',
        harvest_date: '2024 Season',
        price_per_pound: 89.99,
        premium_grade: true,
        single_origin: true,
        organic_certified: false,
        fair_trade: true,
        cup_score: 87.5,
        available: true,
        description: 'One of the most sought-after coffees in the world, grown in the misty Blue Mountains of Jamaica. Known for its exceptional balance, mild acidity, and complex flavor profile.'
    }
})

export const hawaiian_kona = Record({
    $id: Now.ID['bean_hawaiian_kona'],
    table: 'x_snc_coffee_desig_coffee_beans',
    data: {
        bean_name: 'Hawaiian Kona Extra Fancy',
        origin_country: 'United States',
        region: 'Kona District, Big Island',
        variety: 'typica',
        processing_method: 'washed',
        roast_level: 'medium',
        flavor_notes: 'Smooth, nutty, low acidity, rich body',
        acidity_level: 'low',
        body_strength: 'full',
        altitude_grown: '500-800',
        harvest_date: '2024 Season',
        price_per_pound: 79.99,
        premium_grade: true,
        single_origin: true,
        organic_certified: true,
        fair_trade: false,
        cup_score: 86.0,
        available: true,
        description: 'Grown on the volcanic slopes of Mauna Loa, this Extra Fancy grade Kona offers a smooth, rich flavor with minimal acidity and a luxurious mouthfeel.'
    }
})

export const ethiopian_geisha = Record({
    $id: Now.ID['bean_ethiopian_geisha'],
    table: 'x_snc_coffee_desig_coffee_beans',
    data: {
        bean_name: 'Ethiopian Geisha Estate',
        origin_country: 'Ethiopia',
        region: 'Yirgacheffe',
        variety: 'geisha',
        processing_method: 'natural',
        roast_level: 'light',
        flavor_notes: 'Floral, jasmine, tropical fruits, tea-like',
        acidity_level: 'bright',
        body_strength: 'light',
        altitude_grown: '1800-2100',
        harvest_date: '2024 Season',
        price_per_pound: 124.99,
        premium_grade: true,
        single_origin: true,
        organic_certified: true,
        fair_trade: true,
        cup_score: 92.0,
        available: true,
        description: 'An extraordinary Geisha varietal from the birthplace of coffee. This natural process showcases intense floral aromatics with complex fruit notes and exceptional clarity.'
    }
})

export const panama_geisha = Record({
    $id: Now.ID['bean_panama_geisha'],
    table: 'x_snc_coffee_desig_coffee_beans',
    data: {
        bean_name: 'Panama Geisha Auction Lot',
        origin_country: 'Panama',
        region: 'Boquete, Chiriqui',
        variety: 'geisha',
        processing_method: 'honey',
        roast_level: 'light',
        flavor_notes: 'Bergamot, orange blossom, honey, silky texture',
        acidity_level: 'bright',
        body_strength: 'medium',
        altitude_grown: '1500-1650',
        harvest_date: '2024 Season',
        price_per_pound: 199.99,
        premium_grade: true,
        single_origin: true,
        organic_certified: true,
        fair_trade: true,
        cup_score: 95.5,
        available: true,
        description: 'Championship-winning Geisha from Panama, processed using honey method. This auction-grade lot offers unparalleled complexity with floral and citrus notes.'
    }
})

export const colombian_pink_bourbon = Record({
    $id: Now.ID['bean_colombian_pink_bourbon'],
    table: 'x_snc_coffee_desig_coffee_beans',
    data: {
        bean_name: 'Colombian Pink Bourbon',
        origin_country: 'Colombia',
        region: 'Huila',
        variety: 'bourbon',
        processing_method: 'anaerobic',
        roast_level: 'medium_light',
        flavor_notes: 'Stone fruits, berries, wine-like, complex',
        acidity_level: 'high',
        body_strength: 'medium',
        altitude_grown: '1700-1900',
        harvest_date: '2024 Season',
        price_per_pound: 67.99,
        premium_grade: true,
        single_origin: true,
        organic_certified: true,
        fair_trade: true,
        cup_score: 88.5,
        available: true,
        description: 'A rare Pink Bourbon varietal processed using anaerobic fermentation. This unique coffee offers wine-like qualities with intense fruit flavors and exceptional complexity.'
    }
})