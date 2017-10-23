import Home from './components/custome/home/Home.vue';
import About from './components/custome/about/About.vue';
import Contacts from './components/custome/contacts/Contacts.vue';
import News from './components/custome/news/News.vue';
import OneNews from './components/custome/news/OneNews.vue';
import Turbines from './components/custome/turbines/Turbines.vue';
import Solar from './components/custome/solar/Solar.vue';
import Biomass from './components/custome/biomass/Biomass.vue';
import Financing from './components/custome/financing/Financing.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contacts', component: Contacts },
    { path: '/news', component: News },
    { path: '/news/:id', component: OneNews },
    { path: '/turbines', component: Turbines },
    { path: '/solar', component: Solar },
    { path: '/biomass', component: Biomass },
    { path: '/financing', component: Financing },
    { path: '*', redirect: '/' }
];