<template>
    <main>
        <app-banner :banner="banner"></app-banner>
        <app-desired :desired="desired"></app-desired>
        <app-equipment :equipment="equipment"></app-equipment>
        <app-solar-panels :solarPanels="solarPanels"></app-solar-panels>
        <app-inverters :inverters="inverters"></app-inverters>
        <app-mounting-system :mountingSystem="mountingSystem"></app-mounting-system>
    </main>
</template>

<script>
    import Banner from './SolarBanner.vue';
    import Desired from './SolarDesired.vue';
    import Equipment from './SolarEquipment.vue';
    import SolarPanels from './SolarPanels.vue';
    import Inverters from './SolarInverters.vue';
    import MountingSystem from './SolarMountingSystem.vue';

    export default {
        data() {
            return {
                banner: {
                    title: 'Solar energy projects',
                    list: [
                        {
                            value: 30,
                            region: 'Kherson region',
                            date: '2016-2017'
                        },
                        {
                            value: 25,
                            region: 'Zhytomyr region',
                            date: '2016-2017'
                        },
                        {
                            value: 15,
                            region: 'Kirovogran region',
                            date: '2016-2017'
                        },
                        {
                            value: 84,
                            region: 'Odesa region',
                            date: '2016-2017'
                        },
                        {
                            value: 107,
                            region: 'Western Ukraine',
                            date: '2017-2018'
                        }
                    ]
                },
                desired: {
                    title: 'Desired site conditions',
                    list: [
                        'Right bank part of Ukraine;',
                        'Site area – 10 ha or more;',
                        'Long-term land lease or private property;',
                        'Industrial or energy land designation;',
                        'Distance to the nearest substation – up to 5 km;',
                        'Existence of the Grid Connection Agreement with actual Technical Conditions;',
                        'Large energy consumers at the region.'
                    ]
                },
                equipment: {
                    title: 'Equipment and components',
                    text: 'In projects we use the most reliable equipment of leaders in the solar industry. This is recognized by insurance companies as well as financial institutions at the global level, this translates into trust of our clients and partners.'
                },
                solarPanels: {
                    title: 'Solar panels',
                    text: 'GESS Ukraine is an official dealer of “Canadian Solar» solar panels in Ukraine',
                    list: [
                        {
                            id: 1,
                            name: 'Dymond',
                            capacity: '315/325 W',
                            sizes: '996*1972*8,5 mm',
                            weight: '27,5 kg',
                            dopInfo: 'Double-glass',
                            features: [
                                '100% PID-free',
                                'Robust module construction for 1500 V'
                            ]
                        },
                        {
                            id: 2,
                            name: 'Maxpower',
                            capacity: '310/315/320 W',
                            sizes: '982*1954*40 mm',
                            weight: '22 kg',
                            dopInfo: '72 cells',
                            features: [
                                'High performance and energy yield',
                                'High module quality',
                                'Robust module construction',
                                'Suitable for harsh environments'
                            ]
                        },
                        {
                            id: 3,
                            name: 'Superpower',
                            capacity: '265/270 W',
                            sizes: '992*1650*40 mm',
                            weight: '18.2 kg',
                            dopInfo: 'Mono-PERC',
                            features: [
                                'Suitable for harsh environments',
                                'IP67 junction box for weather endurance',
                                'Outstanding low light performance',
                                'Lower temperature coefficients'
                            ]
                        },
                        {
                            id: 4,
                            name: 'All-black',
                            capacity: '265/270 W',
                            sizes: '992*1650*40 mm',
                            weight: '18.2 kg',
                            dopInfo: 'Aesthetics',
                            features: [
                                'High system energy yield',
                                'Outstanding low-light performance',
                                'High module quality',
                                '359 quality control points'
                            ]
                        },
                        {
                            id: 5,
                            name: 'Quintech',
                            capacity: '270/290 W',
                            sizes: '992*1650*40 mm',
                            weight: '18,2 kg',
                            dopInfo: '5BB 60 cells',
                            features: [
                                'High system energy yield',
                                'High module quality',
                                'Suitable for harsh environments'
                            ]
                        },
                        {
                            id: 6,
                            name: 'Standard',
                            capacity: '260/270 W',
                            sizes: '982*1638*40 mm',
                            weight: '18 kg',
                            dopInfo: '60 cells',
                            features: [
                                'Adaptable for different installation types',
                                'High performance and energy yield',
                                'Suitable for harsh environments',
                                '359 quality control points'
                            ]
                        }
                    ]
                },
                inverters: {
                    title: 'Inverters',
                    list: [
                        {
                            id: 1,
                            name: 'Protect PV.250',
                            capacity: '250 kVA',
                            sizes: '2100 x 2000 x 600 mm',
                            weight: '1130 kg',
                            features: [
                                'Utility scale transformer-less design',
                                'Up to 98,15 % conversion efficiency according to EN 50530 Norm w/o Transformer',
                                'DC voltages up to 1,000 Vdc',
                                'Designed for harsh environments',
                                'Communication interfaces (Modbus / Can Bus)',
                                'Monitoring, control, reporting and management tools',
                                'Optional “copain mode” - two unit operation',
                                'Medium voltage 10, 20 kV or other, as required'
                            ]
                        },
                        {
                            id: 2,
                            name: 'Protect PV.560',
                            capacity: '560 kVA',
                            sizes: '2700 x 2000 x 600 mm',
                            weight: '1650 kg',
                            features: [
                                'Utility scale transformer-less design',
                                'Up to 98,15 % conversion efficiency according to EN 50530 Norm w/o Transformer',
                                'DC voltages up to 1,000 Vdc',
                                'Designed for harsh environments',
                                'Communication interfaces (Modbus / Can Bus)',
                                'Monitoring, control, reporting and management tools',
                                'Optional “copain mode” - two unit operation',
                                'Container and outdoor application',
                                'Medium voltage 10, 20 kV or other, as required'
                            ]
                        },
                        {
                            id: 3,
                            name: 'Protect PV.690',
                            capacity: '690 kVA',
                            sizes: '2700 x 2000 x 600 mm',
                            weight: '1800 kg',
                            features: [
                                'Utility scale transformer-less design',
                                'Up to 98,15 % conversion efficiency according to EN 50530 Norm w/o Transformer',
                                'DC voltages up to 1,000 Vdc',
                                'Designed for harsh environments',
                                'Communication interfaces (Modbus / Can Bus)',
                                'Monitoring, control, reporting and management tools',
                                'Optional “copain mode” - two unit operation',
                                'Container and outdoor application',
                                'Medium voltage 10, 20 kV or other, as required'
                            ]
                        },
                        {
                            id: 4,
                            name: 'Protect PV.880',
                            capacity: '880 kVA',
                            sizes: '2700 x 2000 x 600 mm',
                            weight: '1850 kg',
                            features: [
                                'Utility scale transformer-less design',
                                'Up to 98,15 % conversion efficiency according to EN 50530 Norm w/o Transformer',
                                'DC voltages up to 1,000 Vdc',
                                'Designed for harsh environments',
                                'Communication interfaces (Modbus / Can Bus)',
                                'Monitoring, control, reporting and management tools',
                                'Optional “copain mode” - two unit operation',
                                'Medium voltage 10, 20 kV or other, as required'
                            ]
                        }
                    ]
                },
                mountingSystem: {
                    title: 'Mounting systems',
                    list: [
                        {
                            id: 1,
                            name: 'Static single PROP',
                            system_type: 'static',
                            tilt: '20°-70°',
                            prop_type: 'single row',
                            pv_models: 'framed and frameless',
                            pv_models_orientation: 'vertical / horisontal',
                            numbers_of_rows: '1/2/3'
                        },
                        {
                            id: 2,
                            name: 'Static dual PROP',
                            system_type: 'static',
                            tilt: '20°-70°',
                            prop_type: 'dual rows',
                            pv_modules: 'framed and frameless',
                            pv_modules_orientation: 'vertical / horisontal',
                            number_of_rows: '2/3/4/5'
                        },
                        {
                            id: 3,
                            name: 'Dynamic automatic single axes',
                            system_type: 'dynamic',
                            tilt: '25°-50°',
                            prop_type: 'dual rows',
                            pv_models: 'framed and frameless',
                            pv_models_orientation: 'vertical',
                            numbers_of_rows: '2'
                        },
                        {
                            id: 4,
                            name: 'AS-Sunflower DYNAMIC',
                            system_type: 'dynamic, automatic, selfpositioning',
                            tilt: '90°-180°',
                            prop_type: 'single prop',
                            pv_models: 'framed',
                            pv_models_orientation: 'horisontal',
                            numbers_of_rows: '1'
                        }
                    ]
                }
            }
        },
        components: {
            appBanner: Banner,
            appDesired: Desired,
            appEquipment: Equipment,
            appSolarPanels: SolarPanels,
            appInverters: Inverters,
            appMountingSystem: MountingSystem
        }
    }
</script>