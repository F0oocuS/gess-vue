<template>
    <div class="block-title">
        <h3 class="title">Test block title {{ blockTitle }}</h3>
        <div class="separate">
            <div class="green"></div>
            <div class="lemon"></div>
            <div class="white"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['blockTitle'],
        data() {
            return {
                blockTitle: blockTitle
            }
        }
    }
</script>

<style lang="scss">
    .title {
        margin-bottom: 15px;
        font-family: 'Roboto Slab', Serif;
        text-align: center;
        text-transform: uppercase;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 2px;
    }
    .separate {
        .green {
            margin: auto;
            height: 4px;
            width: 120px;
        }
        .lemon {
            margin: auto;
            height: 2px;
            width: 200px;
        }
        .white, .grey {
            margin: auto;
            height: 1px;
            width: 300px;
        }
    }
</style>
