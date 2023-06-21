<template>
    <h2>{{ counter }}</h2>
    <!-- <h2>{{ counter }}</h2> -->  <!-- we can like this using computed property -->
</template>

<script>
    // import { mapGetters } from 'vuex';

    export default {
        computed: {
            counter() {
                // return this.$store.getters.finalCounter
                return this.$store.getters.normalizedCounter
                // return this.$store.getters['giveAnyNameHere/normalizedCounter'].normalizedCounter    // access with namespacing like this
            },
            // ...mapGetters(['normalizedCounter'])       // we can call getter-function with use of ...mapGetters, As developer it's better to use of mapper. 
        } 
    }
</script>