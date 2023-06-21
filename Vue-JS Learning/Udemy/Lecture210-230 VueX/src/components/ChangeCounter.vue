<template>
    <button @click="addOne">Add 1</button>
    <!-- <button @click="increase({value: 10})">use with mappers</button> -->
</template>

<script>
    // import { mapActions } from 'vuex';

    export default {
        methods: {
            addOne() {
                this.$store.commit('increament');
            },
            // ...mapActions(['increase']),    // get mutation using mapActions
            // ...mapActions({                 // or we can use object and give name as we want like this. Same thing work for mapGetters too.
            //     inc: 'increase',
            //     incre: 'increament'
            // })
        }
    }
</script>