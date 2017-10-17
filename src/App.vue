<template>
    <div class="container">
        <h1>Hello Vue. Create by: {{ author }}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                author: 'Ihor Yaremko'
            }
        }
    }
</script>

<style lang="scss">
    .container {
        padding-top: 50px;
    }
</style>
