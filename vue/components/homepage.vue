<template>
    <div id="homepage-word">
        <h1 class="title">I am a Web Coder</h1>
        <div class="word">
            <p>{{oldMsg}}<span class="cursor" v-show="toFlicker">|</span></p>
        </div>
    </div>
</template>

<script>
    export default{
        data:function(){
            return{
                oldMsg:"",
                newMsg:"欢迎来到我的个人网站，此网站是用vue+ci创建的，并且它还是自适应的哦！！！",
                msgLength:1,
                toFlicker:true
            }
        },
        methods:{
            typing(){
                this.oldMsg = this.newMsg.slice(0,this.msgLength++);
            },
            flicker(){
                this.toFlicker = !this.toFlicker;
            }
        },
        mounted:function(){
            setInterval(this.typing,320);
            setInterval(this.flicker,585);
        }
    }
</script>

<style lang="scss" scoped>
    .cursor{
        background-color: rgba(98, 39, 116, 1);
        color: rgba(98, 39, 116, 1);
        height: 10px;
        width: 4px;
        margin-left: 2px;
    }
    .title{
        text-align: center;
        font-family: 'Arial';
        margin-top: 10%;
        color: rgba(98, 39, 116, 1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(98, 39, 116, 1)), to(rgba(197, 51, 100, 1)));
    }
    h1 {
        font-size: 2.5em;
    }
    .word p{
        font-family: Helvetica, Arial, "华文细黑", "微软雅黑";
        font-weight: 900;
        margin-left: 5%;
        margin-top: 20%;
        font-size: 1.1em;
        color: rgba(98, 39, 116, 1);
    }
    @media screen and (max-width: 600px){
        .word p{
            margin-top: 50%;
        }
    }
</style>