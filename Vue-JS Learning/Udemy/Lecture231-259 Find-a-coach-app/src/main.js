import { createApp } from 'vue';
import App from './App.vue'
import router from './router.js';
import store from './stores/index.js';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import TheHeader from './components/layout/TheHeader.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';

const app = createApp(App);
app.use(router);
app.use(store);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('the-header', TheHeader);
app.component('base-spinner', BaseSpinner);
app.mount('#app');
