<template>
    <base-card>
            <form @submit.prevent="signInForm">
            <div class="form-control">
                <h2>Sign In</h2>
            </div>
            <div class="form-control" :class="{invalid: !formIsValid}">
                <label for="fname">First Name</label>
                <input type="text" id="fname" v-model.trim="fName">
            </div>
            <div class="form-control" :class="{invalid: !formIsValid}">
                <label for="lname">Last Name</label>
                <input type="text" id="lname" v-model.trim="lName">
            </div>
            <div class="form-control" :class="{invalid: !formIsValid}">
                <label for="email">Email</label>
                <input type="email" id="email" v-model.trim="email">
            </div>
            <div class="form-control" :class="{invalid: !formIsValid}">
                <label for="password">Password</label>
                <input type="password" id="password" v-model.trim="password">   
            </div>
            <p v-if="!formIsValid">Either field is empty or not valid.</p>
            <div class="form-control" style="margin-top: 20px">
                <base-button>Sign in</base-button>
                <base-button link to="/login" type="button" mode="outline">Log In</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
    import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

    export default {
        data() {
            return {
                fName: '',
                lName: '',
                email: '',
                password: '',
                formIsValid: true,
            }
        },
        methods: {
            signInForm() {
                this.formIsValid = true;
                if(this.fName === '' || this.lName === '' || this.email === '' || !this.email.includes('@') || this.password == '') {
                    this.formIsValid = false;
                }
                // signin with email and password.
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, this.email, this.password)
                .then(async (userCredential) => {
                    await updateProfile(auth.currentUser, { displayName: this.fName });
                    alert('Hello ' + userCredential.user.displayName + ', You are successfully registered.');
                    this.$router.push('/');
                })
                .catch((error) => {
                    alert(error.code + ' ' + error.message);
                });
            }
        },
    }
</script>

<style scoped>
    p, h2{
        color: #3d008d;
    }

    form {
        margin: 1rem;
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

    .invalid label {
        color: red;
    }

    .invalid input {
        border: 1px solid red;
    }
</style>