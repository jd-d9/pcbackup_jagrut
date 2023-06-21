<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import Mixins from '../mixins/mixin.js';

export default {
  components: {
    UserAlert,
  },
  data() {
    return {
      alertTitle: 'Want to delete user?',
      // alertIsVisible: true,             // If we have same data available in mixins and component then it will consider component data.
    }
  },
  mixins: [Mixins],
};
</script>