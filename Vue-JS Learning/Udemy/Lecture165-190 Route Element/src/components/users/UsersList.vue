<template>
  <ul>
    <button @click="confirmDemo">Dynaically Navigate</button>   <!-- for show how to Dynamically navigate path -->
    <button @click="confirmSaved">Save Change</button>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      changesSaved: false,
    }
  },
  inject: ['users'],
  methods: {
    confirmDemo() {
      this.$router.push('/teams')             // In router, there is built-in component is router(use with $ ==> $router) to perform various events. push is use to redirect in given path
      // this.$router.back()                  // back is use to go back in browser.
      // this.$router.forward()               // forward is use to go forward in browser.
    },
    confirmSaved() {
      this.changesSaved = true;
    }
  },
  beforeRouteLeave (to, from, next) {
    if(this.changesSaved) {
        next()
    }else{
        const userWantsToLeave = confirm('Are you sure you want to leave without savechange ?');
        next(userWantsToLeave);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>