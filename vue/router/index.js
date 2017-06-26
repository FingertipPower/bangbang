import Vue from 'vue'
import Router from 'vue-router'
import Resume from '../components/resume.vue'
import Homepage from '../components/homepage.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/resume',
            name: 'resume',
            component: Resume
        },
        {
            path: '/',
            name: 'homepage',
            component: Homepage
        },
        {
            path: '/homepage',
            name: 'homepage',
            component: Homepage
        }
    ]
})