import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/pages/Home.vue'
import Resources from '/src/pages/Resources.vue'
import Typewriter from '/src/pages/Typewriter.vue'
// import Projects from '/src/pages/Projects.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    // {
    //     path: '/Projects',
    //     name: 'Projects',
    //     component: Projects,
    // },
    {
        path: '/Resources',
        name: 'Resources',
        component: Resources,
    },
    {
        path: '/Projects/Typewriter',
        name: 'Typewriter',
        component: Typewriter,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
