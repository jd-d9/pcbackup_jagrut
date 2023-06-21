export default {
    addRequest(state, payload) {
        state.requests.push(payload);
    },
    resetRequests(state) {
        state.requests = [];
    }
}