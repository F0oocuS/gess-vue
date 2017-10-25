<template>
    <ul class="list">
        <li class="list__item" v-for="item in list">{{ item }}</li>
    </ul>
</template>

<script>
    export default {
        props: ['list']
    }
</script>

<style lang="scss" scoped>
    .list {
        list-style: none;
        padding-left: 20px;
    }
    .list__item {
        position: relative;
        font-size: 14px;
        font-weight: 100;
        line-height: 30px;
        &:before {
            content: '';
            position: absolute;
            left: -20px;
            top: calc(50% - 4px);
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #bcc900;
        }
    }
</style>