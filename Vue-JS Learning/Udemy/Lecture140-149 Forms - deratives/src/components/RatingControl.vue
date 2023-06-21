<template>
    <ul>
        <li :class="{active: modelValue === 'poor'}">
            <button type="button" @click="clickFunction('poor')">Poor</button>  <!-- must use type="button" here because when we click on this button it submit form which stay on TheForm.vue file. -->
        </li>
        <li :class="{active: modelValue === 'average'}">
            <button type="button" @click="clickFunction('average')">Average</button>
        </li>
        <li :class="{active: modelValue === 'great'}">
            <button type="button" @click="clickFunction('great')">Great</button>
        </li>
    </ul>
</template>

<script>
    export default {
        props:['modelValue'],  // use for get rating value, which one user selected.
        emits:['update:modelValue'],   // for show rating value.
        methods: {
            clickFunction(value) {
                this.$emit('update:modelValue',value)
            }
        }
    }
</script>

<style scoped>
    ul{
        list-style: none;
        display: flex;
        max-width: 0.5rem 0;
    }
    li{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.5rem;
    }
    button{
        padding: 0.3rem 0.9rem;
        background: transparent;
    }
    .active button{
        color: white;
        border-color: purple;
        background-color: purple;
    }
</style>