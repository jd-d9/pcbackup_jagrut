<template>
  <form @submit.prevent="submitData">
    <div class="form-control" :class="{Invalid: invalidUserNameVal === 'invalid'}">  <!-- whenever invalidUserNameVal is find 'invalid' then Invalid class is applied on this div. -->
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" type="text" v-model.trim="userName" @blur="invalidUserName"/>
      <p v-if="invalidUserNameVal === 'invalid'">Atleast enter few characters...</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model="userAge"/>
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input id="interest-news" name="interest" type="checkbox" value="news" v-model="interest"/> <!-- if we have multiple checkbox then use with array and give unique value to each in tag like this. -->
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" type="checkbox" value="tutorials" v-model="interest" />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" type="checkbox" value="nothing" v-model="interest" />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" type="radio" value="video course" v-model="how"/> <!-- for radio we have to give unique value to each tag like this. -->
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio" value="blogs" v-model="how"/>
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" value="others" v-model="how"/>
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <input type="checkbox" name="confirm" id="confirmbox" v-model="confirmBox"> <!-- if we have only one checkbox then use via true,false like this. -->
      <label for="confirmbox">Confirm terms & conditions?</label>
    </div>
    <div class="form-control">
      <rating-control v-model="rating"></rating-control>  <!-- use v-model for dynamic the value of rating-control component. -->
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
  import RatingControl from './RatingControl.vue'
  export default {
    components: {
      RatingControl,
    },
    data() {
      return {
        userName: '',
        userAge: null,
        referrer: 'wom',
        interest: [],      // give array for store value when we have multiple checkbox like this.
        how: null,
        confirmBox: false,
        invalidUserNameVal: '',
        rating: null,
      }
    },
    methods: {
      submitData() {
        console.log(this.userName);
        console.log(this.userAge);
        console.log(this.referrer);
        console.log(this.interest);
        console.log(this.how);
        console.log(this.confirmBox);
        console.log(this.rating,'rating');
        this.userName = '';
        this.userAge = null;
        this.referrer = 'wom';
        this.interest = [];
        this.how = null;
        this.confirmBox = false;
        this.rating = null;
      },
      invalidUserName() {
        if(this.userName === ''){
          this.invalidUserNameVal = 'invalid';
        }else{
          this.invalidUserNameVal = 'valid';
        }
      }
    }
  }
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.Invalid input{
  border-color: red;
}
.form-control.Invalid label{
  color: red;
}

p{
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>