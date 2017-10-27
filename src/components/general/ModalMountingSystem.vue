<template>
    <div class="modal fade" id="mounting-system-modal" tabindex="-1" role="dialog" aria-labelledby="turbines-modelLabel" aria-hidden="true">
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
                            <div class="col-md-4">
                                <img src="http://via.placeholder.com/750x720" alt="">
                            </div>
                            <div class="col-md-8">
                                <app-block-title :blockTitle="title" :colorLine="true"></app-block-title>

                                <div class="features">
                                    <h5 class="model-name">{{ object[mountingSystemId].name }}</h5>
                                    <p class="features__title">Main system features</p>
                                    <div class="features__separate"></div>
                                    <ul class="features__list">
                                        <li class="features__item">System type: <span>{{ object[mountingSystemId].system_type }}</span></li>
                                        <li class="features__item">Tilt: <span>{{ object[mountingSystemId].tilt }}</span></li>
                                        <li class="features__item">Prop type: <span>{{ object[mountingSystemId].prop_type }}</span></li>
                                        <li class="features__item">PV modules: <span>{{ object[mountingSystemId].pv_modules }}</span></li>
                                        <li class="features__item">PV modules orientation: <span>{{ object[mountingSystemId].pv_modules_orientation }}</span></li>
                                        <li class="features__item">Number of rows: <span>{{ object[mountingSystemId].number_of_rows }}</span></li>
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
        props: ['object', 'mountingSystemId', 'title'],
        components: {
            appBlockTitle: BlockTitle
        }
    }
</script>

<style lang="scss" scoped>
    @media(min-width: 768px) {
        .block-title {
            padding-top: 0;
        }
    }
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
    .features {
        &__title {
            margin-bottom: 5px;
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
            font-weight: 100;
            text-transform: uppercase;
        }
        &__separate {
            margin-bottom: 10px;
            width: 50px;
            height: 2px;
            background-color: #bcc900;
        }
        &__list {
            padding-left: 0;
            list-style: none;
        }
        &__item {
            &:not(:last-child) {
                margin-bottom: 10px;
            }
            display: flex;
            position: relative;
            font-size: 16px;
            font-weight: 700;
            span {
                margin-left: auto;
                font-weight: 300;
                text-align: right;
            }
        }
    }
</style>