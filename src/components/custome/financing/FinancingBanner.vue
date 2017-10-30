<template>
    <section class="banner">
        <h1 class="banner-title">{{ banner.title }}</h1>
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
        align-items: center;
        justify-content: center;
        min-height: 500px;
        background-image: url(../../../assets/banner-financing.jpg);
        background-position: center;
        background-size: cover;
        &-title {
            font-family: 'Roboto Slab', serif;
            font-size: 24px;
            font-weight: 700;
            line-height: 35px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: white;
        }
    }
</style>