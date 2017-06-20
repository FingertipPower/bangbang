import Vue from 'vue'
import App from '../components/index.vue'
import router from '../router'
new Vue({
        el: '#app',
        router,
        render: h => h(App)
})
