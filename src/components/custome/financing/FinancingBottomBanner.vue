<template>
    <section class="bottom-banner">
        <img src="../../../assets/logoBig.png" alt="">
        <p class="bottom-banner__title">
            Investments to energy projects today opens
            for enterprises an opportunity not only to
            <span>Improve competitiveness</span>, but also to fully
            <span>Implement the existing resources</span> of Ukraine
        </p>
    </section>
</template>

<style lang="scss" scoped>
    .bottom-banner {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 430px;
        padding-top: 60px;
        padding-bottom: 20px;
        background-image: url(../../../assets/capital-b.jpg);
        background-position: center;
        background-size: cover;
        &__title {
            margin-top: auto;
            max-width: 570px;
            font-size: 16px;
            font-weight: 100;
            line-height: 24px;
            text-align: center;
            span {
                font-weight: 500;
                text-transform: uppercase;
                color: #017101;
            }
        }
    }
</style>