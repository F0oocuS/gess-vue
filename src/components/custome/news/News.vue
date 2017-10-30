<template>
    <main>
        <router-view :articles="articles" :news="articles"></router-view>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                articles: [
                    {
                        id: 1,
                        title: 'Gess Ukraine constructing renewable energy facilities in Chornobyl',
                        desc: 'In the summer of 2016, the Ukrainian government introduced a Chornobyl Solar project to the Ukrainian and international community. The aim of the project is to turn the land affected by one of the world’s worst nuclear disasters into a massive solar park, which is scheduled for implementation in 2017.',
                        date: '2017-02-08'
                    },
                    {
                        id: 2,
                        title: 'Ulrgazbank and gess Ukraine cooperation',
                        desc: 'Following national interests in the field of reducing Ukraine\'s dependence on imported energy sources and with а view to improving the overall environmental situation in the country, on January 11, 2017, GESS Ukraine concluded a Memorandum on partnership and cooperation with UKRGAZBANK, which has been successfully operating in the market of financial services for over 21 years.',
                        date: '2017-01-11'
                    },
                    {
                        id: 3,
                        title: 'New gess operations & design center construction in the city of radomyshl',
                        desc: 'GESS launched construction of Operations & Design Center with a support of local authorities and international investors. The goal of the project is maintenance and monitoring of GESS projects in Ukraine.',
                        date: '2016-02-08'
                    },
                    {
                        id: 4,
                        title: 'Official distributorship of capstone in Ukraine',
                        desc: 'Capstone Microtubines is a modern equipment of small capacity gas turbines for supplying heat and powering generators, compressors, and the turbine. Microturbine engine consists of the only rotating part – the shaft, wich is connected to electrical generator and compressor and the turbine. The system does not rely on reductors or any other mechanical drives. The unique part of the system is the air bearing, which allows to reach the rotating speed of 96000 rpm. It supports the shaft in suspended and contactless state. This technology has raised interest among potential consumers in Ukraine.',
                        date: '2017-02-08'
                    },
                    {
                        id: 5,
                        title: 'Authorized reseller of canadian solar PV panels in Ukraine',
                        desc: 'Canadian Solar and seven subsidiaries have a production capacity of 2.05 GW. The total production space is 260 thousand sq. m. The company operates in 11 countries: Canada, Germany, Italy, Japan, Korea, Spain, Australia, USA, Singapore, Hong Kong and China. The company is listed on the public stock market, including the NASDAQ System (NASDAQ: CSIQ), and has been active exhibition activity. The fact of cooperation with the manufacturer of solar panels of such scale allows GESS simplify the process of international financing solar projects in Ukraine and significantly expand the markets due to the balance of price and quality of products.',
                        date: '2016-08-10'
                    },
                    {
                        id: 6,
                        title: '"UEA" Membership',
                        desc: 'GESS became an Associate member of the Ukrainian Energy Assembly to expand the partnership program, as well as the adaptation and implementation of international technology and energy development models in Ukraine.',
                        date: '2016-05-20'
                    },
                    {
                        id: 7,
                        title: 'Aqua therm 2016',
                        desc: 'During the exhibition, GESS UKRAINE presented a wide range of products and technologies. "Aqua-Therm Kiev" - an ideal business platform for the latest industry workouts of both Ukrainian and international manufacturers.',
                        date: '2016-05-16'
                    },
                    {
                        id: 8,
                        title: 'U.S. Solar & Gess Ukraine Partnership',
                        desc: 'In May 2016, GESS and «U.S. Solar» concluded a partnership agreement on the terms of further cooperation towards solar projects realization in Ukraine.',
                        date: '2016-05-01'
                    },
                    {
                        id: 9,
                        title: 'AEG & Gess Ukraine partnership',
                        desc: 'In June 2016 «GESS Ukraine» with German company AEG conclude an agreement on further partnership in the direction of the supply inverter equipment for solar power stations of its own production in Ukraine.',
                        date: '2016-05-01'
                    }
                ]
            }
        }
    }
</script>