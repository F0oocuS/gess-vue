import Home from './components/custome/home/Home.vue';
import About from './components/custome/about/About.vue';
import Contacts from './components/custome/contacts/Contacts.vue';
import News from './components/custome/news/News.vue';

export const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/contacts', component: Contacts },
    { path: '/news', component: News }
];