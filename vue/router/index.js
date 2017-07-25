import Vue from 'vue'
import Router from 'vue-router'
import Resume from '../components/resume.vue'
import Homepage from '../components/homepage.vue'
import Blog from '../components/blog.vue'
import Error from '../components/error.vue'
import Assembly from '../components/assembly.vue'
import Blogmsg from '../components/blogmsg.vue'
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
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/error',
            name: 'error',
            component: Error
        },
        {
            path: '/assembly',
            name: 'assembly',
            component: Assembly
        },
        {
            path: '/blogmsg',
            name: 'blogmsg',
            component: Blogmsg
        }
    ]
})