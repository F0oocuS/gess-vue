<template>
    <section class="inverters">
        <div class="inverters__header">
            <app-block-title-simple :blockTitleSimple="inverters.title"></app-block-title-simple>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-lg-3" v-for="(item, index) in inverters.list">
                    <div class="inverters__item">
                        <h4 class="inverters__name">{{ item.name }}</h4>
                        <div class="inverters__desc">
                            <h4 class="desc-title">{{ item.name }}</h4>
                            <div class="separate"></div>
                            <ul class="inverters__char-list">
                                <li class="inverters__char-item"><span>Capacity: </span>{{ item.capacity }}</li>
                                <li class="inverters__char-item"><span>Size: </span>{{ item.sizes }}</li>
                                <li class="inverters__char-item"><span>Weight: </span>{{ item.weight }}</li>
                            </ul>
                            <button class="more-info" data-toggle="modal" data-target="#inverters-modal" @click="addId(index)">More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <app-inverters-modal :object="inverters.list" :invertersId="this.invertersId"></app-inverters-modal>
    </section>
</template>

<script>
    import BlockTitleSimple from '../../general/BlockTitleSimple.vue';
    import InvertersModal from '../../general/ModalInverters.vue';

    export default {
        props: ['inverters'],
        data() {
            return {
                invertersId: 0
            }
        },
        methods: {
            addId(index) {
                this.invertersId = index;
            }
        },
        components: {
            appBlockTitleSimple: BlockTitleSimple,
            appInvertersModal: InvertersModal
        }
    }
</script>

<style lang="scss" scoped>
    .inverters {
        background-color: #f6f6f6;
        padding-bottom: 10px;
        &__item {
            display: flex;
            flex-direction: column;
            margin-bottom: 30px;
            padding: 30px;
            min-height: 300px;
            position: relative;
            background-color: #fff;
            background-image: url(http://via.placeholder.com/470x370);
            background-position: center top;
            background-size: contain;
            background-repeat: no-repeat;
            &:hover {
                .inverters__desc {
                    opacity: 1;
                }
                .inverters__name {
                    display: none;
                }
            }
        }
        &__name {
            margin-top: auto;
            font-family: "Roboto Slab", sans-serif;
            font-size: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        &__desc {
            display: flex;
            flex-direction: column;
            padding: 20px;
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
            .separate {
                margin-bottom: 10px;
                width: 50px;
                height: 2px;
                background-color: #bcc900;
            }
            .inverters__char-list {
                padding: 0;
                list-style: none;
            }
            .inverters__char-item {
                font-size: 14px;
                line-height: 20px;
                span {
                    font-weight: 600;
                }
            }
            .more-info {
                max-width: 150px;
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