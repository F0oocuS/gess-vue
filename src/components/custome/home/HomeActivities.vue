<template>
    <section class="activities">
        <div class="container">
            <div class="row">
                <app-block-title :blockTitle="blockTitle" :colorLine="colorLine"></app-block-title>
                <div class="activities-item" v-for="(item, index) in activities">
                    <div class="activities-item__info" v-bind:class="{'activities-item__info_right': item.side}">
                        <h4 class="activities-item__title">{{ item.name }}</h4>
                        <div class="activities-item__separate"></div>
                        <app-unordered-list :list="item.list"></app-unordered-list>
                        <a href="" class="activities-item__more">More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BlockTitle from '../../general/BlockTitle.vue';
    import UnorderedList from '../../general/UnorderedList.vue';

    export default {
        data() {
            return {
                blockTitle: 'Activities',
                colorLine: 'colorLine',
                activities: [
                    {
                        name: 'Capstone Microturbines',
                        list: ['Reliable co-generation equipment'],
                        side: true
                    },
                    {
                        name: 'Solar Power Plants',
                        list: ['Complex solutions', 'Equipment and components'],
                        side: true
                    },
                    {
                        name: 'Biomass Projects',
                        list: ['Fast Pyrolysis Technology', 'Biogas equipment'],
                        side: false
                    },
                    {
                        name: 'Financing options',
                        list: ['Consulting services', 'Individual investment programs'],
                        side: false
                    },
                ]
            }
        },
        components: {
            appBlockTitle: BlockTitle,
            appUnorderedList: UnorderedList
        }
    }
</script>

<style lang="scss">
    .activities {
        background-color: #f6f6f6;
        &-item {
            height: 400px;
            width: 50%;
            background-image: url('http://via.placeholder.com/220x150');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            &__info {
                display: flex;
                flex-direction: column;
                position: relative;
                height: 100%;
                width: 50%;
                padding: 60px 20px;
                background-color: rgba(1, 113, 1, 0.75);
                &:before {
                    content: '';
                    display: block;
                    position: absolute;
                    right: -24px;
                    top: calc(50% - 12px);
                    border: 12px solid transparent;
                    border-left-color: rgba(1, 113, 1, .75);
                }
                &_right {
                    margin-left: auto;
                    &:before {
                        left: -24px;
                        right: auto;
                        border-right-color: rgba(1, 113, 1, .75);
                        border-left-color: transparent;
                    }
                }
            }
            &__title {
                color: #fff;
                font-size: 18px;
                font-weight: 400;
                text-transform: uppercase;
            }
            &__separate {
                margin-bottom: 25px;
                width: 100px;
                height: 2px;
                background-color: #bcc900;
            }
            &__more {
                display: inline-block;
                margin-top: auto;
                padding: 5px 10px;
                width: 150px;
                position: relative;
                border: 2px solid #bcc900;
                text-transform: uppercase;
                color: #fff;
                font-weight: 300;
                font-size: 16px;
                transition: .4s;
                &:hover, &:active, &:focus {
                    color: #fff;
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
                    transition: .4s;
                }
            }
            @media(max-width: 991px) {
                padding: 20px;
                &__info {
                    width: 100%;
                    &:before {
                        display: none;
                    }
                }
            }
            @media(max-width: 575px) {
                width: 100%;
            }
        }
    }
</style>