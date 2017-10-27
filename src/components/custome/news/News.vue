<template>
    <main>
        <router-view :articles="articles" :news="articles[1]"></router-view>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                articles: [
                    {
                        id: 1,
                        title: 'Gess Ukraine constructing renewable energy facilities in Chornobyl',
                        desc: 'In the summer of 2016, the Ukrainian government introduced a Chornobyl Solar project to the Ukrainian and international community. The aim of the project is to turn the land affected by one of the world’s worst nuclear disasters into a massive solar park, which is scheduled for implementation in 2017.',
                        date: '2014-02-08'
                    },
                    {
                        id: 2,
                        title: 'Gess Ukraine constructing renewable energy facilities in Chornobyl',
                        desc: 'In the summer of 2016, the Ukrainian government introduced a Chornobyl Solar project to the Ukrainian and international community. The aim of the project is to turn the land affected by one of the world’s worst nuclear disasters into a massive solar park, which is scheduled for implementation in 2017.',
                        date: '2015-02-08'
                    },
                    {
                        id: 3,
                        title: 'Gess Ukraine constructing renewable energy facilities in Chornobyl',
                        desc: 'In the summer of 2016, the Ukrainian government introduced a Chornobyl Solar project to the Ukrainian and international community. The aim of the project is to turn the land affected by one of the world’s worst nuclear disasters into a massive solar park, which is scheduled for implementation in 2017.',
                        date: '2016-02-08'
                    },
                    {
                        id: 4,
                        title: 'Gess Ukraine constructing renewable energy facilities in Chornobyl',
                        desc: 'In the summer of 2016, the Ukrainian government introduced a Chornobyl Solar project to the Ukrainian and international community. The aim of the project is to turn the land affected by one of the world’s worst nuclear disasters into a massive solar park, which is scheduled for implementation in 2017.',
                        date: '2017-02-08'
                    }
                ]
            }
        }
    }
</script>