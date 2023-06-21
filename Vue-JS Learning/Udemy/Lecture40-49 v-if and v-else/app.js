const app = Vue.createApp({
  data() {
    return {
      hideShowToggler: false,
      enteredGoalValue: '',
      goals: []
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(ind) {
      this.goals.splice(ind, 1);
    },
    hideShowList() {
      this.hideShowToggler = !this.hideShowToggler
    }
  }

});
app.mount('#user-goals');
