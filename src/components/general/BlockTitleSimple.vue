<template>
    <div class="block-title-simple">
        <h1 class="title">{{ blockTitleSimple }}</h1>
        <div class="separate"></div>
    </div>
</template>

<script>
    export default {
        props: ['blockTitleSimple']
    }
</script>

<style lang="scss" scoped>
    .block-title-simple {
        padding-top: 50px;
        padding-bottom: 50px;
        width: 100%;
        .title {
            margin-bottom: 20px;
            font-family: 'Roboto Slab', Serif;
            text-align: center;
            text-transform: uppercase;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: 2px;
            @media(max-width: 575px) {
                font-size: 20px;
            }
        }
        .separate {
            margin: auto;
            width: 100px;
            height: 2px;
            background: #017101;
        }
    }
</style>