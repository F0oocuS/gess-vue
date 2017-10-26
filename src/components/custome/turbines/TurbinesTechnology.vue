<template>
    <section class="technology">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="tech-image">
                        <img src="http://via.placeholder.com/900x900" alt="">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="tech-info">
                        <app-block-title :blockTitle="technology.title" :colorLine="technology.colorLine"></app-block-title>
                        <p class="tech-info__text">{{ technology.text }}</p>
                        <ul class="tech-info__list">
                            <li class="tech-info__item" v-for="(item, index) in technology.list"><span>{{ index + 1 }}</span>{{ item }}</li>
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
        props: ['technology'],
        components: {
            appBlockTitle: BlockTitle
        }
    }
</script>

<style lang="scss">
    .technology {
        /*background-color: #f6f6f6;*/
    }
    .tech-info {
        &__text {
            font-size: 16px;
            line-height: 24px;
        }
        &__list {
            padding-left: 40px;
            list-style: none;
        }
        &__item {
            position: relative;
            font-size: 14px;
            &:not(:last-child) {
                margin-bottom: 15px;
            }
            span {
                position: absolute;
                left: -40px;
                top: calc(50% - 15px);
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