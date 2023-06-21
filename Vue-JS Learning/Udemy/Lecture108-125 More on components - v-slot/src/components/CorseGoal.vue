<template>
    <section>
        <ul>
            <li v-for="goal in goals" :key="goal">
                <slot :item="goal" another-prop="abcdefg..."></slot>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                goals : ['Hello world','Learn Vue.js','1234']
            }
        }
    }
</script>