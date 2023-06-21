import { createApp } from 'vue';
import App from './App.vue';

import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import Servers from './components/Server/Servers.vue';
import ServerDetails from './components/Server/ServerDetails.vue';

const app = createApp(App);
app.component('AppHeader', Header);
app.component('AppFooter', Footer);
app.component('Servers', Servers);
app.component('ServerDetails', ServerDetails);
app.mount('#app')