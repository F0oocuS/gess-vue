<template>
    <main>
        <app-banner></app-banner>
        <app-about></app-about>
        <app-activities></app-activities>
        <app-partners></app-partners>
    </main>
</template>

<script>
    import About from './HomeAbout.vue';
    import Partners from './HomePartners.vue';
    import Activities from './HomeActivities.vue';
    import Banner from './HomeBanner.vue';

    export default {
        components: {
            appAbout: About,
            appPartners: Partners,
            appActivities: Activities,
            appBanner: Banner
        }
    }
</script>