import { createApp } from 'vue';

import App from './App.vue';
import GlobalMixin from './mixins/GlobalMixin.js'

const app = createApp(App);
app.mixin(GlobalMixin);

app.mount('#app');
