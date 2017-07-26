<template>
    <div id="blogMsg">
        <p id="aa" v-html="blogMsg"></p>
    </div>
</template>

<script>
    import { mapActions,mapGetters} from 'vuex'
    export default{
        data:function(){
            return{

            }
        },
        computed:mapGetters(['blogMsg'])
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
</style>