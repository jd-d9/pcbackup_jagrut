<template>
    <section>
        <form @submit.prevent="submitDetails">
            <div>
                <label>Name :</label>
                <input type="text" placeholder="Enter Name" v-model="nameValue">
            </div>
            <div>
                <label>Phone :</label>
                <input type="tel" placeholder="Enter Number" v-model="phoneValue">
            </div>
            <div>
                <label>Email :</label>
                <input type="email" placeholder="Enter Email" v-model="mailValue">
            </div>
            <div class="text-center">
                <button>Add Friend</button>
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        emits: ['add-new-friend-data'],
        data() {
            return {
                nameValue: '',
                phoneValue: '',
                mailValue: ''
            }
        },
        methods: {
            submitDetails() {
                this.$emit(
                    'add-new-friend-data',
                    this.nameValue,
                    this.phoneValue,
                    this.mailValue
                )
            }
        }
    }
</script>
