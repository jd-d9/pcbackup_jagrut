export default {
    registerCoach(state, payload) {
        state.coaches.push(payload);
    },
    resetCoachList(state) {
        state.coaches = [];
    }
};
