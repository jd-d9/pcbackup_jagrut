<template>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <h3>{{ uAge }}</h3>
</template>

<script>
    import { computed, inject } from 'vue';

    export default {
        props: ['firstName', 'lastName', 'age'],
        setup(props, context) {

            const userName = computed(() => {
                return props.firstName + ' ' + props.lastName;
            });

            console.log(context) ;     // attrs,emit and slots stay in context.

            const uAge = inject('userAge');     // inject dependency here.

            // context.emit('save-data', 1);       // add custom event like this.

            return {
                userName,
                uAge
            }
        }
    }




    // life-cycle hooks : Composition-api hooks import from 'vue'.
    // beforeCreate/created ==> setup()
    // beforeMount ==> onBeforeMount
    // mounted ==> onMounted
    // beforeUpdate ==> onBeforeUpdate
    // updated ==> onUpdated
    // beforeUnmount ==> onBeforeUnmount
    // unmounted ==> onUnmounted
</script>