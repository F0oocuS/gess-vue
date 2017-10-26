<template>
    <div class="block-title">
        <h1 class="title">{{ blockTitle }}</h1>
        <div class="separate">
            <div class="white" v-if="colorLine"></div>
            <div class="grey" v-else></div>
            <div class="lemon"></div>
            <div class="green"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['blockTitle', 'colorLine']
    }
</script>

<style lang="scss" scoped>
    .block-title {
        padding-top: 50px;
        padding-bottom: 50px;
        width: 100%;
    }
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
        .green {
            margin: -3px auto 0;
            height: 4px;
            max-width: 60px;
            background-color: #18760e;
        }
        .lemon {
            margin: auto;
            height: 2px;
            max-width: 150px;
            background-color: #bcc900;
        }
        .white, .grey {
            margin: -2px auto;
            height: 1px;
            max-width: 300px;
        }
        .white {
            background-color: #fff;
        }
        .grey {
            background-color: #f6f6f6;
        }
    }
</style>
