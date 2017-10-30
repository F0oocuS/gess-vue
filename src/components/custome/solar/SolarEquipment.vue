<template>
    <section class="equipment">
        <app-block-title :blockTitle="equipment.title" :colorLine="true"></app-block-title>
        <div class="container">
            <p class="equipment__text">
                {{ equipment.text }}
            </p>
        </div>
    </section>
</template>

<script>
    import BlockTitle from '../../general/BlockTitle.vue';

    export default {
        props: ['equipment'],
        components: {
            appBlockTitle: BlockTitle
        }
    }
</script>

<style lang="scss">
    .equipment {
        padding-top: 20px;
        padding-bottom: 70px;
        background-color: #f6f6f6;
        &__text {
            font-size: 16px;
            line-height: 24px;
            text-align: center;
        }
    }
</style>