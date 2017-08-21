<template>
    <div id="blogMsg">
        <p v-html="blogMsg"></p>
    </div>
</template>

<script>
    import { mapActions,mapGetters} from 'vuex'
    export default{
        data:function(){
            return{

            }
        },
        created(){
//            return this.$store.dispatch('readBlog')
//            this.readBlog();
        },
        computed:mapGetters(['blogMsg']),
//        methods:mapActions(['readBlog'])
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