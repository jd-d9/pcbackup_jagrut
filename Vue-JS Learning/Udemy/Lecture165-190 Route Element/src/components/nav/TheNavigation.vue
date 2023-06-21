<template>
  <header>
    <nav>
      <ul>
        <li>
          <!-- <button @click="setActivePage('teams-list')">Teams</button> -->
          <router-link to="/teams">Teams</router-link>   <!-- vue built-in component work as anchor tag(a). use to show different file on click event. It take one props 'to' and set it's value file-path which we have to jump on -->
        </li>
        <li>
          <!-- <button @click="setActivePage('users-list')">Users</button> -->
          <router-link to="/users">Users</router-link>   <!-- Also it don't change the page whenever refresh the page. It show same page which we are in at time reload page. //// check in inspect it show anchor tag //// -->
        </li>
      </ul>
    </nav>
  </header>
</template>

<!-- <script>
export default {
  emits: ['set-page'],
  methods: {
    setActivePage(page) {
      this.$emit('set-page', page);
    },
  },
};
</script> -->

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

/* button {
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
} */
a {         /* router-link same work as anchor tag so we have to give style to anchor tag for router-link tag */
  text-decoration: none;
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

/* button:hover,
button:active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
} */

a:hover,
a:active,
a.router-link-active {        /* when click on roter-link vue add default class as router-link-sctive so, here we give css to router-link-active */
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}

a:hover,
a:active,
a.active {                    /* we can override router-link-active class-name to another class-name using linkActiveClass props in main.js file as I override router-link-active with 'active' class-name please check */
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>