import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'
import algorithm from './modules/algorithm'

Vue.use(Vuex);
//这里并没有把所有的vuex里面的内容写在一起，因为那样显得很乱，而是把不同页面的放在了一起最后暴露出去
export default new Vuex.Store({
    modules:{
        blog,
        algorithm
    }
})
