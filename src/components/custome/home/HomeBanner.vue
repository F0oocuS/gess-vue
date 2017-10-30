<template>
    <section class="banner">
        <img src="../../../assets/logoBig.png" alt="">
        <h2 class="banner__title">{{ bannerTitle }}</h2>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                bannerTitle: 'Clean and reliable energy for your business'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .banner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 400px;
        padding: 40px;
        background-image: url('../../../assets/banner.jpg');
        background-size: cover;
        background-position: 50% 50%;
        &__title {
            margin-top: auto;
            margin-bottom: 0;
            padding: 15px 40px;
            background: rgba(24,114,12,0.78);
            font-size: 14px;
            font-weight: 700;
            color: white;
            text-align: center;
            text-transform: uppercase;
        }
    }
</style>