<template>
    <div class="wrapper">
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/core/Header.vue';
    import Footer from './components/core/Footer.vue';

    export default {
        data() {
            return {
                author: 'Ihor Yaremko'
            }
        },
        components: {
            appHeader: Header,
            appFooter: Footer
        }
    }
</script>

<style lang="scss">
    * {
        font-family: 'Roboto', sans-serif;
    }
    img {
        max-width: 100%;
        object-fit: cover;
    }
    .text-center {
        text-align: center;
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding-top: 58px; // need think about this question
    }
</style>
