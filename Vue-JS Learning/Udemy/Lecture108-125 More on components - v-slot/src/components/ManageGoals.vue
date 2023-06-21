<template>
    <h1>Manage Goal</h1>
    <input type="text" ref="goal">
    <button @click="setInputFieldData">Submit</button>
    <p>{{ showValue }}</p>
    <teleport to="body">      <!-- to use of teleport we show over below error part to in body not in perticular managesection time. Check with inspect element -->
        <alert-error v-if="inputIsInvalid">
            <h2>Invalid Input</h2>
            <p>Input field must not be empty, Please enter few characters...</p>
            <button @click="closeError">Okay</button>
        </alert-error>
    </teleport>        <!-- it is not mendatory but if we can add in body not in this perticular section than use teleport and teleport take to attribute it's value must be to="body" or to="#app" -->
</template>

<script>
import AlertError from './AlertError.vue'      // add componant locally like this.

export default { 
    components: {        // add componant locally like this. Prefer locally registered is better, if possible must use local so, main.js code structure will be cleaned.
        AlertError,
    },
    data() {
        return {
            inputIsInvalid: false,
            showValue: '',
        }
    },
    methods: {
        setInputFieldData() {
            const enterdValue = this.$refs.goal.value;
            if(enterdValue === ''){
                this.inputIsInvalid = true;
            }
            // else{
            //     this.showValue = enterdValue
            // }
        },
        closeError() {
            this.inputIsInvalid = false;
        }
    }
}

</script>