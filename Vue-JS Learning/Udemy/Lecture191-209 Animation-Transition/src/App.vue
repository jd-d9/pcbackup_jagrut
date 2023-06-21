<template>
  <div class="container">
    <list-user></list-user>
  </div>
  <div class="container">
    <div class="block" :class="{animate: animateBlock}"></div>
    <button @click="animateBlockFn">Animate</button>
  </div>
  <div class="container">
    <transition 
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enteredCancled"
      @leave-cancelled="leaveCancled">         <!-- this transition events work like name //// :css="false" is use for say to component will not use css for this component. Use it when you change css using js -->
      <p v-if="paraIsVisible">Using transition tag of vue make this Paragraph toggle</p>
    </transition>
    <button @click="togglePara">Toogle Para</button>
  </div>
  <!-- <div class="container">
    <transition>
      <p v-if="paraIsVisible" enter-to-class="classNameHere" enter-active-class="classNameHere">Using transition tag of vue make this Paragraph toggle</p>
    </transition> -->    <!-- we can add property with give class in enter-to-class and enter-active-class attr like above. -->
    <!-- <transition name="para"> -->     <!-- when we have multiple transition tag use with name attr like this and use same name in css-selecter instead of v -->
      <!-- <p v-if="paraIsVisible" enter-to-class="classNameHere" enter-active-class="classNameHere">Using transition tag of vue make this Paragraph toggle</p>
    </transition>
    <button @click="togglePara">Toogle Para</button>
  </div> -->
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <transition name="userButton" mode="out-in">    <!-- remove mode or change value to in-out of mode and check animation so you got idea about it -->
      <button @click="showUser" v-if="!userIsVisible">Show User</button>
      <button @click="hideUser" v-else>Hide User</button>     <!-- multiple tag in transition han must use if and else not if and if. -->
    </transition>
  </div>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
  <router-view>          <!-- for adding animation to route element - add transition to inner in router-view is right method like this -->
    <transition  name="routes" mode="out-in" v-slot="slotProps">
      <component :is="slotProps"></component>
    </transition>
  </router-view>
</template>  

<script>
import ListUser from './components/ListUsers.vue'
export default {
  components: {
    ListUser,
  },
  data() {
    return { 
      animateBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      userIsVisible: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    animateBlockFn() {
      this.animateBlock = true;
    },
    showUser() {
      this.userIsVisible = true;
    },
    hideUser() {
      this.userIsVisible = false;
    },
    togglePara() {
      this.paraIsVisible = !this.paraIsVisible
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    beforeEnter(el) {
      console.log(el, 'beforeenter')
      el.style.opacity = 0;
    },
    enter(el, done) {          // done is use for afterEnter show after done this one.
      console.log(el, 'enter')
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if(round > 100){
          clearInterval(this.enterInterval);
          done();
        }
      }, 30)
    },
    afterEnter(el) {
      console.log(el, 'afterenter')
    },
    beforeLeave(el) {
      console.log(el, 'beforeleave');
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log(el, 'leave');
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if(round > 100){
          clearInterval(this.leaveInterval);
          done();
        }
      }, 30)
    },
    afterLeave(el) {
      console.log(el, 'afterleave')
    },
    enteredCancled(el) {
      console.log(el,'cancle-enter')
      clearInterval(this.enterInterval)
    },
    leaveCancled(el) {
      console.log(el,'cancle-leave')
      clearInterval(this.leaveInterval)
    }
  },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: all 0.4s ease; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translate(-150px); */
  animation: shakeBox 0.4s ease;
}
@keyframes shakeBox {
  0%{
    transform: translateX(0px) scale(1);
  }  
  60%{
    transform: translateX(-130px) scale(1.2);
  }  
  100%{
    transform: translateX(0px) scale(1);
  }  
}

.v-enter-from {     /* v is default in vue. If we have multiple transition tag in vue than add name and use this name instead of v in css-selecter. */
  opacity: 0;
  transform: translateY(-30px) scale(0.5);
}
.v-enter-active {
  transition: all 0.4s ease;
}
.v-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.v-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.v-leave-active {
  transition: all 0.4s ease;
}
.v-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.1);
}

.userButton-enter-from, .userButton-leave-to{
  opacity: 0;
}
.userButton-enter-to, .userButton-leave-from{
  opacity: 1;
}
.userButton-enter-active, .userButton-leave-active{
  transition: opacity 0.4s ease-in;
}
</style>