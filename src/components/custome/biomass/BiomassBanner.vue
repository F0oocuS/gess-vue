<template>
    <section class="banner">
        <h1 class="banner__title">{{ banner.title }}</h1>
        <p class="banner__desc"><span>Realization the potential of Ukraine</span> on the basis of bio-energy projects - the main priority of <br>
            GESS activities within this area.
        </p>
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
        padding: 60px 0 20px;
        min-height: 500px;
        background-image: url(http://via.placeholder.com/900x600);
        background-position: center;
        background-size: cover;
        text-align: center;
        &__title {
            font-family: 'Roboto Slab', serif;
            font-size: 24px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        &__desc {
            margin-top: auto;
            font-size: 15px;
            font-weight: 300;
            line-height: 18px;
            span {
                font-weight: 500;
                text-transform: uppercase;
                color: #017101;
            }
        }
    }
</style>