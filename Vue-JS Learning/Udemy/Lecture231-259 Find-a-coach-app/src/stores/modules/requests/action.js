export default {
    contactCoach(context, payload) {
        const newRequest = {
            coachId: payload.id,
            userEmail: payload.email,
            message: payload.message
        }
        context.commit('addRequest', newRequest)
    }
}