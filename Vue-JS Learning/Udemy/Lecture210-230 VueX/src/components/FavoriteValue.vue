<template>
    <p>We do more here...</p>
    <h2>{{ $store.state.counter }}</h2>
</template>

<script>
    export default {
        // computed: {
        //     counter() {
        //         // return this.$store.getters.finalCounter
        //         return this.$store.getters.normalizedCounter
        //     },
        //     // ...mapGetters(['normalizedCounter'])       // we can call getter-function with use of ...mapGetters, As developer it's better to use of mapper. 
        // } 
    }
</script>