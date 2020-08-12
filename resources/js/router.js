import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/dashboard', component: require('./components/DashboardComponent.vue').default },
    { path: '/profile', component: require('./components/ProfileComponent.vue').default },
    { path: '/users', component: require('./components/UserComponent.vue').default }
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

export default router
