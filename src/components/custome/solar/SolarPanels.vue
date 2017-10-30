<template>
    <section class="panels">
        <div class="panels__header">
            <app-block-title-simple :blockTitleSimple="solarPanels.title"></app-block-title-simple>
            <p class="panels__text">{{ solarPanels.text }}</p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-4 col-xl-2" v-for="(item, index) in solarPanels.list">
                    <div class="panels__item">
                        <div class="panels__name">
                            <h4 class="panels__title">{{ item.name }}</h4>
                            <div class="separate"></div>
                            <p class="panels__dop-info">{{ item.dopInfo }}</p>
                        </div>
                        <div class="panels__desc">
                            <h4 class="desc-title">{{ item.name }}</h4>
                            <div class="separate"></div>
                            <ul class="panels__char-list">
                                <li class="panels__char-item"><span>Capacity: </span>{{ item.capacity }}</li>
                                <li class="panels__char-item"><span>Size: </span>{{ item.sizes }}</li>
                                <li class="panels__char-item"><span>Weight: </span>{{ item.weight }}</li>
                            </ul>
                            <button class="more-info" data-toggle="modal" data-target="#solar-modal" @click="addId(index)">More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <app-solar-modal :object="solarPanels.list" :solarId="this.solarId"></app-solar-modal>
    </section>
</template>

<script>
    import BlockTitleSimple from '../../general/BlockTitleSimple.vue';
    import UnorderedList from '../../general/UnorderedList.vue';
    import SolarModal from '../../general/ModalSolar.vue';

    export default {
        props: ['solarPanels'],
        data() {
            return {
                solarId: 0
            }
        },
        methods: {
            addId(index) {
                this.solarId = index;
            }
        },
        components: {
            appBlockTitleSimple: BlockTitleSimple,
            appUnorderedList: UnorderedList,
            appSolarModal: SolarModal
        }
    }
</script>

<style lang="scss" scoped>
    .panels {
        padding-bottom: 10px;
        &__header {
            text-align: center;
        }
        &__text {
            font-size: 14px;
            font-weight: 300;
        }
        &__item {
            display: flex;
            flex-direction: column;
            margin-bottom: 30px;
            padding: 10px;
            min-height: 270px;
            position: relative;
            background-color: #f6f6f6;
            background-image: url(http://via.placeholder.com/300x350);
            background-position: center top;
            background-size: contain;
            background-repeat: no-repeat;
            &:hover {
                .panels__desc {
                    opacity: 1;
                }
                .panels__name {
                    display: none;
                }
            }
        }
        &__name {
            margin-top: auto;
        }
        &__title {
            margin-bottom: 10px;
            font-family: "Roboto Slab", sans-serif;
            font-size: 16px;
            font-weight: 500;
            letter-spacing: 1px;
        }
        .separate {
            margin-bottom: 10px;
            width: 50px;
            height: 2px;
            background-color: #bcc900;
        }
        &__dop-info {
            margin-bottom: 0;
        }
        &__desc {
            display: flex;
            flex-direction: column;
            padding: 10px;
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-color: rgba(1, 131, 1, .75);
            opacity: 0;
            color: #fff;
            transition: .2s;
            .desc-title {
                font-family: "Roboto Slab", sans-serif;
                font-size: 16px;
                font-weight: 700;
                line-height: 22px;
                color: white;
            }
            .panels__char-list {
                padding: 0;
                list-style: none;
            }
            .panels__char-item {
                font-size: 14px;
                line-height: 20px;
                span {
                    font-weight: 600;
                }
            }
            .more-info {
                margin-top: auto;
                padding: 5px 10px;
                position: relative;
                background: transparent;
                border: 2px solid #bcc900;
                font-size: 16px;
                font-weight: 100;
                color: white;
                text-align: left;
                transition: .4s;
                &:hover, &:active, &:focus {
                    color: #000;
                    text-decoration: none;
                }
                &:hover {
                    background-color: #bcc900;
                    &:after {
                        border-color: rgba(1, 113, 1, .75);
                    }
                }
                &:after {
                    content: '';
                    display: block;
                    width: 14px;
                    height: 14px;
                    position: absolute;
                    top: calc(50% - 7px);
                    right: 15px;
                    border-right: 1px solid #bcc900;
                    border-top: 1px solid #bcc900;
                    transform: rotate(45deg);
                }
            }
        }
    }
</style>