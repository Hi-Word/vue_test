import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView from '../views/login.vue'
import registeredView from '../views/registered.vue'
import mainView from '../views/index/main.vue'
const routes = [{
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        component: loginView
    },
    {
        path: '/registered',
        name: 'registered',
        component: registeredView
    },
    {
        path: '/main',
        name: 'main',
        component: mainView
    },
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router