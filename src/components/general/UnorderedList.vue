<template>
    <ul class="list">
        <li class="list__item" v-for="item in list">{{ item }}</li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                list: ['cat', 'dog', 'bird', 'pig']
            }
        }
    }
</script>

<style lang="scss">
    .list {
        list-style: none;
        padding-left: 40px;
    }
    .list__item {
        position: relative;
        &:before {
            content: '';
            position: absolute;
            left: -30px;
            top: calc(50% - 5px);
            width: 10px;
            height: 10px;
            border-right: 5px;
            background-color: #64ff4d;
        }
    }
</style>