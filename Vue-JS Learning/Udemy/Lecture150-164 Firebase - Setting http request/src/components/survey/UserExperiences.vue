<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getDataFromFirebase">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading data...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && results.length === 0">No data found, please add some data first.</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../../firebase/index.js';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    }
  },
  methods: {
    // get data to firebase
    async getDataFromFirebase() {
      this.isLoading = true;
      this.error = null;

      onSnapshot(query(collection(db, 'rating-app'), orderBy('date', 'asc')), (querySnapshot) => {
        const result = [];
        querySnapshot.forEach((doc) => {
        this.isLoading = false;
          result.push({
            id: doc.id,
            name: doc.data().name,
            rating: doc.data().rating
          })
          this.results = result;
        });
      });
    }
  },
  mounted() {
    this.getDataFromFirebase();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>