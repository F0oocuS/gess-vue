<template>
    <div>
        <h1>{{ pageName }}</h1>
        <app-about></app-about>
        <app-partners></app-partners>
    </div>
</template>

<script>
    import About from './HomeAbout.vue';
    import Partners from './HomePartners.vue';

    export default {
        data() {
            return {
                pageName: 'HomePage'
            }
        },
        components: {
            appAbout: About,
            appPartners: Partners
        }
    }
</script>