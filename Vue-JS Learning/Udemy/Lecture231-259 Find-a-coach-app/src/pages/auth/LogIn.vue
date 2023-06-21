<template>
    <base-card>
        <form @submit.prevent="submitForm">
            <div class="form-control">
                <h2>Log In</h2>
            </div>
            <div class="form-control" :class="{invalid: !formIsValid}">
                <label for="email">Email</label>
                <input type="email" id="email" v-model.trim="email">
            </div>
            <div class="form-control" :class="{invalid: !formIsValid}">
                <label for="password">Password</label>
                <input type="password" id="password" v-model.trim="password">
            </div>
            <div class="form-control" style="margin: 10px 0 20px;">
                Reset password? <a href="javascript:void(0)" @click="resetPassWord">Here</a>
            </div>
            <p v-if="!formIsValid">Please enter valid email or password</p>
            <div class="form-control">
                <base-button>Log In</base-button>
                <base-button link to="/signin" type="button" mode="outline">Sign In</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
    import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

    export default {
        data() {
            return {
                email: '',
                password: '',
                formIsValid: true,
            }
        },
        methods: {
            submitForm() {
                this.formIsValid = true;
                if (this.email == '' || !this.email.includes('@') || this.password == '') {
                    this.formIsValid = false;
                }
                // login with email and password.
                const auth = getAuth();
                signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    localStorage.setItem('uid', userCredential.user.uid);
                    alert('Login succeed, Welcome ' + userCredential.user.displayName)
                    this.$router.push('/coaches');
                })
                .catch((error) => {
                    if(error.code == 'auth/wrong-password') {
                        error.code = 'wrong password! please enter correct password.'
                    }
                    else{
                        error.code = 'user not found! please enter registered email.'
                    }
                    alert(error.code)
                });
            },
            resetPassWord() {
                // send reset password link.
                const auth = getAuth();
                sendPasswordResetEmail(auth, this.email)
                .then(() => {
                    alert('Password reset link sent on ' + this.email);
                    this.$router.push('/');
                })
                .catch((error) => {
                    if(error.code == 'auth/missing-email') {
                        error.code = 'please enter registered email.'
                    }
                    else {
                        error.code = 'user not found! please enter registered email.'
                    }
                    alert(error.code);
                });
            }
        }
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
        position: relative;
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
        font: inherit;
        width: 100%;
        border: 1px solid #3d008d;
        padding: 8px 12px;
        border-radius: 5px;
    }

    input:focus,
    textarea:focus {
        background-color: #faf6ff;
        outline: none;
    }

    .showPass {
        position: absolute;
        right: 1%;
        top: 55%;
    }

    .invalid label {
        color: red;
    }

    .invalid input {
        border: 1px solid red;
    }
</style>