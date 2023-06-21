<template>
    <button @click="logIn" v-if="!isAuth">Login</button>
    <button @click="logOut" v-else>Logout</button>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        methods: {
            // login() {
            //     this.$store.dispatch('logIn');
            // }, 
            // logout() {
            //     this.$store.dispatch('logOut');
            // },
            ...mapActions(['logIn', 'logOut']),
        },
        computed: {
            // isAuth() {
            //     return this.$store.getters.userIsAuthenticated
            // },
            ...mapGetters({
                isAuth: 'userIsAuthenticated'
            })
        }
    }
</script>