<template>
    <main>
        <app-banner :banner="banner"></app-banner>
        <app-desired :desired="desired"></app-desired>
        <app-equipment :equipment="equipment"></app-equipment>
        <app-solar-panels :solarPanels="solarPanels"></app-solar-panels>

    </main>
</template>

<script>
    import Banner from './SolarBanner.vue';
    import Desired from './SolarDesired.vue';
    import Equipment from './SolarEquipment.vue';
    import SolarPanels from './SolarPanels.vue';

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
                }
            }
        },
        components: {
            appBanner: Banner,
            appDesired: Desired,
            appEquipment: Equipment,
            appSolarPanels: SolarPanels
        }
    }
</script>