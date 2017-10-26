<template>
    <section class="desired">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img src="http://via.placeholder.com/660x600" alt="">
                </div>
                <div class="col-md-6">
                    <div class="desired-info">
                        <app-block-title :blockTitle="desired.title"></app-block-title>
                        <app-unordered-list :list="desired.list"></app-unordered-list>
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
        props: ['desired'],
        components: {
            appBlockTitle: BlockTitle,
            appUnorderedList: UnorderedList
        }
    }
</script>