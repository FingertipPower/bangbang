<template>
    <div>
        <div id="resume">
            <div class="resume-left">
                <p class="resume-left-title">王涛</p>
                <p class="resume-left-label">前端程序猿</p>
                <p class="resume-left-article">
                    迄今为止，本人一共自学3年前端以及后端技术，并且对于算法有一定的研究。带领团队参加过多次全国性质的比赛，拥有完整的项目经历。
                    拥有良好的自学习惯，对于编程有无限的探知能力。能够有效的与团队成员进行沟通，增强团队协作的效率。对于项目中所遇到的问题能够
                    思考到最优的解决方案。
                </p>
            </div>
            <div class="resume-right">

            </div>
        </div>
    </div>
</template>

<script>
    export default{
        mounted:function(){

        }
    }
</script>

<style lang="scss" scoped>
    #resume{
        width: 90%;
        height: 500px;
        margin-top: 60px;
        margin-left: 5%;
    }
    .resume-left{
        background-color: #fafafa;
        width: 60%;
        height: 500px;
        float: left;
        padding-left: 4%;
        padding-top: 3%;
        padding-right: 4%;
    }
    .resume-right{
        background-color: #ececec;
        width: 32%;
        height: 500px;
        float: left;
    }
    .resume-left-title{
        font-size: 2.3em;
        font-weight: 900;
        font-family:"Comic Sans MS","幼圆","黑体",sans-serif;
        color: rgba(98, 39, 116, 1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(98, 39, 116, 1)), to(rgba(197, 51, 100, 1)));
    }
    .resume-left-label{
        font-family:"Comic Sans MS","幼圆","黑体",sans-serif;
        color: rgba(98, 39, 116, 1);
        font-size: 1.2em;
    }
    .resume-left-article{
        font-size: .9em;
    }
    @media screen and (max-width: 600px){
        .resume-left-title{
            font-size: 1.5em;
        }
        .resume-left-label{
            font-size: .4em;
        }
        .resume-left-article{
            font-size: .3em;
        }
    }
</style>