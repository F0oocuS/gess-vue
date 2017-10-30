<template>
    <section class="banner">
        <h1 class="banner__title">{{ banner.title }}</h1>
        <p class="banner__text">{{ banner.text }}</p>
    </section>
</template>

<script>
    export default {
        props: ['banner']
    }
</script>

<style lang="scss" scoped>
    .banner {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 450px;
        padding: 40px 0 30px;
        background-image: url(../../../assets/banner-microturbines.jpg);
        background-position: center;
        background-size: cover;
        &__title {
            font-size: 24px;
            line-height: 35px;
            letter-spacing: 1px;
            text-align: center;
            text-transform: uppercase;
        }
        &__text {
            margin-top: auto;
            padding: 10px 40px;
            background: rgba(24,114,12,0.78);
            font-size: 14px;
            font-weight: 700;
            color: white;
            text-align: center;
            text-transform: uppercase;
        }
    }
</style>