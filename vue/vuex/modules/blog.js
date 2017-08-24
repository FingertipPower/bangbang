import axios from '../../fetch/api'
import * as types from '../types.js'
/*
* 此页面是blog页面的vuex配置
* */
const state = {
    data:"",
    blogMsg:""
}

const mutations = {
    //获得数据库中所有的博文信息
    [types.GET_BLOG_DATA](state,res){
        state.data = res.data;
    },
    //把读取出来的博文信息存储在了blogMsg这个属性下面，读取的时候直接从这里读取就可以
    //并且将读取的数据放入window.name下面，以便刷新的时候直接从window.name中获取数据
    //防止刷新后vuex中数据消失
    [types.READ_BLOG](state,res){
        state.blogMsg = res.data;
        window.name = res.data;
    }
}

const actions = {
    //进行一个axios请求，请求到数据库中的博文信息并且存储起来
    getBlogMsg({commit}){
        axios({
            method: 'post',
            url: 'index.php/index/main'
        }).then((res)=>{
            commit(types.GET_BLOG_DATA,res)
        })
    },
    //用于将用户点击的博文索引存储起来，方便从数据库中读取相应博文的信息
    openBlog({commit},index){
        axios({
            method: 'get',
            url: 'index.php/index/readblogmsg',
            params:{
                "index":index
            }
        }).then((res)=>{
            commit(types.READ_BLOG,res);
        })
    }
}
const getters = {
    //把需要页面渲染的数据抛出去
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