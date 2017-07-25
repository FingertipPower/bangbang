import api from '../../fetch/api'
import * as types from '../types.js'

const state = {
    data:"",
    blogIndex:""
}

const mutations = {
    [types.GET_BLOG_DATA](state,res){
        state.data = res;
    },
    [types.BLOG_LINK](state,index){
        state.blogtodo = state.data[index].blogIndex;
    }
}

const actions = {
    getMsg({commit}){
        api.fetch('index.php/index/main').then(res=>{
            commit(types.GET_BLOG_DATA,res)
        })
    },
    openBlog({commit},index){
        commit(types.BLOG_LINK,index)
    }
}

const getters = {
    blogData(state){
        return state.data;
    }
}


export default{
    state,
    mutations,
    actions,
    getters
}