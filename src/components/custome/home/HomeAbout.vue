<template>
    <section class="about">
        <div class="container">
            <div class="row">
                <app-block-title :blockTitle="blockTitle"></app-block-title>
                <div class="col-md-6 col-lg-3">
                    <div class="about-info">
                        <p class="about-info__title">19 <span>years</span></p>
                        <p class="about-info__desc">Of experience in energy efficiency</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="about-info">
                        <p class="about-info__title">350+</p>
                        <p class="about-info__desc">Completed projects globally</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="about-info">
                        <p class="about-info__title">59 <span>MW</span></p>
                        <p class="about-info__desc">PV capacity to be installed in 2017</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="about-info">
                        <p class="about-info__title">21 <span>MW</span></p>
                        <p class="about-info__desc">Operation & Design Center in Radomyshl</p>
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
                blockTitle: 'About the company',
            }
        },
        components: {
            appBlockTitle: BlockTitle
        }
    }
</script>

<style lang="scss">
    .about-info {
        text-align: center;
        &__title {
            font-size: 60px;
            font-weight: 400;
            span {
                font-size: 36px;
                font-weight: 300;
            }
        }
        &__desc {
            font-size: 16px;
            font-weight: 300;
        }
    }
</style>