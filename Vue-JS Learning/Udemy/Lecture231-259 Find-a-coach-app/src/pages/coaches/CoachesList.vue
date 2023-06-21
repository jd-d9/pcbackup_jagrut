<template>
    <section>
        <the-header></the-header>
        <section>
            <coach-filter @change-filter="setFilters"></coach-filter>
        </section>
        <section>
            <base-card>
                <div class="controls">
                    <base-button link to="/register">Register as Coach</base-button>
                </div>
                <ul v-if="hasCoach">
                    <coach-item v-for="coach in filteredCoaches" 
                    :key="coach.id"
                    :id="coach.id"
                    :firstName="coach.firstName"
                    :lastName="coach.lastName"
                    :rate="coach.hourlyRate"
                    :areas="coach.areas"
                    ></coach-item>
                </ul>
                <div v-else>
                    <base-spinner></base-spinner>
                </div>
            </base-card>
        </section>
    </section>
</template>

<script>
    import CoachItem from '../../components/coaches/CoachItem.vue';
    import CoachFilter from '../../components/coaches/CoachFilter.vue';
    import { collection, onSnapshot, query, where } from 'firebase/firestore';
    import { db } from '../../firebase/index.js';

    export default {
        components: {
            CoachItem,
            CoachFilter,
        },
        data() {
            return {
                isLoading: false,
                activeFilters: {
                    frontend: true,
                    backend: true,
                    career: true,
                    search: '',
                },
            }
        },
        computed: {
            filteredCoaches() {
                const coaches = this.$store.getters['coaches/coaches'];
                return coaches.filter(coach => {
                    const searchItem = this.activeFilters.search.toLowerCase();
                    if(this.activeFilters.frontend && coach.areas.includes('frontend')){
                        return true
                    }
                    if(this.activeFilters.backend && coach.areas.includes('backend')){
                        return true
                    }
                    if(this.activeFilters.career && coach.areas.includes('career')){
                        return true
                    }
                    if(this.activeFilters.search && (coach.firstName.toLowerCase().includes(searchItem) || coach.lastName.toLowerCase().includes(searchItem))){
                        return true
                    }
                    return false
                })
            },
            hasCoach() {
                return this.$store.getters['coaches/hasCoach'];
            }
        },
        methods: {
            setFilters(updatedFilters) {
                this.activeFilters = updatedFilters;
            },
            getFireBaseData() {                
                this.isLoading = true;
                const getLoacalUid = localStorage.getItem('uid');
                // Simple queries - to get peticular user data after login.
                const coachRef = collection(db, 'find-coach-app');
                const q = query(coachRef, where('logInId', '==', getLoacalUid));
                this.$store.commit('coaches/resetCoachList');
                onSnapshot(q, (querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const result = {
                            id: doc.id,
                            first: doc.data().first,
                            last: doc.data().last,
                            rate: doc.data().rate,
                            areas: doc.data().areas,
                            desc: doc.data().desc,
                        }
                        this.$store.dispatch('coaches/registerCoach', result);
                        this.isLoading = false;
                    });
                });
            }
        },
        mounted() {
            this.getFireBaseData();
        }
    }
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.controls {
    display: flex;
    justify-content: space-between;
}

.form-control {
  margin: 0.5rem 0;
}

</style>