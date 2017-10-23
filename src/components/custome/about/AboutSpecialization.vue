<template>
    <section class="specialization">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <img src="http://via.placeholder.com/425x293" alt="">
                </div>
                <div class="col-lg-8">
                    <div class="spec-info">
                        <p class="spec-info__text">GESS Ukraine is unit of international
                            company Green Energy Sustainable Solutions – GESS International
                        </p>
                        <p class="spec-info__text">
                            <span>Green Energy Sustainable Solutions - "GESS"</span> - energy service company
                            offers solutions in the field of “green” energy and energy efficiency
                            for the private sector, budgetary organizations, and business.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <app-block-title :blockTitle="specialization.title"></app-block-title>
                    <app-unordered-list :list="specialization.list"></app-unordered-list>
                </div>
                <div class="col-lg-8">
                    <img src="http://via.placeholder.com/830x293" alt="">
                </div>
            </div>
            <div class="info-block">
                <div class="info-block__text">
                    Our team has been in the energy industry since 1997<br>
                    with over <span>350 implemented projects</span> worldwide.
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BlockTitle from '../../general/BlockTitle.vue';
    import UnorderedList from '../../general/UnorderedList.vue';

    export default {
        props: ['specialization'],
        components: {
            appBlockTitle: BlockTitle,
            appUnorderedList: UnorderedList
        }
    }
</script>

<style lang="scss">
    .spec-info {
        padding: 40px 60px;
        @media(max-width: 991px) {
            padding: 20px;
        }
        &__text {
            font-size: 15px;
            line-height: 30px;
            span {
                color: #017101;
                font-weight: 700;
            }
        }
    }
    .info-block {
        width: 100%;
        background-image: url(http://via.placeholder.com/730x293);
        background-position: center;
        background-size: cover;
        &__text {
            width: 70%;
            padding: 60px;
            background-color: rgba(1,113,1,0.75);
            text-align: center;
            font-size: 14px;
            line-height: 30px;
            color: #fff;
            span {
                font-weight: 700;
            }
            @media(max-width: 991px) {
                width: 100%;
            }
        }
    }
</style>