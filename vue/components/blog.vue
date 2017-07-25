<template>
    <div class="blog">
        <div class="vertical"></div>
        <ul class="li-style">
            <li v-for="(val, index) in blogData">
                <div class="article font">
                    <div class="article-float article-left-box">
                        <p @click="openBlog(index)"><router-link :to="'/blogmsg'">{{val.title}}</router-link></p>
                        <p class="article-word">{{val.introduction}}</p>
                    </div>
                    <div class="article-float">
                        <p class="time">{{val.time}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapMutations,mapActions,mapGetters} from 'vuex'
    export default{
        data:function(){
            return{

            }
        },
        computed:mapGetters(['blogData']),
        created(){
            return this.$store.dispatch('getMsg')
        },
        methods:mapActions(['openBlog'])
    }
</script>

<style lang="scss" scoped>
    a{
        text-decoration: none;
        color: #000000;
    }
    .li-style{
        list-style: none;
    }
    .blog{
        width: 80%;
        height: 800px;
        margin: 50px auto;
        padding-left: 40px;
        padding-top: 30px;
    }
    .vertical{
        background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(98, 39, 116, 1)), to(rgba(197, 51, 100, 1)));
        height: 700px;
        width: 7px;
        float: left;
    }
    .article{
        width: 90%;
        height: 150px;
        margin-left: 2%;
        margin-top: 20px;
        /*background-color: aqua;*/
        .article-float{
            float: left;
            .article-word{
                font-family:"Comic Sans MS","幼圆","黑体",sans-serif;
                color: rgba(202,192,193,1);
                margin-top: 20px;
            }
        }
        .article-left-box{
            width: 90%;
        }
        .time{
            background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(98, 39, 116, 1)), to(rgba(197, 51, 100, 1)));
            width: 90px;
            height: 40px;
            margin-left: 15%;
            line-height: 40px;
            text-align: center;
            color: azure;
        }
    }
    @media screen and (max-width: 600px){
        .font{
            font-size: .4em;
        }
        .blog{
            margin: 0;
            padding: 0;
            width: 100%;
        }
        .article{
            width: 100%;
            .article-left-box{
                width: 70%;
            }
        }
    }
</style>