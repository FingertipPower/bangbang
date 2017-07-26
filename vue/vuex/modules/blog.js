import axios from '../../fetch/api'
import * as types from '../types.js'

const state = {
    data:"",
    blogIndex:"",
    blogMsg:""
}

const mutations = {
    [types.GET_BLOG_DATA](state,res){
        state.data = res.data;
    },
    [types.BLOG_INDEX](state,index){
        state.blogIndex = state.data[index].todo;
    },
    [types.READ_BLOG](state,res){
        state.blogMsg = res.data;
        console.log(state.blogMsg);
    }
}

const actions = {
    getMsg({commit}){
        axios({
            method: 'post',
            url: 'index.php/index/main'
        }).then((res)=>{
            commit(types.GET_BLOG_DATA,res)
        })
    },
    openBlog({commit,state},index){
        commit(types.BLOG_INDEX,index),
        axios({
            method: 'get',
            url: 'index.php/index/readblogmsg',
            params:{
                "index":state.blogIndex
            }
        }).then((res)=>{
            commit(types.READ_BLOG,res)
        })
    }
}

const getters = {
    blogData(state){
        return state.data;
    },
    blogMsg(state){
        return state.blogMsg;
    }
}


export default{
    state,
    mutations,
    actions,
    getters
}