import Vue from 'vue'
import App from '../components/index.vue'
import router from '../router'
import store from '../vuex/store'

new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
})
