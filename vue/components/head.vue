<template>
    <div class="head">
        <img src="../src/assets/img/coder.jpg" alt="logo" class="logo">
        <ul class="head-ul">
            <li @click="foundCanvas"><router-link :to="'/homepage'">首页</router-link></li>
            <li><router-link :to="'/resume'">简历</router-link></li>
            <li>GitHub</li>
            <li>博客</li>
            <li>Error</li>
            <li>组件</li>
        </ul>
        <hr class="head-hr">
    </div>
</template>

<script>
    export default{
        methods:{
            foundCanvas(){
                var canvas = document.createElement("canvas");
                canvas.className = "canvas";
                canvas.setAttribute("id","canvas");
                document.body.appendChild(canvas);
                var Ajs = document.createElement("script");
                Ajs.src = "../src/assets/js/canvas.js";
                document.body.appendChild(Ajs);
            }
        }
    }
</script>

<style lang="scss" scoped>
    a{text-decoration: none}
    .head{
        height: 27px;
        width: 90%;
        margin-left: 5%;
        padding-top: 10px;
    }
    .logo{
        height: 30px;
        max-width: 15%;
        float: left;
        margin-left: 4%;
    }
    .head-ul{
        list-style: none;
        margin-left: 19%;
        height: 27px;
        width: 85%;
    }
    .head-ul li{
        height: 27px;
        width: 14%;
        float: left;
        font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
        line-height: 27px;
        text-align: center;
    }
    .coco{
        position: absolute;
        top: 15px;
        left: 74%;
    }
    .head-hr{
        width: 100%;
        margin-top: 6px;
    }
    @media screen and (max-width: 1130px){
        .coco{
            display: none;
        }
        .logo{
            height: 30px;
            max-width: 20%;
            float: left;
            margin-left: 1%;
        }
    }
    @media screen and (max-width: 600px){
        .coco{
            display: none;
        }
        .logo{
            height: 30px;
            max-width: 20%;
            float: left;
            margin-left: 1%;
        }
        .head{
            width: 92%;
        }
    }
    @media screen and (max-width: 320px){
        .coco{
            display: none;
        }
        .logo{
            height: 30px;
            max-width: 20%;
            float: left;
            margin-left: 1%;
        }
    }
</style>
