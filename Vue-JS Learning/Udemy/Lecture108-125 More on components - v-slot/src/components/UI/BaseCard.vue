<template>
    <div>
        <header>
            <slot name="header"></slot> <!-- use to get inner html data of this componant whenever we add new componet as a parent ////// here add base-card in UserInfo.vue component please check it. -->
        </header>
        <slot name="default"></slot>
    </div>
</template>


<style scoped>
 header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 12px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>