<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{'show-error': !formIsValid}">
            <label for="email">Enter Your Email</label>
            <input type="email" id="email" v-model.trim="email">
        </div>
        <div class="form-control" :class="{'show-error': !formIsValid}">
            <label for="message">Message</label>
            <textarea rows="5" id="message" v-model.trim="message"></textarea>
        </div>
        <p class="errors" v-if="!formIsValid">Please enter a valid email or non-empty message.</p>
        <div class="actions">
            <base-button>Send Message</base-button>
        </div>
    </form>
</template>

<script>
    import { collection, addDoc } from 'firebase/firestore';
    import { db } from '../../firebase/index.js';

    export default {
        data() {
            return {
                email: '',
                message: '',
                formIsValid: true
            }
        },
        methods: {
            submitForm() {
                this.formIsValid = true;
                if(this.email === '' || !this.email.includes('@') || this.message === '') {
                    this.formIsValid = false;
                    return;
                }
                this.$store.dispatch('requests/contactCoach', {
                  email: this.email,
                  message: this.message,
                  coachId: this.$route.params.id
                })
                const getLocalUid = localStorage.getItem('uid');
                addDoc(collection(db, 'find-coach-app-request'), {
                  logInId: getLocalUid,
                  email: this.email,
                  message: this.message,
                  coachId: this.$route.params.id
                });
                this.$router.replace('/coaches');
            }
        },
    }
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}
.show-error input,
.show-error textarea {
  border-color: red;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #3d008d;
  padding: 7px 10px;
  border-radius: 5px;
}

input:focus,
textarea:focus {
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>