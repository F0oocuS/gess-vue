<template>
    <main>
        <app-banner :banner="banner"></app-banner>
        <app-equipment :equipment="equipment"></app-equipment>
        <app-pyrolysis :pyrolysis="pyrolysis"></app-pyrolysis>
        <app-pyrolysis-plan :pyrolysisPlan="pyrolysisPlan"></app-pyrolysis-plan>
    </main>
</template>

<script>
    import Banner from './BiomassBanner.vue';
    import Equipment from './BiomassEquipment.vue';
    import Pyrolysis from './BiomassPyrolysis.vue';
    import PyrolysisPlan from './BiomassPyrolysisPlan.vue';

    export default {
        data() {
            return {
                banner: {
                    title: 'Biomass project'
                },
                equipment: {
                    title: 'Reliable equipment - long life time',
                    list: [
                        'Metering technology to deliver the required amount of substrate',
                        'Efficient digest mixing system and stable production of gas at low energy consumption',
                        'Gas preparation for optimal energy conversion in CHPs',
                        'Equipment for hygienization according to the EU sanitary requirements',
                        'Stainless steel V2A (1.4301 / AISI 304) in systems containing a liquid substrate',
                        'Stainless steel V4A (1.4571 / AISI 316Ti) in systems containing gas',
                    ]
                },
                pyrolysis: {
                    title: 'Fast pyrolysis technology'
                },
                pyrolysisPlan: {
                    title: 'Operation of fast pyrolysis plan',
                    list: [
                        'Sawdust with 30% relative humidity are fed into a dryer operating at a fluidized bed mode (FBD)',
                        'Sawdust with moisture content 2% through the dispenser served in the fast pyrolysis reactor',
                        'Fast pyrolysis reactor, where the high-speed pyrolysis process (Entropy burst) of 1-6 seconds, resulting in formation of pyrolysis gas and carbonaceous material',
                        'Solid carbonaceous material is collected, cooled and stored',
                        'After high pyrolysis process, the pyrolysis gas is then fed to the cooling and purification',
                        'There is a process of thermal energy selection from a partial of the pyrolysis gas with an air exchanger. Next, hot air energy is used in a fluidized bed dryer.',
                        'Pyrolysis gas is finally cooled while being divided into the synthesis gas and condensed synthetic oil.',
                        'The use of a purified synthesis gas for the needs of the power system.',
                        'Propane is required only for the initial warming up fast pyrolysis reactor. Fitting output duration in operation mode - 4.5 hours. After heating by the gas is not used because replaced by a synthesis gas of its own production.',
                        'For thermal management, as well as for cooling and condensing of sawdust pyrolysis products used heat transfer fluids - water and air.',
                    ]
                }
            }
        },
        components: {
            appBanner: Banner,
            appEquipment: Equipment,
            appPyrolysis: Pyrolysis,
            appPyrolysisPlan: PyrolysisPlan,
        }
    }
</script>