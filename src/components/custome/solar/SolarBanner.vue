<template>
    <section class="banner">
        <h1 class="title">{{ banner.title }}</h1>

        <ul class="banner-list">
            <li class="banner-list__item" v-for="item in banner.list">
                <p class="item-value"><span>{{ item.value }}</span> mw</p>
                <p class="item-region">{{ item.region }}</p>
                <p class="item-date"> {{ item.date }}</p>
            </li>
        </ul>
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
        height: 450px;
        padding-top: 30px;
        background-image: url(http://via.placeholder.com/900x600);
        background-position: center;
        background-size: cover;
        text-align: center;
    }
    .title {
        font-family: 'Roboto Slab', serif;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 2px;
        color: white;
        text-transform: uppercase;
    }
    .banner-list {
        display: flex;
        justify-content: center;
        margin-top: auto;
        margin-bottom: 0;
        padding: 0;
        background-color: rgba(1, 131, 1, .75);
        list-style: none;
        color: #fff;
        @media(max-width: 767px) {
            display: none;
        }
    }
    .banner-list__item {
        padding: 15px 50px;
        max-width: 250px;
        text-align: center;
        @media(max-width: 1200px) {
            padding: 15px 30px;
        }
        @media(max-width: 991px) {
            padding: 15px 20px;
        }
        .item-value {
            font-family: 'Roboto Slab', serif;
            font-size: 24px;
            font-weight: 300;
            text-transform: uppercase;
            span {
                font-size: 36px;
                font-weight: 500;
            }
        }
        .item-region, .item-date {
            margin: 0;
            font-size: 14px;
            font-weight: 300;
            line-height: 18px;
        }
    }
</style>