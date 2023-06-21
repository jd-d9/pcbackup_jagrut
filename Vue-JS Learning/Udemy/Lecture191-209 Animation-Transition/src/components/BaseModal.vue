<template>
  <div v-if="open" class="backdrop" @click="$emit('close')"></div>
  <transition name="dialog">   <!-- we only could use transition tag on direct child tag, not multiple tag. here i use on dialog(direct-child of transition) only not on div and dialog both. --> 
    <dialog open v-if="open">
      <slot></slot>
    </dialog>
  </transition>
</template>

<script>
export default {
  props: ['open'],
  emits: ['close'],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
}

@keyframes shakeBox {
  0%{
    transform: translateY(0px) scale(1);
  }  
  60%{
    transform: translateY(-30px) scale(1.4);
  }  
  100%{
    transform: translateY(0px) scale(1);
  }  
}

.dialog-enter-active, .dialog-leave-active {     /* use this to when use animation in transition */
  animation: shakeBox 0.4s ease;
}
</style>