<template>
    <section class="news">
        <div class="page-title">
            <app-block-title :blockTitle="pageName" :colorLine="true"></app-block-title>
        </div>
        <div class="article-grid">
            <article class="article" v-for="(item, index) in articles">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="article__img">
                                <img src="http://via.placeholder.com/520x350" alt="">
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="article__body">
                                <h3 class="article__title">{{ item.title }}</h3>
                                <div class="separate"></div>
                                <p class="article__desc">{{ item.desc }}</p>
                                <footer class="article__footer">
                                    <router-link :to="'/news/' + item.id" class="article__read" @click="addId(index)">Continue reading</router-link>
                                    <div class="article__date">{{ item.date }}</div>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
    import BlockTitle from '../../general/BlockTitle.vue';

    export default {
        props: ['articles'],
        data() {
            return {
                newsId: 0,
                pageName: 'News',
            }
        },
        components: {
            appBlockTitle: BlockTitle
        },
        methods: {
            addId(index) {
                this.newsId = index;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .page-title {
        background-color: #f6f6f6;
        padding: 20px;
    }
    .article {
        padding: 35px 0;
        &:nth-child(2n) {
            background-color: #f6f6f6;
        }
        &__img {
            img {
                max-width: 100%;
            }
        }
        &__body {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 20px;
            height: 100%;
        }
        &__title {
            margin-bottom: 20px;
            font-size: 18px;
            font-weight: 500;
            text-transform: uppercase;
        }
        .separate {
            margin-bottom: 20px;
            width: 100px;
            height: 2px;
            background: #bcc900;
        }
        &__desc {
            margin-bottom: 20px;
            font-size: 16px;
            max-height: 70px;
            overflow: hidden;
        }
        &__footer {
            display: flex;
            justify-content: space-between;
            margin-top: auto;
        }
        &__read {
            color: #017101;
            font-size: 16px;
            text-decoration: underline;
            &:hover {
                color: #017101;
            }
        }
        &__date {
            font-size: 16px;
        }
    }
</style>