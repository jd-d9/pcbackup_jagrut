<template>
    <!-- <ul> -->
        <transition-group tag="ul" name="list">  <!-- We can give any valid html tag here, It is behave like this tag. -->
            <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
        </transition-group>
    <!-- </ul> -->
    <input type="text" placeholder="Enter user" ref="enteredUser">
    <button @click="addUser">Add User</button>
</template>

<script>
    export default {
        data() {
            return {
                users: ['Max', 'Ellie', 'Paul', 'Andre', 'Lettie', 'Win']
            }
        },
        methods: {
            addUser() {
                const inputFieldVal = this.$refs.enteredUser.value;
                this.users.unshift(inputFieldVal);
                this.$refs.enteredUser.value = '';
            },
            removeUser(user) {
                this.users = this.users.filter(usr => usr !== user)
            }
        }
    }
</script>

<style scoped>
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    ul li{
        padding: 5px 35px;
        border: 1px solid;
        margin: 2px 0;
    }
    input {
        margin: 5px;
    }

    .list-enter-from {
        opacity: 0;
        transform: translateX(-60px);
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s ease;
    }
    .list-enter-to, .list-leave-from {
        opacity: 1;
        transform: translateX(0);
    }
    .list-leave-to {
        opacity: 0;
        transform: translateX(60px);
    }
</style>