import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bean_colombian_pink_bourbon: {
                        table: 'x_snc_coffee_desig_coffee_beans'
                        id: '0b636b1595de48e2850c988185e8fe52'
                    }
                    bean_ethiopian_geisha: {
                        table: 'x_snc_coffee_desig_coffee_beans'
                        id: '6bf777d8bf9b4dc6aefba07de12ea32b'
                    }
                    bean_hawaiian_kona: {
                        table: 'x_snc_coffee_desig_coffee_beans'
                        id: '2d351b9d95d04c6e8c0360ea9db0779a'
                    }
                    bean_jamaican_blue_mountain: {
                        table: 'x_snc_coffee_desig_coffee_beans'
                        id: '55ce662dcb914a8694a7097c7041e19a'
                    }
                    bean_panama_geisha: {
                        table: 'x_snc_coffee_desig_coffee_beans'
                        id: '4fa79750bb5c489a9270aa286fad8af5'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'de3455543eac4176b4ad333c4e8561f9'
                    }
                    calculate_order_total: {
                        table: 'sys_script'
                        id: 'a6b888dfd98e4f6ebed6a5bda420c1a4'
                    }
                    'coffee-designer-ui': {
                        table: 'sys_ui_page'
                        id: '799ba2bb11aa421bbdf520b792ceada3'
                    }
                    flavor_caramel: {
                        table: 'x_snc_coffee_desig_flavor_profiles'
                        id: '9a1a608ce8924e7aabbcde3b8be31410'
                    }
                    flavor_cinnamon: {
                        table: 'x_snc_coffee_desig_flavor_profiles'
                        id: '35c305bb124b407faa9e7005550ebde2'
                    }
                    flavor_coconut_cream: {
                        table: 'x_snc_coffee_desig_flavor_profiles'
                        id: 'dc485be088774a2e8c7381223382d018'
                    }
                    flavor_dark_chocolate: {
                        table: 'x_snc_coffee_desig_flavor_profiles'
                        id: '711f23126cbe4e0cabff2f9624893c23'
                    }
                    flavor_hazelnut: {
                        table: 'x_snc_coffee_desig_flavor_profiles'
                        id: '6c4741252b7a4ab697372baf1c3fd4db'
                    }
                    flavor_irish_cream: {
                        table: 'x_snc_coffee_desig_flavor_profiles'
                        id: 'fa5f76923f4242d993822d9bd62dcae8'
                    }
                    flavor_lavender_honey: {
                        table: 'x_snc_coffee_desig_flavor_profiles'
                        id: 'fd93035ff236460a825a2cadf348f5ad'
                    }
                    flavor_pumpkin_spice: {
                        table: 'x_snc_coffee_desig_flavor_profiles'
                        id: '37eabab67b1b4a849e835476903210d6'
                    }
                    flavor_raspberry_white_choc: {
                        table: 'x_snc_coffee_desig_flavor_profiles'
                        id: '72aad05b484d463c99302182f5d58665'
                    }
                    flavor_vanilla: {
                        table: 'x_snc_coffee_desig_flavor_profiles'
                        id: '29606e1a09cf45c895314a28038d0fcf'
                    }
                    milk_2percent: {
                        table: 'x_snc_coffee_desig_milk_types'
                        id: '43c03903f6a344b48dc47b1a90d59e68'
                    }
                    milk_almond: {
                        table: 'x_snc_coffee_desig_milk_types'
                        id: 'b5342376a6ed4777bffe84793b354629'
                    }
                    milk_cashew: {
                        table: 'x_snc_coffee_desig_milk_types'
                        id: '9841bd3ac0004defa455dfa1b7e03d68'
                    }
                    milk_coconut: {
                        table: 'x_snc_coffee_desig_milk_types'
                        id: 'df3fce5bdadd45a88d806aa88c87b64e'
                    }
                    milk_macadamia: {
                        table: 'x_snc_coffee_desig_milk_types'
                        id: '7709d84699bb469e8f712c53f85bd094'
                    }
                    milk_oat: {
                        table: 'x_snc_coffee_desig_milk_types'
                        id: '0fb0a71b5e324f25a0fc4adedc55396e'
                    }
                    milk_skim: {
                        table: 'x_snc_coffee_desig_milk_types'
                        id: '7d0d81222dc34a9a8f6d280a3fef0f20'
                    }
                    milk_soy: {
                        table: 'x_snc_coffee_desig_milk_types'
                        id: '0ec383de696a411eb740d258507f69a5'
                    }
                    milk_whole_organic: {
                        table: 'x_snc_coffee_desig_milk_types'
                        id: 'e67ee28a3df745c590bba91621f12548'
                    }
                    milk_whole_regular: {
                        table: 'x_snc_coffee_desig_milk_types'
                        id: '852d444ea94344e89ff775d70ae38994'
                    }
                    notify_order_status: {
                        table: 'sys_script'
                        id: '5c3cb5464ded4792873da69a7aff334b'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'fc3ecf28e97b4479b7d8350ff3b988ad'
                    }
                    set_order_defaults: {
                        table: 'sys_script'
                        id: 'e063b96045da4cf3bb8a5cb2369e6ba6'
                    }
                    'src_server_coffee-order-logic_js': {
                        table: 'sys_module'
                        id: 'bec7ad2e1d7d4a6c9ef0c6238a39e18a'
                    }
                    validate_order_combination: {
                        table: 'sys_script'
                        id: '4e49944e57e74d748f82696d2d1490c0'
                    }
                    'x_snc_coffee_desig/main': {
                        table: 'sys_ux_lib_asset'
                        id: '87353f6f10b54a52b7f098ef6740492d'
                    }
                    'x_snc_coffee_desig/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: 'b00478433e6049f0a33316a4de9385d4'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '0024e4c21a8c403ebb56e5ed0cc8122b'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'texture_profile'
                            value: 'light'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '01a82ba149e24ea69cd700185e81e081'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '03a4943bb279423da7e1e408065683ea'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'gluten_free'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '045aa845f9944a1ea36669f4951bf9a7'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'fat_content'
                            value: 'whole'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '048ef2ec4aa94dcbb5f0183b628a587b'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '04924232eb1e4469b7baa69668b6566d'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'category'
                            value: 'plant_based'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '04dd3f5ec634474bb9f2770dde3eb46e'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0652e235181b4ebe958c7d2c4b0c4293'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'serving_size'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06780550f6824f9facd1ca7692026e43'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'sweetness_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06a54998468c47eeb71e98ab7a12b115'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'cup_score'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '06dccccc80cb4fe380d6bd6525a09b47'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'variety'
                            value: 'typica'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '06e0d4e1cb6d437ab4d960e9a86064ff'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'serving_size'
                            value: 'extra_large'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '07163a9820c145a4b8f0d60434eb5e5a'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'caffeine_shots'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '07484b161d504649a120e22ea551e3c0'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'temperature_compatibility'
                            value: 'cold_only'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '0759948cc37441d2826bcf5adbc50a7c'
                        key: {
                            category: 'x_snc_coffee_desig_coffee_orders'
                            prefix: 'COFFEE'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '07bce4037c44416097ae95ca01f66ea1'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'intensity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b230af9aa2e4ac2af199e2831f699c0'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'usage_instructions'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0caf7426ac3547e49f2d4cee478f2ef5'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'drink_type'
                            value: 'cappuccino'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0d4630827c7344cf9c15c960d997f846'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'temperature_compatibility'
                            value: 'best_cold'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0dd18daeb07641349ca6f1996eade831'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'intensity'
                            value: 'subtle'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0e8211e8d7974c2a816989363baa3082'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0eac8d15eb294ef6a8a9556a56afd517'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'serving_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '10d6a8c45e3049068cb36ad343fdebd7'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'steaming_quality'
                            value: 'fair'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '11180f0ffdea44ab91056f68ca1713c7'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'caffeine_shots'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '11a787f557044006b5f982ae592c38cb'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'category'
                            value: 'specialty'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '14e8218045c44ec9841962dfbf4371b3'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'serving_size'
                            value: 'large'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '15004ae7cace4847bf30771b00951fee'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'processing_method'
                            value: 'carbonic'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1620207ca8664f4287b73755ef62f362'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'customer_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '17a2ff44e22f486f98005403245368a0'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'intensity_level'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '184ec5bc98324e19abe3c108737ad0f4'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'temperature_compatibility'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '18aeec04599742b29f5c87b2db464334'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'steaming_quality'
                            value: 'good'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '19a3d3877f934bae86dc5aa8336523e1'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'vegan'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1abd216c7cab4af1b3f38e21c750a780'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'application_method'
                            value: 'topped'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1ad58158249041df883d7eb3be29181b'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'vegan'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1b041640bb6c4abe8993fcd400e4aa1c'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'acidity_level'
                            value: 'low'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '1e090a6c0abd4feb82ddb52531d87e0f'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1e16564abaa94106835ccb9451b82eaf'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'organic_certified'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1e6e2ee12e6d4e47aa8c5d3c14536415'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'available'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1eb537de18a845909a9223538eb671ff'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'sweetness_level'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1ee5560a3f944c80bc142675275ec57f'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'allergen_info'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1fee36d09f7140caad1850beb23c1601'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'artisan_made'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '20fd71d67318493eab36e87d80d5196f'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'single_origin'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2124bc928e504c839fc50b4959b53e48'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '21e2db8366364c55a5ff271195e4f46e'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'vegan'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '22d3464be17c4a1f914b3741a2b5ebb9'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'sugar_free'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '248629830b504f32b35f494315fb617e'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'order_status'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '256110ed6fa645e8a643799dac82c78e'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'altitude_grown'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '26725c8d75e946bf9a256311112d9707'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'processing_method'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '26956f5f08634f4d82c0020a3ac13c9d'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'price_per_pound'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2779f4dbc44144dfa6e637f73cef1438'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'intensity'
                            value: 'bold'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '2791ca8608bc49aa9fd82fa5a66787ed'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2869fcc9882d4567bed0e91f9b1bee39'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'available'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '28a3d702bdde4ad5bda0b9aa333e3ad2'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'region'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2965385ac18f4243b73efc5cb06f5921'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'variety'
                            value: 'bourbon'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2995e48440a24e6e87ad3226d5795f9d'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'category'
                            value: 'alcohol'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '29aadf0932d64d8d945e143747496edf'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'harvest_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2a8a165649a7435f82b8de4944cb86a1'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'order_status'
                            value: 'confirmed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2ac4dd3ca81644e2aaee1ffccaba9cb8'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2bd627e26d8f4c218e13a4a004408a16'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'variety'
                            value: 'caturra'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2cb6b17be74c43a887858264ddac02b5'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'brew_method'
                            value: 'cold_brew'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2d0ba54f3b8a4dcd92d098257de63132'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'fat_content'
                            value: 'extra_rich'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2ecdebe6b8cc48148e20de6a10ecb1f5'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'temperature_compatibility'
                            value: 'both'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2f02cab829e047e4b4a0979972fdd7b0'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'organic'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '321fb2451596462b8d9724b9452b917a'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'application_method'
                            value: 'layered'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '32890eb961ab45c0a5b0bb8cdfd0237b'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'body_strength'
                            value: 'full'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '339ab3c657314137b1848973a1a3d7ed'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'customer_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '35d9c12207b94b3895de5cbc98210510'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'flavor_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '36215f27575e430da0a6ea389107ed42'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'available'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3674f5ba2e6749e09b831aa1612aa511'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'texture_profile'
                            value: 'creamy'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '38f4c22ab5d84d85920fcbba034fbc5c'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'variety'
                            value: 'excelsa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '38fc8ad4f34c4b55bf69519b8bc72aaa'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'temperature_compatibility'
                            value: 'hot_only'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '391da15787ef4005bb9a929f83f2ee4f'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'steaming_quality'
                            value: 'excellent'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3cf3ba38ab1f4bf8b233d19005016a79'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'processing_method'
                            value: 'anaerobic'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3ffa068ddec74db9be544d9a76c349c6'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'category'
                            value: 'extract'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4170a7dbbf264aefb0e2aa0d6af9c47e'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'temperature_compatibility'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4275f9d2ff4d425dbbaefb1c8c22410e'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'drink_type'
                            value: 'cold_brew'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '44299da6a1c140c4917f81df09890dac'
                        deleted: true
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'serving_size'
                            value: 'flat_white'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '44fbdf46a9804737ae855e2fdb20b5fa'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'category'
                            value: 'seasonal'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4532f6850660441182a828091dca2473'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'seasonal_availability'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '45bb46ba27064c2cb590d1196902bce0'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '46c300b81ad543409481a7176215ae2d'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'gluten_free'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '46efc2afbfd448e8860e3595235d754e'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'temperature_preference'
                            value: 'extra_hot'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '478fa8957aa54260861b1fb2fb037212'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'usage_instructions'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '47bca58b954842c4ab0f2caf74b6e15e'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'bean_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '480d528d72264a2ca0091ecef6e21968'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'steaming_quality'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4832e28bf7c6473b96bc13f1baaacdf4'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'organic'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4856bf1a830a45f29a8f740f5360cdd7'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4a3982ae4b5645aba004b2d864062fa3'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'brew_method'
                            value: 'aeropress'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4bb2d44c25e849bda826191c1f92820b'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'temperature_preference'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4c0ce2be8fe74a3c9fb24734972f1dfe'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'intensity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4cc2082baf2e449fb6fb672b9dde82df'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'drink_type'
                            value: 'macchiato'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4cd04230c32f4633bf6de78f03a815cd'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'brew_method'
                            value: 'french_press'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4d4076ee7cae47a1a2391c7ceff67ecc'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'processing_method'
                            value: 'semi_washed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4da3278563a1437aa01056aea688d070'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'temperature_compatibility'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4dfac3fea50442beb1518d96da753cdd'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'seasonal_availability'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '50c194a1dfbe44c494bd3be317ea3ca8'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'sweetness_level'
                            value: 'sweet'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '50da5eae8e4640909518156ad883a341'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'organic'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '51b444cc87fd4a73afb19d2f94d12171'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'texture_profile'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '52111b7181cd4e11b48c7a23d9d7674f'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'organic'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '52860714a6fb4c2e891afa21ee407651'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'origin_source'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '54213b3abb594cf39b861e6da01e91f2'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'milk_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5472e2bb362d40de949d24882bc6f56c'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '55c054190c25463ebc2cb646c9471a96'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'intensity'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5650a169eae44ae08b11d30a231ceabb'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'acidity_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5966245d874d443d83ce1007005eddcc'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'flavor_profile'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '59dbe8967e2f40a8aa2c54cd573bd35f'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'special_instructions'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5a859f08a4704d209dc363ea7ae5ac3e'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'coffee_bean'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5ad9cf79ec17452d9e4db6bdb83fa385'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'fair_trade'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5cd35440874b4d1391e5973a360c3d5b'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'grind_size'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6024542fe3944b5e92a66b12f620d1a6'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '61a36f09412442569a75786267dc1dba'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'order_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '61ae2b5d06c249adb7b607c72fad47a1'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'sweetness_level'
                            value: 'moderately_sweet'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '63acd44cbae54bf7b01cebb3d81dac40'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '63d3f83288814fffa32ce61bf44af91e'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'lactose_free'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6431f71cdf284c17982a579c16c3e114'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'variety'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '64463195f2fd4df998ecec79af56d7e8'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'category'
                            value: 'specialty'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '645475a723db418dbc492ffec65db62e'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'roast_level'
                            value: 'medium_dark'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '64931092c49d48ee86026dfe670f210f'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'customer_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '65994626e0ff44d487676ac4f829a337'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'serving_size'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '66566cd12d544038857f5af749390d09'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'texture_profile'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6674ba7f08b744f682a41bca76e987a5'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'sweetness_level'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '68778648fd8b4380918dfb71fa8ea36d'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'steaming_quality'
                            value: 'poor'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '6af297cb5a1e4d8d98f552855a850db3'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6beed9e394394e19b21c7c22b1528495'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'region'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6c3b4f8444a0483685d852f73f901672'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'temperature_compatibility'
                            value: 'both'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6c4bdf84ef2c42f3978e84acdac081d7'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'category'
                            value: 'sweetener'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6da0c3393b304a28815f9e92dd946cfd'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'drink_type'
                            value: 'cortado'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6e43f9d9235641ea8fd0c7690e9f1dd4'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'drink_type'
                            value: 'flat_white'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6ecab303808641359c63754c9465784b'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'category'
                            value: 'dessert'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6f37f6fe69e54c5abde431a9defe2ee8'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'order_status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6fb0d52cdc3244e18ea8d7c22c028c56'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'intensity_level'
                            value: 'subtle'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '70471eb393c34008820e1fbec7839fd6'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'order_status'
                            value: 'preparing'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7087990f00c84e19acfc9b24d45f8696'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'category'
                            value: 'premium'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '711d5b1d14134a4f975ef76d25bac096'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'harvest_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7216f7c7fd6e4715b01721bbf56681fc'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'fat_content'
                            value: 'nonfat'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '72d963a485744ce7a4aa121b2ad9624e'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'drink_type'
                            value: 'iced_coffee'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '74b9545d352a422b85aafb0729133bbe'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'pairing_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7563e2c1c350404696e0027102bc0181'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'additional_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '75b33d1303db4573a154146ecd9f0af8'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'intensity_level'
                            value: 'mild'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '75b53afd3a6d4b42bd7641109759aeaa'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'brew_method'
                            value: 'chemex'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '75c0f948bf2f4f039c07306c68471eec'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'sweetness_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '75dd38642d7b436c829d18bb1c51f5f0'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'roast_level'
                            value: 'dark'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '75ddaef657fb47b6a5b21be2f8b82479'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'order_status'
                            value: 'ready'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '75f79addc77e48ab88879a1f3bdb63a4'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'allergen_info'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7722c7e73cb546138b70bdb94317621e'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'order_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '793bb95edf284faa8a9c533b32d2ab6c'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'flavor_notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a40fb29ae4440889ba03fe34be47f0c'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7b12a777cc34414d98bababdb7547bbd'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'category'
                            value: 'floral'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7b142dfda55843cabed5f9c28bbc6b91'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'flavor_name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7c67d08db1624a5bbaba4298af3bb435'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'drink_type'
                            value: 'frappuccino'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7c76101055aa496d91c80728dfe8c734'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7dc48b070ac9427c9bc8bd9c6db1d728'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7dfc953943b94affa90a07b256160b53'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'acidity_level'
                            value: 'bright'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7e929a2dd9c64393aca50fd4d1e92719'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'grind_size'
                            value: 'fine'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7ec237f3c5d94a7f809373274ed0e7c0'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7f31dc8640244fb9b32ba5d6ae9bccd8'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'steaming_quality'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7f84271b160e4ea2bcd80b24c6ccbb2e'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'coffee_bean'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7fdd807d139c49ab951c92d67dd8be4b'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'intensity_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '817e662f080f4fb7961e0b5e831bbad3'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'application_method'
                            value: 'side_serving'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8578059504dd4ab590b17bf62ab05318'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'processing_method'
                            value: 'washed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '86720ebd01514245bd862e9a8a01e26b'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'bean_name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '86b60e00e72944e381beeb61e958f85f'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'drink_type'
                            value: 'americano'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '86ee1d810d7f4e3fabf2eafbd95ece4e'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'special_instructions'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '872b0796e5474365b438ca3261737b70'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'category'
                            value: 'chocolate'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8a62cb9c97544651982dbc42c54bd569'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'category'
                            value: 'nutty'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8aa01fbebedb48f08159664a60ccfcf8'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8b5a066648594cfd8017d3af2fbd1af9'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'category'
                            value: 'spice'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b5eafa539fa4a778ece5772ed962e8e'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'allergen_info'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8c32cb628e514ded964692a051d4173b'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'origin_source'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8de4faaf407f43c09441564c36db9fa9'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8df46ba776cb4c1eb334b3511dd3d4e0'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'requested_pickup_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8ea23933f1f34ca789986888c209c0a8'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'order_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '91c5791505f14b1ba101584d5454107b'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9269702e9f374f4e9fd7616de061bcdd'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'altitude_grown'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '928642c0a2c644c283c830de637834b1'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'category'
                            value: 'cream'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '92bc7d14740f4041aa967315289fb0b8'
                        deleted: true
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'serving_size'
                            value: 'latte'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9351294295fc479e8ab34fdf07b26da7'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'additional_cost'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '93d741993fea4c9aabfcf74712468ba6'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'cup_score'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '94056cbd279a4beeb27f0363b4d909c1'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'natural_flavor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9462b5e09ba44160b4666b6772b8fbee'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'sweetness_level'
                            value: 'lightly_sweet'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9465edab3ef74e3bb0ea1bc7e5770155'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'variety'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '946dc0beb0654ccc828e3636659ac947'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'temperature_compatibility'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9497345855e64716b25892d41de3726d'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'available'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9596b1c3c95646c6a0a8e056f9ca7b0a'
                        deleted: true
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'serving_size'
                            value: 'cappuccino'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9631e407a4244a53af5f97f940fde6eb'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'grind_size'
                            value: 'medium_fine'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '96bf36b8628a44a498764b0d124173b1'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'fat_content'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '96e9f9b995f24664915ee6eb96b9ab64'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'flavor_profile'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '96ea71520b6248fb95540d551274e370'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'fat_content'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '981135b08eee40479711fc5e3dfe80db'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'sugar_free'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '982b069c26cd458dbadd29461e3be085'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'lactose_free'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '98c74f52ea1245e8a011fb38734de708'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'premium_grade'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '98d42345754743d59bfb86a37b837cd0'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'vegan'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '99c6fcbc842b46a6a3624cbaf2e9a098'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'fat_content'
                            value: 'low_fat'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9b475cea4f2d498fb1718de89c026c18'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'processing_method'
                            value: 'honey'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9c4c6052df3640deabcb8ad3888e4bb9'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'gluten_free'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9d114886c11d4af38dbc51e78d87f582'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'allergen_info'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9d31a62f32ad4aaa899192fa412185cf'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'body_strength'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9d579672e2e44f04ad12ed7c8837cc77'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'temperature_compatibility'
                            value: 'cold_only'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9ed04d41d76d4f529be7923003f5b0ab'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'serving_size'
                            value: 'piccolo'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9f94d2fac8a149a8ac82994deb11572f'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9f99be37e0e2435caf75e7db625f6118'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'flavor_profile'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9ffccca6997c442194bad0e8325638e3'
                        deleted: true
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'serving_size'
                            value: 'cortado'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a0c6740dad64477da9d9bf9d84384098'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a41b32ce3dd24b4eada5398fe1667de1'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'drink_type'
                            value: 'mocha'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4423b51bb4e47bba874a2fb0722a2bf'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'body_strength'
                            value: 'light'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a44b5bdc708d4911af4fa06ae336dc6a'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'flavor_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a45359a46f114fea943720c885249d34'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'vegan'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'a4907bfde392445ab60e9da694454548'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a4fc75d635fc4ccdbf444312b0e0e72d'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a50883d68d904dbc868b2c59dcd58212'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'brew_method'
                            value: 'drip'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a8fc75df3329433a97c6673fbc85cc76'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'organic_certified'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a908f6ecef32490abda8af8fcd338aa7'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'roast_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aa7691ae71484d1aa31cdf8697ecd30e'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'temperature_preference'
                            value: 'iced'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'acab9eaae92546bb81b4c432abf4daf5'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'grind_size'
                            value: 'medium_coarse'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ae7ef510098443769f7f2e34ba40b9df'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'additional_cost'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b35d3f8d2a0e4cd285f47bfefa434531'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'category'
                            value: 'spice'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b3646884e58d46c5b514e3064c3477a7'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'premium_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b41746b165034845b7ee5c8937f6090a'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'body_strength'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b568307eb35145dc898ca170eecb2510'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'category'
                            value: 'classic'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b7dc7214c20146aa84b25b17e5062c12'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'variety'
                            value: 'robusta'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ba6497e1772b41aaa694561690b98f29'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ba958ac7d232480897cfd6c4b26c87ec'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'total_price'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb0f8b161d3649deaeefda841f742c32'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb43c9000bba45e5af2bd8ebd18e2961'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'processing_method'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bd91026052aa419895d85ba327ce6803'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'addin_name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'be88e7982a7741199ac914abf5ee28e4'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'category'
                            value: 'dairy'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c03c638c24b44b0580a3c13df78660b9'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'premium_cost'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c2f9eb901ce64b0c8de2a9c84538b1e2'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'gluten_free'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c3ba28b1a6f04f63956048d90a9b195b'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'grind_size'
                            value: 'coarse'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c3ebc6eda9124ec094dff3d41726fe25'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'acidity_level'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c3fbb8e05bad4de69031834d53706fc5'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'order_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c45e146e1bd74dd7bdaec90a92238e1f'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'total_price'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c45e451ffb9840c79eca485f412c9fbc'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'brew_method'
                            value: 'espresso'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c499c79af5e747a3a564b0c80b368896'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'vegan'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c49c136ab9024dd49cdd6eb37739a40f'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c51f9bff176547f8b438a00a64321a9b'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'roast_level'
                            value: 'french'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c5a5389c1baa4fb597904a39f0b3ed75'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'brew_method'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c61892a1b85f45ff90332ed4c98bc2c8'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'variety'
                            value: 'geisha'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c6368e1ba03946a19b9e3307a275f19c'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'order_status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c6d0ffe32abe4ee69861264b59f7fb63'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'addin_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c721fdac46844818a4b25a2a40962141'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'roast_level'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c77a651aa34741e8afcf19e103e59aa8'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'intensity_level'
                            value: 'dominant'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c798f74359fb47a6b68eb22c381eb9e9'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'sugar_free'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c86bc4e28e544abf9fd53bc938734931'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'acidity_level'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c8a738bb1e3846e3985fdda6b6f6761a'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'roast_level'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c975756774e74b8d9d3cbb5e8f48433d'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'category'
                            value: 'topping'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c9ddd614eda74d7fbd9720caf73ad5fb'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'brew_method'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ca0a85643a894313bb0c219b4ab86a7c'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ca33e47ff9e84b1ca5634c6859b92673'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'body_strength'
                            value: 'heavy'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca5379069bf74ac080d80af9e133a47a'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'origin_country'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cad39169181947db97ebe4f55b902b4d'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'texture_profile'
                            value: 'thick'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cb35b0393c22416d8580183c696cc846'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'brew_method'
                            value: 'pour_over'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cc02367fe58443f198a06fc460825bf1'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cc3d73cfc33249aabf5e0f1da6f718ec'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'origin_country'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ccbba10a487e4f0789207f2244c5f517'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'available'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ccbeb63b62c243adb61747db9885b59a'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'variety'
                            value: 'arabica'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cdfef15bdb074c828a3ed5bf75826f80'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'category'
                            value: 'fruit'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ce852272f8af4ae2a862d9fb8c5fa7b7'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'temperature_preference'
                            value: 'hot'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cea653cda1eb42c28d9fad126e93926c'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'additional_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cf761c2a7f834d028fc9b1ba3e1b59aa'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'single_origin'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'cfa1f1ac9bdc4a94a06159a0abad5357'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd02288a4caf7469e935136315c83f1e7'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'grind_size'
                            value: 'extra_coarse'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd07f5afa1bcf42a88223763bb8851d80'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'application_method'
                            value: 'infused'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd09f8b3aa0cb4594a791c26c02634bd1'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'fat_content'
                            value: 'variable'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd0b82e1b8aec48f3b0d668f184060d69'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'requested_pickup_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd2033999b3d74f309c59860012005e42'
                        deleted: true
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'serving_size'
                            value: 'americano'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd2720f67f01b4970a465fe079b8f4393'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'grind_size'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd2960cbcb72043adb32d72df8a35b0db'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'application_method'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd2cecdc9bc6547f7aa4d52113d8a3f0d'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'drink_type'
                            value: 'latte'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd3b575b6ac2f4356a4ba86fe3578281f'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd42289caeeec4431905c756fe6b6936c'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'pairing_notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd472bc26f9fc4d81b82d917a48b2ddd6'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'milk_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd4e621d61e0d4a74b1e18e7dca476814'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'organic'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd4f5514b4fcf4ec9bf4c51f47b51fd48'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'limited_edition'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd540f9c0d38b4587ad3b6150ab5cfbda'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd762df05ae5545f085021d2f4e00b4df'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'temperature_preference'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd8840dbb4d1d4fb99efb4556b208be8c'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'body_strength'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd9374ee2b9584b10be7af2a8364cc446'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'limited_edition'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd952a56ab6d2417ba48c70402eea0f68'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'intensity'
                            value: 'light'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd989755fd48841e3a80b367c7560bcd1'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'sweetness_level'
                            value: 'unsweetened'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd999cd9835ab422d9fa27f6e60409ac8'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'category'
                            value: 'premium_dairy'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db47402247e94e9189993311ead625ee'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'milk_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dc25a73118314c37a6dbc256cefd9a01'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'available'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dc6cb039e254425d99598ac33c9d7b29'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'intensity_level'
                            value: 'noticeable'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dc80d93c05194deebad237610924dfed'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'organic'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dd0d63ac2e5141b286eb9ca3465d3929'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'intensity_level'
                            value: 'prominent'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dd52b49ca2224af289f1bfcf06d35dbb'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'application_method'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'de6276e5cea04b3a87ab558ab694d03a'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'grind_size'
                            value: 'extra_fine'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'defcb0042f26455e93967f4733fe1d84'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'application_method'
                            value: 'mixed_in'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e00d430c7a304aafb46f79eda0fceb25'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'sweetness_level'
                            value: 'very_sweet'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e0e23a0d952d441c9694e5c077bfd9e3'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'flavor_profile'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e1e42b4d7540480b9b4e44060e300ba1'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'fair_trade'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e38e881433154309a585ef84d3fc2dc2'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'order_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e41f4957b75345918041943802afd539'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'customer_email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e4bf593eb91843dfbc810dd206230a1c'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'available'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e603c091fb194965aa4c8b694b16457e'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'temperature_compatibility'
                            value: 'best_hot'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e7b696ccf334410aab8206c082795297'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'temperature_compatibility'
                            value: 'hot_only'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e866d3f561ae4c359d4edaa5085cf87c'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'serving_size'
                            value: 'small'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e8efe82be0a943bfbd38fc1b4f68b6f2'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'milk_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e9bcd95d9e924a248036bfb9b0ecb71a'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'steaming_quality'
                            value: 'not_recommended'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e9c9ea6c6e274c07a73d0e63735b7aee'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'drink_type'
                            value: 'espresso'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ea88be381d914dc3b03aceb5899c5aa3'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'temperature_preference'
                            value: 'warm'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ebdc51e484524b89b3a695a18b3471a1'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'natural_flavor'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ee4588e3b2b74cf0a241922c58cd4b99'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'roast_level'
                            value: 'medium_light'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ef073c5c08294d4e882c3fa6b20adaf8'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'texture_profile'
                            value: 'frothy'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f010f39dad394a94a56984a74fe7f6a8'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'acidity_level'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f078ecdab22b4e788194ec9781ddef21'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f1290e80318745e6bc7f3f5617558864'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'processing_method'
                            value: 'natural'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f4dba38143c841a9867bee41b9aff2f9'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'available'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f4f4d131e7ca4a13979656a1eb0a3c61'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'price_per_pound'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f5bc6855087643cca83037759fa8d140'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'order_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f5d6e3b33fdf40f59dae272b07feca7a'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'artisan_made'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f6a83ef45bab45e998c849442c10b940'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'drink_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f735a7a2b2cb40fc829156028148cfa0'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'temperature_preference'
                            value: 'cold_brew'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f84881849e9b48e4acd61f154dea91f8'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'premium_grade'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f94f10cc186e4bb4ab6530d40169214f'
                        key: {
                            name: 'x_snc_coffee_desig_flavor_profiles'
                            element: 'intensity'
                            value: 'intense'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f9c8afa4ada74bf0be1fd662f3c36d66'
                        key: {
                            name: 'x_snc_coffee_desig_milk_types'
                            element: 'texture_profile'
                            value: 'rich'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fbf2ddf1efc64d649748cb53f16ac9ad'
                        key: {
                            name: 'x_snc_coffee_desig_premium_addins'
                            element: 'sugar_free'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fd6af8ddcd434fe4958418edcbd5d9e7'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'roast_level'
                            value: 'italian'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fde239614ee1410cbe2c6f41f848dedb'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'grind_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fe244c9800944454990e91fecef68d4b'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_orders'
                            element: 'drink_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fee90a37084049e28464fe6dde938b32'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'variety'
                            value: 'liberica'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ff9ace20ffc04c198222ba05ac6492a9'
                        key: {
                            name: 'x_snc_coffee_desig_coffee_beans'
                            element: 'roast_level'
                            value: 'light'
                        }
                    },
                ]
            }
        }
    }
}
