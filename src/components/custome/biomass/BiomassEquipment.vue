<template>
    <section class="equipment">
        <app-block-title :blockTitle="equipment.title" :colorLine="true"></app-block-title>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <p class="equipment__text">Main components for biogas facility stable functioning:</p>
                    <div class="equipment__list">
                        <app-unordered-list :list="equipment.list"></app-unordered-list>
                    </div>
                </div>
                <div class="col-md-4">
                    <img src="../../../assets/reliable-technology-b.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BlockTitle from '../../general/BlockTitle.vue';
    import UnorderedList from '../../general/UnorderedList.vue';

    export default {
        props: ['equipment'],
        components: {
            appBlockTitle: BlockTitle,
            appUnorderedList: UnorderedList
        }
    }
</script>

<style lang="scss">
    .equipment {
        background-color: #f6f6f6;
        &__text {
            font-size: 16px;
            font-weight: 100;
        }
    }
</style>