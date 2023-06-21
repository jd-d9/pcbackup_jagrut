<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import { mapGetters } from 'vuex';  
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  methods: {
    addOne() {
      this.$store.commit('increase', { value: 10 })
      // this.$store.dispatch('increament')      // dispatch use for action
      // this.$store.commit({       //or we can write like this.
      //   type: 'increase',  
      //   value: 10 
      // });
    }
  },
  computed: {
    // isAuth() {
    //     return this.$store.getters.userIsAuthenticated
    // },
    ...mapGetters({
        isAuth: 'userIsAuthenticated'
    })
    // ...mapGetters('giveAnyNameHere', {       // for accesing data from counterModule first argument is store > modules name.
    //     isAuth: 'userIsAuthenticated'
    // })
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>