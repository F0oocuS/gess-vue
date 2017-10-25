<template>
    <section class="structure">
        <app-block-title :blockTitle="structure.title"></app-block-title>

        <div class="container">
            <ul class="structure-list">
                <li class="structure-list__item"  v-for="(item, index) in structure.list">
                    <span>{{ index + 1 }}</span>
                    {{ item }}
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    import BlockTitle from '../../general/BlockTitle.vue';

    export default {
        props: ['structure'],
        components: {
            appBlockTitle: BlockTitle
        }
    }
</script>

<style lang="scss">
    .structure {
        &-list {
            margin: 0;
            padding: 40px 0;
            list-style: none;
            column-count: 2;
            @media(max-width: 991px) {
                column-count: 1;
            }
            &__item {
                padding-left: 50px;
                position: relative;
                font-size: 16px;
                font-weight: 100;
                line-height: 24px;
                &:not(:last-child) {
                    margin-bottom: 30px;
                }
                span {
                    position: absolute;
                    left: 10px;
                    top: 0;
                    width: 30px;
                    height: 30px;
                    background-color: #bcc900;
                    border-radius: 50%;
                    text-align: center;
                    font-weight: 700;
                    line-height: 32px;
                    color: #fff;
                }
            }
        }
    }
</style>