<template>
    <router-view v-slot="slotProps">
        <transition name="app-trans" mode="out-in">
            <component :is="slotProps.Component"></component>
        </transition>
    </router-view>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.app-trans-enter-active,
.app-trans-leave-active {
  transition:  all 0.4s ease;
}

.app-trans-enter-from,
.app-trans-leave-to {
  opacity: 0.3;
  transform: scale(0.8);
}

.app-trans-enter-to,
.app-trans-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>