import { createApp } from 'vue';

import App from './App.vue';
import TheHeader from './components/Layout/TheHeader.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import BaseCard from './components/UI/BaseCard.vue';
import CorseGoal from './components/CorseGoal.vue';
import ActiveGoal from './components/ActiveGoals.vue';
import ManageGoal from './components/ManageGoals.vue';

const app = createApp(App);

app.component('the-header', TheHeader);
app.component('base-badge', BaseBadge);
app.component('badge-list', BadgeList);
app.component('user-info', UserInfo);
app.component('base-card', BaseCard);
app.component('corse-goal', CorseGoal);
app.component('active-goal', ActiveGoal);
app.component('manage-goal', ManageGoal);

app.mount('#app');
