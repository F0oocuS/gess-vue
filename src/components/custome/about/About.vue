<template>
    <main>
        <app-specialization :specialization="specialization"></app-specialization>
        <app-priorities :priorities="priorities"></app-priorities>
    </main>
</template>

<script>
    import Specialization from './AboutSpecialization.vue';
    import Priorities from './AboutPriorities.vue';

    export default {
        data() {
            return {
                specialization: {
                    title: 'Out specialization',
                    list: ['Energy efficiency', 'Co-generation', 'Renewable energy sources']
                },
                priorities: {
                    title: 'Our priorities',
                    list: [
                        'Implementation of energy efficient technologies',
                        'Ecology and safety',
                        'Optimization of customer expenses',
                        'Operative project implementation',
                        'Partnership'
                    ]
                }
            }
        },
        components: {
            appSpecialization: Specialization,
            appPriorities: Priorities
        }
    }
</script>