<template>
    <section class="line-up">
        <appBlockTitle :blockTitle="lineUp.title"></appBlockTitle>

        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-4" v-for="item in lineUp.list">
                    <div class="turbines">
                        <img src="http://via.placeholder.com/220x150" alt="">
                        <div class="turbines__desc">
                            <p class="turbines__char">{{ item.id }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BlockTitle from '../../general/BlockTitle.vue'

    export default {
        props: ['lineUp'],
        components: {
            appBlockTitle: BlockTitle
        }
    }
</script>

<style lang="scss">
    .turbines {
        margin-bottom: 30px;
        border: 1px solid green;
    }
</style>