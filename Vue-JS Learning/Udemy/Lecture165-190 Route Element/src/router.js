import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMember from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/teams'},                                 // or we can use alias on Teamslist {path: '/teams', component: TeamsList, alias: '/'} to redirect.
        {path: '/teams', component: TeamsList, children: [           // children use for nested routes. must add router-view tag in respected file to display children element data.(here add in TeamList.vue)
            {path: '/teams/:teamId', component: TeamMember, props: true},    // Here dynamically add teamId so use collun(:) // dynamic segmaent for inner component of this file. // props: true is use to add prop value at place teamId. We use props in TeamMember.vue file. Use of props is better than use of $ or $route
        ]},
        {path: '/users', component: UsersList},
        {path: '/:notFound(.*)', component: NotFound},                   // /:notFound(.*) or /:catchAll(.*) is syntex which use when page is not found.
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
        if(savedPosition){
            return savedPosition
        }
        return {left: 0, top: 0}
    },
})
// router.beforeEach(function(to, from, next) {
//     console.log(to, from, next)
//     // if(to.name === 'team-members'){
//     //     next();
//     // }else{
//     //     next( {name: 'team-members', params: {teamId: 't3'} })
//     // }
// })

export default router;