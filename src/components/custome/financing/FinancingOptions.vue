<template>
    <section class="options">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <img src="http://via.placeholder.com/600x600" alt="">
                </div>
                <div class="col-md-8">
                    <div class="options-info">
                        <app-block-title :blockTitle="options.title" :colorLine="options.colorLine"></app-block-title>

                        <p class="options-info__text">{{ options.text }}</p>

                        <app-unordered-list :list="options.list"></app-unordered-list>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BlockTitle from '../../general/BlockTitle.vue';
    import UnorderedList from '../../general/UnorderedList.vue';

    export default {
        props: ['options'],
        components: {
            appBlockTitle: BlockTitle,
            appUnorderedList: UnorderedList
        }
    }
</script>

<style lang="scss">
    .options {
        background-color: #f6f6f6;
        &-info__text {
            font-size: 16px;
            font-weight: 100;
            line-height: 24px;
        }
    }
</style>