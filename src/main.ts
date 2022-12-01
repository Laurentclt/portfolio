import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/ViewHome.vue'
import Curriculum from './views/ViewCurriculum.vue'
import Contact from './views/ViewContact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', redirect: '/home'},
        {path: '/home', name: 'Home', component: Home},
        {path: '/cv', name: 'Curriculum', component: Curriculum},
        {path: '/contact', name: 'contact', component: Contact},
    ]

})

createApp(App).use(router).mount('#app')
