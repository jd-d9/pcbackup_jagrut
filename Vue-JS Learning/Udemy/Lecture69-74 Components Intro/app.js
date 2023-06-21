const app = Vue.createApp({
    data() {
        return {

        }
    }
});

app.component('neglat-hello', {
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="setFriends">{{toggleVar ? 'Hide' : 'Show'}} Details</button>
            <ul v-if="toggleVar">
                <li><strong>Phone:</strong> {{friend.phone}} </li>
                <li><strong>Email:</strong> {{friend.email}} </li>
            </ul>
        </li>
    `,
    data() {
        return {
            toggleVar: false,
            friend: {
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com'
            }
        }
    },
    methods: {
        setFriends() {
            this.toggleVar = !this.toggleVar
        }
    }
})

app.mount('#app');