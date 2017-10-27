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
                        <h1 class="news__title">{{ news.title }}</h1>
                        <p class="news__desc">{{ news.desc }}</p>
                        <div class="news__date">{{ news.date }}</div>
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
    }
</style>