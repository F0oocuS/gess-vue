<template>
    <app-block-title :blockTitle="blockTitle"></app-block-title>
</template>

<script>
    import BlockTitle from '../../general/BlockTitle.vue';

    export default {
        data() {
            return {
                blockTitle: 'Partners'
            }
        },
        components: {
            appBlockTitle: BlockTitle
        }
    }
</script>