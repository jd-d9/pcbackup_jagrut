import { createStore } from 'vuex';


const counterModule = {
    // namespaced: true,           // use for namespacing - make different to the main store and for access data use name which we define in store > module (here - giveAnyNameHere)
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {       // One important rule to remember is that mutation handler functions must be synchronous.
        increament(state) {     // By default take 'state' argument from vuex.
            state.counter = state.counter + 1;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;    // .value because we pasing value as object in App.vue file
        }
    },
    actions: {       // Make an asynchronous
        increament(context) {     // By default take 'context' argument from vuex.        // It isn't mandatory to give same name as in mutation.
            setTimeout(function() {
                context.commit('increament');
            },2000)
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter * 3
        },
        normalizedCounter(state, getter) {     // with getter argument we can use like below.
            // const finalCounter = state.counter * 3;
            const finalCounter = getter.finalCounter;
            if(finalCounter < 0){
                return 0
            }
            if(finalCounter > 100) {
                return 100
            }
            return finalCounter;
        }
    }
}

const store = createStore({
    modules: {
        giveAnyNameHere: counterModule
    },
    state() {
        return {
            isLoggedIn: false,
        }
    },
    mutations: {
        // increament(state) {     // By default take 'state' argument from vuex.
        //     state.counter = state.counter + 1;
        // },
        // increase(state, payload) {
        //     state.counter = state.counter + payload.value;    // .value because we pasing value as object in App.vue file
        // },
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }
    },
    actions: {       // Make an asynchronous
        // increament(context) {     // By default take 'context' argument from vuex.        // It isn't mandatory to give same name as in mutation.
        //     setTimeout(function() {
        //         context.commit('increament');
        //     },2000)
        // },
        logIn(context) {
            context.commit('setAuth', {isAuth: true})
        },
        logOut(context) {
            context.commit('setAuth', {isAuth: false})
        },
    },
    getters: {
        // finalCounter(state) {
        //     return state.counter * 3
        // },
        // normalizedCounter(state, getter) {     // with getter argument we can use like below.
        //     // const finalCounter = state.counter * 3;
        //     const finalCounter = getter.finalCounter;
        //     if(finalCounter < 0){
        //         return 0
        //     }
        //     if(finalCounter > 100) {
        //         return 100
        //     }
        //     return finalCounter;
        // },
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        }
    }
})

export default store;