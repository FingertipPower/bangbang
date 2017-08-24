<template>
    <div id="blogMsg">
        <p v-html="blogMsg"></p>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default{
        data:function(){
            return{

            }
        },
        computed:mapState({
            blogMsg: function(state){
                if(state.blog.blogMsg == ""){
                    return window.name;
                }else{
                    return state.blog.blogMsg;
                }
            }
        })
    }
</script>

<style lang="scss" scoped>
    #blogMsg{
        width: 90%;
        height: 500px;
        margin-left: 5%;
        margin-top: 70px;
        text-align: left;
        padding-left: 80px;
    }
    @media screen and (max-width: 600px){
        #blogMsg{
            margin-left: 0px;
            padding-left: 5%;
        }
    }
</style>