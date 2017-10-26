<template>
    <section class="modes">
        <app-block-title :blockTitle="modes.title" :colorLine="true"></app-block-title>
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="item in modes.list">
                    <div class="modes-item">
                        <h5 class="modes-item__title">"{{ item.title }}"</h5>
                        <ul class="modes-item__list">
                            <li class="modes-item__list-item" v-for="itemList in item.list">{{ itemList }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BlockTitle from '../../general/BlockTitle.vue';

    export default {
        props: ['modes'],
        components: {
            appBlockTitle: BlockTitle
        }
    }
</script>

<style lang="scss">
    .modes {
        padding-bottom: 40px;
        background-color: #f6f6f6;
    }
    .modes-item {
        &:not(:last-child) {
            @media(max-width: 767px) {
                margin-bottom: 25px;
            }
        }
        &__title {
            margin-bottom: 30px;
            font-family: "Roboto", serif;
            font-size: 18px;
            font-weight: 500;
            text-align: center;
            text-transform: uppercase;
        }
        &__list {
            list-style: none;
        }
        &__list-item {
            &:not(:last-child) {
                margin-bottom: 25px;
            }
            position: relative;
            font-size: 15px;
            line-height: 24px;
            &:before {
                content: '';
                width: 10px;
                height: 10px;
                position: absolute;
                left: -25px;
                top: 5px;
                border-left: 1px solid #bcc900;
                border-bottom: 1px solid #bcc900;
                transform: rotate(-45deg);
            }
        }
    }
</style>