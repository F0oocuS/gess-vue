<template>
    <section class="priorities">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="prior-info">
                        <app-block-title :blockTitle="priorities.title"></app-block-title>
                        <app-unordered-list :list="priorities.list"></app-unordered-list>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="row">
                        <img src="../../../assets/priorities-b.jpg" alt="">
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
        props: ['priorities'],
        components: {
            appBlockTitle: BlockTitle,
            appUnorderedList: UnorderedList
        }
    }
</script>

<style lang="scss">
    .prior-info {
        padding: 20px;
    }
</style>