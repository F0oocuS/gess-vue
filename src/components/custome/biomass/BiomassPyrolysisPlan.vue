<template>
    <section class="pyrolysis-plan">
        <app-block-title :blockTitle="pyrolysisPlan.title" :colorLine="true"></app-block-title>
        <div class="container">
            <div class="pyrolysis-plan__img">
                <img src="../../../assets/scheme-image-en.png" alt="Plan image">
            </div>
            <ul class="pyrolysis-plan__list">
                <li class="pyrolysis-plan__item" v-for="(item, index) in pyrolysisPlan.list"><span>{{ index + 1 }}</span>{{ item }}</li>
            </ul>
        </div>
    </section>
</template>

<script>
    import BlockTitle from '../../general/BlockTitle.vue';

    export default {
        props: ['pyrolysisPlan'],
        components: {
            appBlockTitle: BlockTitle
        }
    }
</script>

<style lang="scss">
    .pyrolysis-plan {
        background-color: #f6f6f6;
        &__img {
            text-align: center;
        }
        &__list {
            margin: 0;
            padding: 40px 0;
            list-style: none;
            column-count: 2;
            @media(max-width: 991px) {
                column-count: 1;
            }
        }
        &__item {
            padding-left: 50px;
            position: relative;
            font-size: 16px;
            font-weight: 100;
            line-height: 24px;
            &:not(:last-child) {
                margin-bottom: 20px;
            }
            span {
                position: absolute;
                left: 10px;
                top: 0;
                width: 30px;
                height: 30px;
                background-color: #bcc900;
                border-radius: 50%;
                text-align: center;
                line-height: 32px;
                color: #fff;
            }
        }
    }
</style>