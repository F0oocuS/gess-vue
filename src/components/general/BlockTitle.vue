<template>
    <div class="block-title">
        <h3 class="title">{{ blockTitle }}</h3>
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

<style lang="scss">
    .block-title {
        margin-top: 50px;
        margin-bottom: 50px;
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
    }
    .separate {
        .green {
            margin: -3px auto 0;
            height: 4px;
            width: 60px;
            background-color: #18760e;
        }
        .lemon {
            margin: auto;
            height: 2px;
            width: 150px;
            background-color: #bcc900;
        }
        .white, .grey {
            margin: -2px auto;
            height: 1px;
            width: 300px;
        }
        .white {
            background-color: #fff;
        }
        .grey {
            background-color: #f6f6f6;
        }
    }
</style>
