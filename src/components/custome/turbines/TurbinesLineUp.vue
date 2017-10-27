<template>
    <section class="line-up">
        <appBlockTitle :blockTitle="lineUp.title"></appBlockTitle>

        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-4" v-for="(item, index) in lineUp.list">
                    <div class="turbines" :id="index">
                        <img src="http://via.placeholder.com/250x220" alt="">
                        <p class="turbines__model">{{ item.model }}</p>
                        <div class="turbines__desc">
                            <h3 class="turbines__model">{{ item.model }}</h3>
                            <div class="separate"></div>
                            <ul class="turbines__char-list">
                                <li class="turbines__char-item"><span>Capacity:</span> {{ item.capacity }}</li>
                                <li class="turbines__char-item"><span>Electrical efficiency:</span> {{ item.electrical_efficiency }}</li>
                                <li class="turbines__char-item"><span>Total efficiency including heat utilization:</span> {{ item.total_efficiency }}</li>
                                <li class="turbines__char-item"><span>Voltage:</span> {{ item.voltage }}</li>
                            </ul>
                            <button class="more-info" data-toggle="modal" data-target="#turbines-modal" @click="addId(index)">More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <app-turbines :object="lineUp.list" :turbinesId="this.turbinesId"></app-turbines>
    </section>
</template>

<script>
    import BlockTitle from '../../general/BlockTitle.vue';
    import TurbinesModal from '../../general/ModalTurbines.vue';

    export default {
        props: ['lineUp'],
        data() {
            return {
                turbinesId: 1
            }
        },
        components: {
            appBlockTitle: BlockTitle,
            appTurbines: TurbinesModal
        },
        methods: {
            addId(index) {
                this.turbinesId = index;
            }
        }
    }
</script>

<style lang="scss">
    .turbines {
        display: flex;
        flex-direction: column;
        height: 310px;
        margin-bottom: 30px;
        padding: 20px;
        position: relative;
        background-color: #f3f3f3;
        border: 1px solid green;
        text-align: center;
        &:hover {
            .turbines__desc {
                opacity: 1;
                .turbines__model {
                    opacity: 1;
                }
            }
            .turbines__model {
                opacity: 0;
            }
        }
        &__desc {
            display: flex;
            flex-direction: column;
            padding: 25px;
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-color: rgba(1, 131, 1, .75);
            text-align: left;
            color: white;
            opacity: 0;
            transition: .4s;
            .turbines__model {
                margin-top: 0;
                margin-bottom: 15px;
                font-weight: 700;
            }
            .separate {
                width: 100px;
                height: 2px;
                margin-bottom: 20px;
                background-color: #bcc900;
            }
            .more-info {
                width: 140px;
                margin-top: auto;
                padding: 5px 10px;
                position: relative;
                background: transparent;
                border: 2px solid #bcc900;
                font-size: 16px;
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
        &__model {
            margin-top: auto;
            margin-bottom: 0;
            font-family: 'Roboto Slab', serif;
            font-size: 24px;
            text-align: left;
            text-transform: uppercase;
            transition: .2s;
        }
        &__char-list {
            padding-left: 0;
            list-style: none;
        }
        &__char-item {
            font-size: 14px;
            span {
                font-weight: 500;
            }
        }
    }
</style>