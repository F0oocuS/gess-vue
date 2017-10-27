<template>
    <section class="mounting-system">
        <div class="mounting-system__header">
            <app-block-title-simple :blockTitleSimple="mountingSystem.title"></app-block-title-simple>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-lg-3" v-for="(item, index) in mountingSystem.list">
                    <div class="mounting-system__item">
                        <h4 class="mounting-system__name">{{ item.name }}</h4>
                        <div class="mounting-system__desc">
                            <h4 class="desc-title">{{ item.name }}</h4>
                            <div class="separate"></div>
                            <ul class="mounting-system__char-list">
                                <li class="mounting-system__char-item"><span>System type: </span>{{ item.system_type }}</li>
                                <li class="mounting-system__char-item"><span>Tilt: </span>{{ item.tilt }}</li>
                                <li class="mounting-system__char-item"><span>Prop type: </span>{{ item.prop_type }}</li>
                                <li class="mounting-system__char-item"><span>PV modules: </span>{{ item.pv_models }}</li>
                            </ul>
                            <button class="more-info" data-toggle="modal" data-target="#mounting-system-modal" @click="addId(index)">More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <app-mounting-system-modal :object="mountingSystem.list" :title="mountingSystem.title" :mountingSystemId="this.mountingSystemId"></app-mounting-system-modal>
    </section>
</template>

<script>
    import BlockTitleSimple from '../../general/BlockTitleSimple.vue';
    import MountingSystemModal from '../../general/ModalMountingSystem.vue';

    export default {
        props: ['mountingSystem'],
        data() {
            return {
                mountingSystemId: 0
            }
        },
        methods: {
            addId(index) {
                this.mountingSystemId = index;
            }
        },
        components: {
            appBlockTitleSimple: BlockTitleSimple,
            appMountingSystemModal: MountingSystemModal
        }
    }
</script>

<style lang="scss" scoped>
    .mounting-system {
        padding-bottom: 10px;
        &__item {
            display: flex;
            flex-direction: column;
            margin-bottom: 30px;
            padding: 20px;
            min-height: 300px;
            position: relative;
            background-color: #f6f6f6;
            background-image: url(http://via.placeholder.com/470x370);
            background-position: center top;
            background-size: contain;
            background-repeat: no-repeat;
            &:hover {
                .mounting-system__desc {
                    opacity: 1;
                }
                .mounting-system__name {
                    display: none;
                }
            }
        }
        &__name {
            margin-top: auto;
            font-family: "Roboto Slab", sans-serif;
            font-size: 16px;
            letter-spacing: 1px;
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
            .mounting-system__char-list {
                padding: 0;
                list-style: none;
            }
            .mounting-system__char-item {
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