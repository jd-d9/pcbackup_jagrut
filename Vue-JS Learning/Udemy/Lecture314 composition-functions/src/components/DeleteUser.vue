<template>
  <user-alert v-if="alertIsVisible" title="Delete the User?" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import useHook from '../hooks/hook.js'

export default {
  components: {
    UserAlert,
  },
  setup() {
    const [ alertIsVisible, showAlert, hideAlert ] = useHook();

    return {
      alertIsVisible,
      showAlert,
      hideAlert 
    }
  },
};
</script>