<template>
    <div class="modal fade" id="turbines-modal" tabindex="-1" role="dialog" aria-labelledby="turbines-modelLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="row">
                                    <div class="col-12">
                                        <img src="http://via.placeholder.com/750x720" alt="">
                                    </div>
                                    <hr>
                                    <div class="col-4"><img src="http://via.placeholder.com/550x520" alt=""></div>
                                    <div class="col-4"><img src="http://via.placeholder.com/550x520" alt=""></div>
                                    <div class="col-4"><img src="http://via.placeholder.com/550x520" alt=""></div>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="modal-info">
                                    <app-block-title :blockTitle="title" :colorLine="colorLine"></app-block-title>

                                    <ul class="modal-info__list">
                                        <li class="modal-info__item"><span>Model: </span>{{ object[turbinesId].model }}</li>
                                        <li class="modal-info__item"><span>Capacity: </span>{{ object[turbinesId].capacity }}</li>
                                        <li class="modal-info__item"><span>Electrical efficiency: </span>{{ object[turbinesId].electrical_efficiency }}</li>
                                        <li class="modal-info__item"><span>Total efficiency including heat utilization: </span>{{ object[turbinesId].total_efficiency }}</li>
                                        <li class="modal-info__item"><span>Voltage: </span>{{ object[turbinesId].voltage }}</li>
                                        <li class="modal-info__item"><span>Frequenc: </span>{{ object[turbinesId].frequency }}</li>
                                        <li class="modal-info__item"><span>Connection: </span>{{ object[turbinesId].connection }}</li>
                                        <li class="modal-info__item"><span>Width: </span>{{ object[turbinesId].width }}</li>
                                        <li class="modal-info__item"><span>Length: </span>{{ object[turbinesId].length }}</li>
                                        <li class="modal-info__item"><span>Height: </span>{{ object[turbinesId].height }}</li>
                                        <li class="modal-info__item"><span>Weight: </span>{{ object[turbinesId].weight }}</li>
                                        <li class="modal-info__item"><span>Net heat rate: </span>{{ object[turbinesId].net_heat_rate }}</li>
                                        <li class="modal-info__item"><span>Exhausted gas temperature: </span>{{ object[turbinesId].exhausted_gas_temperature }}</li>
                                        <li class="modal-info__item"><span>Exhausted gas flow: </span>{{ object[turbinesId].exhausted_gas_flow }}</li>
                                        <li class="modal-info__item"><span>Noise level: </span>{{ object[turbinesId].noise_level }}</li>
                                        <li class="modal-info__item"><span>Pollution leve: </span>{{ object[turbinesId].pollution_level }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BlockTitle from './BlockTitle.vue';

    export default {
        props: ['object', 'turbinesId'],
        data() {
            return {
                title: 'Characteristics',
                colorLine: 'colorLine'
            }
        },
        components: {
            appBlockTitle: BlockTitle
        }
    }
</script>

<style lang="scss" scoped>
    .modal {
        padding: 0;
    }
    button.close {
        margin-left: auto;
    }
    .modal-dialog {
        max-width: calc(100% - 60px);
        @media(max-width: 575px) {
            max-width: calc(100% - 20px);
        }
    }
    .modal-content {
        background-color: #f6f6f6;
    }
    .modal-info {
        &__list {
            padding: 0;
            list-style: none;
        }
        &__item {
            border-bottom: 1px solid #f1f2f2;
            font-size: 14px;
            &:not(:last-child) {
                margin-bottom: 10px;
            }
            span {
                font-weight: 700;
            }
        }
        .block-title {
            padding-top: 0;
        }
    }
</style>