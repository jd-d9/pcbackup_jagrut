<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <corse-goal>
      <template #default="slotProp">
        <h1>{{ slotProp.item }}</h1>
        <p>{{ slotProp['another-prop'] }}</p>
      </template>
    </corse-goal>
    <button @click="setSelectedCompFn('active-goal')">Active Goal</button>
    <button @click="setSelectedCompFn('manage-goal')">Manage Goal</button>
    <!-- <active-goal v-if="setSelectedComponent === 'active-goal'"></active-goal>
    <manage-goal v-if="setSelectedComponent === 'manage-goal'"></manage-goal> -->  <!-- if more content than we have too repeated v-if multiple time. so better option is use special tag component -->
    <!-- <keep-alive> -->
        <component :is="setSelectedComponent"></component>  <!-- special tag which take one attribute is "is". otherwhise can't display anythig //// here I pass :is dynamically -->
    <!-- </keep-alive>  keep-alive tag is use for don't lose data of fields(input tag) whenever we toggle one to other(here active-goal to manage-goal) """""""in this some issue to work this.""""""" -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      setSelectedComponent: 'active-goal',
    };
  },
  methods: {
    setSelectedCompFn(cmp) {
      this.setSelectedComponent = cmp
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>