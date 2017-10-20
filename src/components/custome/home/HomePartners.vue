<template>
    <section class="partners">
        <div class="container">
            <div class="row">
                <app-block-title :blockTitle="blockTitle"></app-block-title>
                <div class="col-sm-6 col-md-4 col-lg-3" v-for="item in partnersList">
                    <div class="partners-item">
                        <p class="partners-item__name">{{ item.name }}</p>
                        <p class="partners-item__desc">{{ item.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BlockTitle from '../../general/BlockTitle.vue';

    export default {
        data() {
            return {
                blockTitle: 'Partners',
                partnersList: [
                    {name: 'Partners 1', desc: 'Partners 1 description'},
                    {name: 'Partners 2', desc: 'Partners 2 description'},
                    {name: 'Partners 3', desc: 'Partners 3 description'},
                    {name: 'Partners 4', desc: 'Partners 4 description'},
                    {name: 'Partners 5', desc: 'Partners 5 description'},
                    {name: 'Partners 6', desc: 'Partners 6 description'},
                    {name: 'Partners 7', desc: 'Partners 7 description'}
                ]
            }
        },
        components: {
            appBlockTitle: BlockTitle
        }
    }
</script>

<style lang="scss">
    .partners-item {
        margin-bottom: 30px;
        padding: 20px;
        text-align: center;
        border: 2px solid #017101;
        border-radius: 5px;
        &__name {
            font-size: 36px;
        }
        &__desc {
            text-align: left;
        }
    }
</style>