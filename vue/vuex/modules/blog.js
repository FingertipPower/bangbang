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
    //把用户点击相应博文的索引值存储起来，方便从数据库中查找相应博文的内容
    //因为涉及到用户刷新的问题，所以把索引值存储在window.name下面
    //这个属性不会因为页面的刷新而更新为空
    [types.BLOG_INDEX](state,index){
        window.name = state.data[index].todo;
    },
    //把读取出来的博文信息存储在了blogMsg这个属性下面，读取的时候直接从这里读取就可以
    [types.READ_BLOG](state,res){
        state.blogMsg = res.data;
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
        // commit(types.BLOG_INDEX,index)
        console.log(index);
        axios({
            method: 'get',
            url: 'index.php/index/readblogmsg',
            params:{
                "index":index
            }
        }).then((res)=>{
            commit(types.READ_BLOG,res);
        })
    },
    //搜索相应索引值下的博文信息，并且把博文信息存储起来，索引值存储在window.name属性下面
    readBlog({commit,state}){
        axios({
            method: 'get',
            url: 'index.php/index/readblogmsg',
            params:{
                "index":window.name
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