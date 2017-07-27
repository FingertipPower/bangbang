import Vue from 'vue'
import Router from 'vue-router'
import Resume from '../components/resume.vue'
import Homepage from '../components/homepage.vue'
import Blog from '../components/blog.vue'
import Algorithm from '../components/algorithm.vue'
import Assembly from '../components/assembly.vue'
import Blogmsg from '../components/blogmsg.vue'
import Algorithmmsg from '../components/algorithmmsg.vue'
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
            path: '/algorithm',
            name: 'algorithm',
            component: Algorithm
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
        },
        {
            path: '/algorithmmsg',
            name: 'algorithmmsg',
            component: Algorithmmsg
        }
    ]
})