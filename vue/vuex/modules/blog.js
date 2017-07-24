import api from '../../fetch/api'

const state = {
    title1:"",
    introduction1:"",
    time1: ""
}

const mutations = {
    getMsg(state){
        api.select().then(res=>{
            console.log(res[0]);
            state.title1 = res[0].title;
            state.introduction1 = res[0].introduction;
            state.time1 = res[0].time;
        })
    }
}

const actions = {
    getMsg({ commit }){
        commit('getMsg')
    }
}
export default{
    state,
    mutations,
    actions
}