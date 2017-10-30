import Home from './components/custome/home/Home.vue';
import About from './components/custome/about/About.vue';
import Contacts from './components/custome/contacts/Contacts.vue';
import News from './components/custome/news/News.vue';
import NewsGrid from './components/custome/news/NewsGrid.vue';
import OneNews from './components/custome/news/OneNews.vue';
import Turbines from './components/custome/turbines/Turbines.vue';
import Solar from './components/custome/solar/Solar.vue';
import Biomass from './components/custome/biomass/Biomass.vue';
import Financing from './components/custome/financing/Financing.vue';

export const routes = [
    { path: '/gess-vue', component: Home },
    { path: '/gess-vue/about', component: About },
    { path: '/gess-vue/contacts', component: Contacts },
    { path: '/gess-vue/news', component: News,  children: [
        { path: '', component: NewsGrid },
        { path: ':id', component: OneNews }
    ] },
    { path: '/gess-vue/turbines', component: Turbines },
    { path: '/gess-vue/solar', component: Solar },
    { path: '/gess-vue/biomass', component: Biomass },
    { path: '/gess-vue/financing', component: Financing },
    { path: '*', redirect: '/gess-vue' }
];
