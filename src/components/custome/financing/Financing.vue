<template>
    <main>
        <app-banner :banner="banner"></app-banner>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p class="financing-info">
                        <span>Gess Ukraine</span> within the framework of energy project helps businesses identify the most appropriate solutions to improve energy efficiency, investment development program,
                        and helping to prepare required documents meeting the international standards for long-term and low-cost targeted funding
                    </p>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <img src="../../../assets/gess-ukraine-b.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <app-options :options="options"></app-options>
        <app-structure :structure="structure"></app-structure>
        <app-insurance :insurance="insurance"></app-insurance>
        <app-bottom-banner></app-bottom-banner>
    </main>
</template>

<script>
    import Banner from './FinancingBanner.vue';
    import Options from './FinancingOptions.vue';
    import Structure from './FinancingStructure.vue';
    import Insurance from './FinancingInsurance.vue';
    import BottomBanner from './FinancingBottomBanner.vue'

    export default {
        data() {
            return {
                banner: {
                    title: 'Project financing'
                },
                options: {
                    title: 'Financing options',
                    text: 'We offer various options for financial instruments that can be used for investing in energy projects:',
                    list: [
                        'The use of current (own) assets of client’s enterprise',
                        'GESS participation solely as a service company for the development of the project',
                        'Search for new owners for customer projects',
                        'GESS equity financing (the target entry in the share capital)',
                        'Raising capital from international financial organizations and private investors'
                    ]
                },
                structure: {
                    title: 'Financing structure',
                    list: [
                        'Signing the Consulting Services Agreement (according to the requirements of international investors)',
                        'Insurance background personel approval',
                        'Collecting data on the enterprise (legal and economical due diligence)',
                        'Project Technical analysis (equipment selection)',
                        'Financial model preparation',
                        'Preparation of the investment set of documents',
                        'Getting letter of intent from insurance brokers on the project insurance',
                        'Approval of the financing conditions',
                        'Signing Investment Agreements',
                        'Getting financing and implementation of the project'
                    ]
                },
                insurance: {
                    title: 'Project insurance',
                    text: 'GESS has an access to complex insurance for projects that includes the following options:',
                    list: [
                        'Current property insurance on the project site',
                        'Delivery of the equipment and accessories from the manufacturer to the construction site',
                        'Technical project parameters insurance',
                        'Political risk insurance (terrorism, revolution, looting, acts of war)'
                    ]
                }
            }
        },
        components: {
            appBanner: Banner,
            appOptions: Options,
            appStructure: Structure,
            appInsurance: Insurance,
            appBottomBanner: BottomBanner
        }
    }
</script>

<style lang="scss" scoped>
    .financing-info {
        padding: 50px 40px;
        font-size: 14px;
        font-weight: 100;
        line-height: 24px;
        span {
            font-weight: 500;
            text-transform: uppercase;
            color: #017101;
        }
    }
</style>