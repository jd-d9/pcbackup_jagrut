export default {
    registerCoach(context, payload) {
        const coachData = {
            id: payload.id,
            firstName: payload.first,
            lastName: payload.last,
            description: payload.desc,
            hourlyRate: payload.rate,
            areas: payload.areas,
        };
        context.commit('registerCoach', coachData);
    }
};