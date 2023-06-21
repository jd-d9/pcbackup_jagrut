<template>
  <section class="container">
    <user-data
    :first-name="fName"
    :last-name="lName"
    :age="uAge"></user-data>

    <button @click="setAge">Set Age</button>
    <input type="text" placeholder="First Name" @input="setFirstName">
    <input type="text" placeholder="Last Name" @input="setLastName">
    <!-- <input type="text" placeholder="First Name" v-model="fName">
    <input type="text" placeholder="Last Name" v-model="lName"> -->
  </section>
</template>

<script>
// import { ref } from 'vue';         // ref create reactive reference for data,variable,component. It works on object,string,number,....
import { ref, reactive, computed, watch, provide } from 'vue';       // reactive is same like ref but little bit diference is only works with object. so, if we have object must use reactive instead of ref.
import UserData from './components/userData.vue';

export default {
  components: {
    UserData,
  },
  setup() {
    // let user = ref({
    //   name: 'jagrut',
    //   age: 24
    // });

    // console.log(user)

    // setTimeout(() => {
    //   user.value = 'patel';      // if we use ref than we have update value with use of ( .value) like this.
    // }, 2000)
    // return { user: user };

    const fName = ref('');
    const lName = ref('');
    const uAge = ref(19);
    let userUpdate = reactive({
      name: 'jagrut',
      age: 19
    });



    

    const userName = computed(() => {          // in computed() one function will run and in this function compute property and provide them.
      return fName.value + ' ' + lName.value;
    })

    
    
    
    
    watch(uAge, (newValue, oldValue) => {
      console.log('new age : ' + newValue);
      console.log('old age : ' + oldValue);
    });
    // watch([uAge, uName], (newValues, oldValues) => {        // we have multiple value to watch than argument turns as newValues and oldValues(s added)
    //   console.log('new age : ' + newValues[0]);             // and get first var value with [0] and second with[1].
    //   console.log('old age : ' + oldValues[0]);
    //   console.log('new name : ' + newValues[1]);
    //   console.log('old name : ' + oldValues[1]);
    // })

    // setTimeout(() => {
    //   userUpdate.name = 'patel';        // if we use reactive than update value with (objectName.propertyName) like this.
    //   userUpdate.age = 24;
    // }, 2000);





    function setNewAge() {              // in setup function methods write as normal js function like this.
      userUpdate.age = 24;
      uAge.value = 24;
    }

    function setFirstName(event) {
      fName.value = event.target.value;
    }

    function setLastName(event) {
      lName.value = event.target.value;
    }




    provide('userAge', uAge);                   // proide take two argument first one is key-name and second is value which we provide.

    
    
    
    
    return {  user: userUpdate, 
              setAge: setNewAge,
              setFirstName,
              setLastName,
              userName,
              fName,
              lName,
              uAge,
            };       // syntax: return { propertyName: value/var - which we wish to return }
                                // if you return any function than just point it not define it at time of return like here i write setNewAge(not setNewAge()).
    // return { name: userUpdate.name, age: userUpdate.age };       // don't return like this because vue can't update value if we return like this. so, must return full object like i returned above line.
  }
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //     age: 19,
  //   };
  // },
  // methods: {
  //   setAge() {
  //     this.age = 24;
  //   }
  // },
  // watch: {
  //   age(value) {
  //     console.log(value);
  //   }
  // },
  // provide() {
  //   return {age: this.age};
  // }
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>