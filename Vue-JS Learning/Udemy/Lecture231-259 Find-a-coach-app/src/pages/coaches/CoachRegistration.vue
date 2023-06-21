<template>
    <section>
        <the-header></the-header>
        <base-card>
            <h2>Register as a coach now!</h2>
            <coach-form @save-data="saveData"></coach-form>
        </base-card>
    </section>
</template>

<script>
    import CoachForm from '../../components/coaches/CoachForm.vue';
    import { collection, addDoc } from 'firebase/firestore';
    import { db } from '../../firebase/index.js'

    export default {
        components: {
            CoachForm,
        },
        methods: {
            async saveData(data) {
                const responce = await addDoc(collection(db, 'find-coach-app'), data);
                if(responce) {
                    this.$router.replace('/coaches');      // we can use push instead of replace it's have same behavior, But generally developer use replace. It use to redirect on mentioned page.
                }
            }
        },
    }
</script>