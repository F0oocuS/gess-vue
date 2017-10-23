<template>
    <section class="equipment">
        <app-block-title :blockTitle="equipment.title" :colorLine="equipment.colorLine"></app-block-title>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="equipment-list">
                        <p>Main components for biogas facility stable functioning:</p>

                        <app-unordered-list :list="equipment.list"></app-unordered-list>
                    </div>
                </div>
                <div class="col-md-4">
                    <img src="http://via.placeholder.com/900x600" alt="">
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
    }
</style>