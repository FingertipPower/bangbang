import Vue from 'vue'
import Router from 'vue-router'
import Resume from '../components/resume.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/resume',
            name: 'resume',
            component: Resume
        }
    ]
})