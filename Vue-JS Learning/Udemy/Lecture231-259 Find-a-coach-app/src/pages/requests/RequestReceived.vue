<template>
    <section>
        <the-header></the-header>
        <section>
            <base-card>
                <header>
                    <h2>Requests Received</h2>
                </header>
                <ul v-if="hasRequests">
                    <request-item
                    v-for="req in receivedRequests"
                    :key="req.id"
                    :email="req.userEmail"
                    :message="req.message"
                    ></request-item>
                </ul>
                <div v-else>
                    <base-spinner></base-spinner>
                </div>
            </base-card>
        </section>
    </section>
</template>

<script>
    import RequestItem from '../../components/requests/RequestItem.vue';
    import { collection, onSnapshot, query, where } from 'firebase/firestore';
    import { db } from '../../firebase/index.js';
    
    export default {
        components: {
            RequestItem,
        },
        data() {
            return {
                isLoading: false,
            }
        },
        computed: {
            receivedRequests() {
                return this.$store.getters['requests/requests'];
            },
            hasRequests() {
                return this.$store.getters['requests/hasRequests'];
            }
        },
        methods: {
            requestPartData() {
                this.isLoading = true;
                // Simple queries - to get particular user data after login.
                const getLocalUid = localStorage.getItem('uid');
                const requestRef = collection(db, 'find-coach-app-request');
                const q = query(requestRef, where('logInId', '==', getLocalUid));

                this.$store.commit('requests/resetRequests');
                onSnapshot(q, (querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const result = {
                            id: doc.data().coachId,
                            email: doc.data().email,
                            message: doc.data().message
                        }
                        this.$store.dispatch('requests/contactCoach', result);
                        this.isLoading = false;
                    });
                });
            },
        },
        mounted() {
            this.requestPartData();
        }
    }
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>