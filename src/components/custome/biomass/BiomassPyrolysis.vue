<template>
    <section class="pyrolysis">
        <app-block-title :blockTitle="pyrolysis.title" :colorLine="pyrolysis.colorLine"></app-block-title>

        <p class="pyrolysis__info">
            <span>Fast pyrolysis</span> is a process in which organic materials are
            rapidly heated to 400 - 800 °C in the absence of air. <br>
            Under these conditions, organic vapors, pyrolysis gas, and charcoal are produced.
        </p>
    </section>
</template>

<script>
    import BlockTitle from '../../general/BlockTitle.vue';

    export default {
        props: ['pyrolysis'],
        components: {
            appBlockTitle: BlockTitle
        }
    }
</script>

<style lang="scss">
    .pyrolysis {
        position: relative;
        padding: 20px 0 60px;
        background-color: rgba(1, 131, 1, .75);
        background-image: url(http://via.placeholder.com/900x600);
        background-position: center;
        background-size: cover;
        background-blend-mode: multiply;
        &__info {
            margin: 0;
            color: white;
            text-align: center;
            span {
                font-weight: 500;
                text-transform: uppercase;
            }
        }
    }
</style>