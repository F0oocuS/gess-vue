<template>
    <main>
        <app-line-up :lineUp="lineUp"></app-line-up>
    </main>
</template>

<script>
    import LineUp from './TurbinesLineUp.vue'

    export default {
        data() {
            return {
                banner: {},
                technology: {},
                modes: {},
                lineUp: {
                    title: 'The line-up',
                    list: [
                        {
                            id: 1,
                            model: 'C30',
                            capacity: '30 kW',
                            electrical_efficiency: '26%',
                            total_efficiency: 'up to 90%',
                            voltage: '400-480 V',
                            frequency: '50/60 Hz – Dual mode, 10-60 Hz – Autonomous Mode',
                            connection: '3-phase',
                            width: '0.76 m',
                            length: '1.50 m',
                            height: '1.80 m',
                            weight: '405 kg - Parallel Mode, 578 kg – Dual Mode',
                            net_heat_rate: '13.8 MJ/kWh',
                            exhausted_gas_temperature: '275 C',
                            exhausted_gas_flow: '0.31 kg/s',
                            noise_level: '<60 bB',
                            pollution_level: '<9 ppmNOx'
                        },
                        {
                            id: 2,
                            model: 'C65',
                            capacity: '65 kW',
                            electrical_efficiency: '29%',
                            total_efficiency: 'up to 90%',
                            voltage: '400-480 V',
                            frequency: '50/60 Hz – Dual mode, 10-60 Hz – Autonomous Mode',
                            connection: '3-phase',
                            width: '0.76 m',
                            length: '1.95 m',
                            height: '1.91 m',
                            weight: '758 kg - Parallel Mode, 1121 kg – Dual Mode',
                            net_heat_rate: '12.4 MJ/kWh',
                            exhausted_gas_temperature: '275 C',
                            exhausted_gas_flow: '0.49 kg/s',
                            noise_level: '<60 bB',
                            pollution_level: '<9 ppmNOx'
                        },
                        {
                            id: 3,
                            model: 'C200',
                            capacity: '200 kW',
                            electrical_efficiency: '33%',
                            total_efficiency: 'up to 90%',
                            voltage: '400-480 V',
                            frequency: '50/60 Hz – Dual mode, 10-60 Hz – Autonomous Mode',
                            connection: '3-phase',
                            width: '1.7 m',
                            length: '3.80 m',
                            height: '2.50 m',
                            weight: '2776 kg - Parallel Mode, 3413 kg – Dual Mode',
                            net_heat_rate: '10.9 MJ/kWh',
                            exhausted_gas_temperature: '280 C',
                            exhausted_gas_flow: '1.3 kg/s',
                            noise_level: '<60 bB',
                            pollution_level: '<9 ppmNOx'
                        },
                        {
                            id: 4,
                            model: 'C600',
                            capacity: '600 kW',
                            electrical_efficiency: '33%',
                            total_efficiency: 'up to 90%',
                            voltage: '400-480 V',
                            frequency: '50/60 Hz – Dual mode, 10-60 Hz – Autonomous Mode',
                            connection: '3-phase',
                            width: '3.00 m',
                            length: '9.10 m',
                            height: '2.90 m',
                            weight: '14200 kg - Parallel Mode, 16300 kg – Dual Mode',
                            net_heat_rate: '10.9 MJ/kWh',
                            exhausted_gas_temperature: '280 C',
                            exhausted_gas_flow: '4.0 kg/s',
                            noise_level: '<60 bB',
                            pollution_level: '<9 ppmNOx'
                        },
                        {
                            id: 5,
                            model: 'C800',
                            capacity: '800 kW',
                            electrical_efficiency: '33%',
                            total_efficiency: 'up to 90%',
                            voltage: '400-480 V',
                            frequency: '50/60 Hz – Dual mode, 10-60 Hz – Autonomous Mode',
                            connection: '3-phase',
                            width: '3.00 m',
                            length: '9.10 m',
                            height: '2.90 m',
                            weight: '15600 kg - Parallel Mode, 18400 kg – Dual Mode',
                            net_heat_rate: '13.8 MJ/kWh',
                            exhausted_gas_temperature: '280 C',
                            exhausted_gas_flow: '5.30 kg/s',
                            noise_level: '<60 bB',
                            pollution_level: '<9 ppmNOx'
                        },
                        {
                            id: 6,
                            model: 'C1000',
                            capacity: '1000 kW',
                            electrical_efficiency: '33%',
                            total_efficiency: 'up to 90%',
                            voltage: '400-480 V',
                            frequency: '50/60 Hz – Dual mode, 10-60 Hz – Autonomous Mode',
                            connection: '3-phase',
                            width: '3.00 m',
                            length: '9.10 m',
                            height: '2.90 m',
                            weight: '17000 kg - Parallel Mode, 20500 kg – Dual Mode',
                            net_heat_rate: '10.9 MJ/kWh',
                            exhausted_gas_temperature: '280 C',
                            exhausted_gas_flow: '6.7 kg/s',
                            noise_level: '<60 bB',
                            pollution_level: '<9 ppmNOx'
                        }
                    ]
                }
            }
        },
        components: {
            appLineUp: LineUp
        }
    }
</script>