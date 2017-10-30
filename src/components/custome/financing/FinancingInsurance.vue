<template>
    <section class="insurance">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <div class="insurance__info">
                        <app-block-title :blockTitle="insurance.title" :colorLine="true"></app-block-title>
                        <p class="insurance__text">{{ insurance.text }}</p>
                        <div class="insurance__list">
                            <app-unordered-list :list="insurance.list"></app-unordered-list>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="row">
                        <img src="../../../assets/project-insurance-b.jpg" alt="">
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
        &__info {
            padding-left: 30px;
            padding-right: 30px;
        }
        &__text {
            font-size: 16px;
            font-weight: 300;
        }
    }
</style>