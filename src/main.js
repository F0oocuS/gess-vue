import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    linkExactActiveClass: '',
    routes,
    scrollBehavior: () => ({ y: 0 })
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
