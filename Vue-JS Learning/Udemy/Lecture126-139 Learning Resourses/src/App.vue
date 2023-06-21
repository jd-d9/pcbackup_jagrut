<template>
    <the-header title="Remember Me"></the-header>
    <the-resources></the-resources>
</template>

<script>
    import TheHeader from './Components/layouts/TheHeader.vue'
    import TheResources from './Components/TheResources.vue'
    export default {
        components: {
            // 'learning-resources': LearningResources          // Also we can add like this.
            TheHeader,
            TheResources
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    *{
        box-sizing: border-box;
    }
    html{
        font-family: 'Roboto', sans-serif;
    }
    body{
        margin: 0;
    }
</style>