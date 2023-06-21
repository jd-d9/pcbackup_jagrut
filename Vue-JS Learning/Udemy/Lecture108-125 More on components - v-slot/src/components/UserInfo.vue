<template>
  <section>
    <base-card>
      <template v-slot:header>  <!-- slot for header portion with name derative(with collun and name)....must write in template tag -->
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template v-slot:default>  <!-- slot for default portion with name derative(with collun and name)....must write in template tag -->
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>
<!-- shorthand for slot is #. Just Write only #default instead of v-slot:default -->

<script>
  export default {
    props: ['fullName', 'infoText', 'role'],
  };
</script>

<!-- <style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style> -->