<template>
    <section class="insurance">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <div class="insurance-info">
                        <app-block-title :blockTitle="insurance.title" :colorLine="insurance.colorLine"></app-block-title>

                        <p class="insurance-info__text">{{ insurance.text }}</p>

                        <app-unordered-list :list="insurance.list"></app-unordered-list>
                    </div>
                </div>
                <div class="col-md-5">
                    <img src="http://via.placeholder.com/600x600" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BlockTitle from '../../general/BlockTitle.vue';
    import UnorderedList from '../../general/UnorderedList.vue';

    export default {
        props: ['insurance'],
        components: {
            appBlockTitle: BlockTitle,
            appUnorderedList: UnorderedList
        }
    }
</script>

<style lang="scss">
    .insurance {
        background-color: #f6f6f6;
        &-info {
            padding-left: 30px;
            padding-right: 30px;
            &__text {
                font-size: 16px;
                font-weight: 300;
            }
        }
    }
</style>