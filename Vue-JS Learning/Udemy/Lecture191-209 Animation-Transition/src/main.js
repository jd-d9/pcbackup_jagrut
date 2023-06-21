import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './components/Pages/AllUsers.vue'
import CourseGoals from './components/Pages/CourseGoals.vue'

const router = createRouter({
    history: createWebHistory(),
    route: [
        {path: './', component: AllUsers},
        {path: './goals', component: CourseGoals},
    ],
})
const app = createApp(App);

app.use(router);
app.component('base-modal', BaseModal);

app.mount('#app');
