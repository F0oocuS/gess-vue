<template>
    <div class="article-grid">
        <article class="article" v-for="item in articles">
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
                            <a href="" class="article__read">Continue reading</a>
                            <div class="article__date">{{ item.date }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
    import OneNews from './OneNews.vue';

    export default {
        data() {
            return {
                articles: [
                    {
                        title: 'Gess Ukraine constructing renewable energy facilities in Chornobyl',
                        desc: 'In the summer of 2016, the Ukrainian government introduced a Chornobyl Solar project to the Ukrainian and international community. The aim of the project is to turn the land affected by one of the world’s worst nuclear disasters into a massive solar park, which is scheduled for implementation in 2017.',
                        date: '2017-02-08'
                    },
                    {
                        title: 'Gess Ukraine constructing renewable energy facilities in Chornobyl',
                        desc: 'In the summer of 2016, the Ukrainian government introduced a Chornobyl Solar project to the Ukrainian and international community. The aim of the project is to turn the land affected by one of the world’s worst nuclear disasters into a massive solar park, which is scheduled for implementation in 2017.',
                        date: '2017-02-08'
                    },
                    {
                        title: 'Gess Ukraine constructing renewable energy facilities in Chornobyl',
                        desc: 'In the summer of 2016, the Ukrainian government introduced a Chornobyl Solar project to the Ukrainian and international community. The aim of the project is to turn the land affected by one of the world’s worst nuclear disasters into a massive solar park, which is scheduled for implementation in 2017.',
                        date: '2017-02-08'
                    },
                    {
                        title: 'Gess Ukraine constructing renewable energy facilities in Chornobyl',
                        desc: 'In the summer of 2016, the Ukrainian government introduced a Chornobyl Solar project to the Ukrainian and international community. The aim of the project is to turn the land affected by one of the world’s worst nuclear disasters into a massive solar park, which is scheduled for implementation in 2017.',
                        date: '2017-02-08'
                    }
                ]
            }
        },
        components: {
            appOneNews: OneNews
        }
    }
</script>

<style lang="scss">
    .article {
        padding: 35px 0;
        &:not(:last-child) {
            /*margin-bottom: 20px;*/
        }
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
        }
        &__read {
        }
        &__date {
        }
    }
</style>