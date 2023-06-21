import { createRouter,createWebHistory } from 'vue-router';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';
import LogIn from './pages/auth/LogIn.vue';
import SignIn from './pages/auth/SignIn.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path:'/', redirect: '/login' },
        { path:'/coaches', component: CoachesList, meta: { auth: true } },
        { path:'/coaches/:id', 
            component: CoachDetails, 
            props:true,
            children: [
                { path:'contact', component: ContactCoach }    // /coaches/id1/contact
            ]
        },
        { path:'/register', component: CoachRegistration, meta: { auth: true } },
        { path:'/requests', component: RequestReceived, meta: { auth: true } },
        { path:'/login', component: LogIn },
        { path:'/signin', component: SignIn },
        { path:'/:notFound(.*)', component: NotFound }
    ]
});

router.beforeEach((to, from, next) => {
    if(to.meta.auth) {
        const getLocalUid = localStorage.getItem('uid');
        if(getLocalUid) {
            next();
        }
        else {
            next('/login');
        }
    }
    else {
        next();
    }
});

export default router;