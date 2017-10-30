<template>
    <article class="news">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div class="news__img">
                        <img src="http://via.placeholder.com/520x350" alt="">
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="news__body">
                        <h1 class="news__title">{{ news[$route.params.id - 1].title }}</h1>
                        <div class="news__separate"></div>
                        <p class="news__desc">{{ news[$route.params.id - 1].desc }}</p>
                        <div class="news__date">{{ news[$route.params.id - 1].date }}</div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        props: ['news']
    }
</script>

<style lang="scss" scoped>
    .news {
        padding: 50px 0;
        &__body {
            display: flex;
            flex-direction: column;
        }
        &__title {
            margin-bottom: 20px;
            font-size: 30px;
        }
        &__separate {
            margin-bottom: 20px;
            width: 100%;
            height: 1px;
            background-color: #f6f6f6;
        }
        &__date {
            text-align: right;
        }
    }
</style>