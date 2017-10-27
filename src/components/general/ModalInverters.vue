<template>
    <div class="modal fade" id="inverters-modal" tabindex="-1" role="dialog" aria-labelledby="turbines-modelLabel" aria-hidden="true">
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
                                <app-block-title :blockTitle="object[invertersId].name" :colorLine="true"></app-block-title>

                                <div class="features">
                                    <p class="features__title">Product features</p>
                                    <div class="features__separate"></div>
                                    <ul class="features__list">
                                        <li class="features__item" v-for="(item, index) in object[invertersId].features">{{ item }}</li>
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
        props: ['object', 'invertersId'],
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
            position: relative;
            font-size: 16px;
            font-weight: 100;
        }
    }
</style>
