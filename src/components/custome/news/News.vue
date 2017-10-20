<template>
    <main>
        <div class="page-title">
            <app-block-title :blockTitle="pageName" colorLine="colorLine"></app-block-title>
        </div>
        <app-news-grid></app-news-grid>
    </main>
</template>

<script>
    import BlockTitle from '../../general/BlockTitle.vue';
    import NewsGrid from './NewsGrid.vue';

    export default {
        data() {
            return {
                pageName: 'News',
                colorLine: true
            }
        },
        components: {
            appBlockTitle: BlockTitle,
            appNewsGrid: NewsGrid
        }
    }
</script>

<style>
    .page-title {
        background-color: #f6f6f6;
        padding: 20px;
    }
</style>