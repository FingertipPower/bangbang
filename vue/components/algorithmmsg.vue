<template>
    <div id="algorithmmsg">
        <p v-html="algorithmMsg"></p>
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
            algorithmMsg:function(state){
                if(state.algorithm.algorithmMsg == ""){
                    return window.name;
                }else{
                    return state.algorithm.algorithmMsg;
                }
            }
        })
    }
</script>

<style lang="scss" scoped>
    #algorithmmsg{
        width: 90%;
        margin-left: 5%;
        margin-top: 70px;
        height: 800px;
        padding-left: 80px;
    }
    @media screen and (max-width: 600px){
        #algorithmmsg{
            margin-left: 0px;
            padding-left: 5%;
        }
    }
</style>