import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'

import NewComponent from './components/NewComponent.vue'
import NewFriendAdd from './components/NewFriend.vue'

const app = createApp(App)
app.component('new-component', NewComponent)
app.component('new-friend-add', NewFriendAdd)
app.mount('#app')

