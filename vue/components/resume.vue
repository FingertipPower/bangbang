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
                <div class="project">
                    <div class="project-title">
                        <div class="project-title-imgbox"><img src="http://www.fingertippower.cn/vue/src/assets/img/1.png" class="project-img"></div>
                        <span class="project-title-word">项目经历</span>
                        <hr class="left-hr">
                    </div>
                    <div class="project-body">

                        <p class="project-body-title">个人网站</p>
                        <p class="project-body-word">在2016-2017年中制作了一个个人的网站运用的技术是VUE+ci的网站架构。
                            在2016-2017年中制作了一个个人的网站运用的技术是VUE+ci的网站架构。
                            在2016-2017年中制作了一个个人的网站运用的技术是VUE+ci的网站架构。
                            在2016-2017年中制作了一个个人的网站运用的技术是VUE+ci的网站架构。
                            在2016-2017年中制作了一个个人的网站运用的技术是VUE+ci的网站架构。</p>

                        <p class="project-body-title">个人网站</p>
                        <p class="project-body-word">在2016-2017年中制作了一个个人的网站运用的技术是VUE+ci的网站架构。
                            在2016-2017年中制作了一个个人的网站运用的技术是VUE+ci的网站架构。
                            在2016-2017年中制作了一个个人的网站运用的技术是VUE+ci的网站架构。
                            在2016-2017年中制作了一个个人的网站运用的技术是VUE+ci的网站架构。
                            在2016-2017年中制作了一个个人的网站运用的技术是VUE+ci的网站架构。</p>

                    </div>
                </div>
                <div class="prize">
                    <div class="project-title">
                        <div class="project-title-imgbox"><img src="http://www.fingertippower.cn/vue/src/assets/img/1.png" class="project-img"></div>
                        <span class="project-title-word">斩获奖项</span>
                        <hr class="left-hr">
                    </div>

                    <ul class="prize-body">
                        <li class="prize-body-li">实验室科研项目</li>
                        <li class="prize-body-li">全国互联网+大赛省级奖项</li>
                        <li class="prize-body-li">全国移动创新应用比赛奖项</li>
                    </ul>
                </div>

                <div class="skill">
                    <div class="project-title">
                        <div class="project-title-imgbox"><img src="http://www.fingertippower.cn/vue/src/assets/img/1.png" class="project-img"></div>
                        <span class="project-title-word">技能标签</span>
                        <hr class="left-hr">
                    </div>
                    <div class="skill-body">
                        <ul>
                            <li class="skill-body-keyword">html5</li>
                            <li class="skill-body-keyword">css3</li>
                            <li class="skill-body-keyword">javascript</li>
                            <li class="skill-body-keyword">vue</li>
                            <li class="skill-body-keyword">webpack</li>
                            <li class="skill-body-keyword">bootstrap</li>
                            <li class="skill-body-keyword">ES6</li>
                            <li class="skill-body-keyword">php</li>
                            <li class="skill-body-keyword">ci</li>
                            <li class="skill-body-keyword">sass</li>
                            <li class="skill-body-keyword">sass</li>
                            <li class="skill-body-keyword">sass</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="resume-right">
                <img src="http://www.fingertippower.cn/vue/src/assets/img/header.png" class="resume-header">
                <p class="resume-right-job">求职意向：前端程序员</p>
                <div class="resume-box">
                    <img src="http://www.fingertippower.cn/vue/src/assets/img/phone.png" class="resume-img">
                    <span class="resume-msg">18846927659</span>
                </div>
                <div class="resume-box resume-email">
                    <img src="http://www.fingertippower.cn/vue/src/assets/img/mail.png" class="resume-img resume-email-display">
                    <span class="resume-msg">939408507@qq.com</span>
                </div>
                <div class="resume-my-box">
                    <img src="http://www.fingertippower.cn/vue/src/assets/img/msg.png" class="resume-my-img"><span class="resume-font">关于我</span>
                    <p class="resume-msg-keyword resume-font">学历：本科</p>
                    <p class="resume-msg-keyword resume-font">学校：黑龙江大学</p>
                    <p class="resume-msg-keyword resume-font">专业：网络工程</p>
                    <p class="resume-msg-keyword resume-font">户籍：黑龙江</p>
                </div>
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
        width: 80%;
        height: auto;
        margin-top: 60px;
        margin-left: 10%;
        z-index: 9;
    }
    .resume-left{
        width: 60%;
        height: 1000px;
        float: left;
        padding-left: 4%;
        padding-top: 3%;
        padding-right: 4%;
        background-color: #fafafa;
    }
    .resume-right{
        background-color: #ececec;
        width: 20%;
        height: 500px;
        float: left;
        padding-left: 5%;
        padding-right: 5%;
    }
    @media screen and (max-width: 600px){
        #resume{
            width: 100%;
            margin-left: 0;
            margin-top: 20px;
        }
        .resume-right{
            padding-left: 0;
            padding-right: 0;
            width: 32%;
        }
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
    .project{
        margin-top: 3%;
        height: auto;
        width: 100%;
        margin-bottom: 30px;
    }
    .project-img{
        width: 100%;
        height: 100%;
        margin: 0 auto;
        display: block;
        float: left;
    }
    .project-title{
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
    .project-title-imgbox{
        width: 5%;
        height: 80.3%;
        background-color: rgba(197, 51, 100, 1);
        border-radius: 20px;
        margin-top: 3px;
        float: left;
        margin-right: 10px;
    }
    .project-title-word{
        float: left;
        font-family:"Comic Sans MS","幼圆","黑体",sans-serif;
        color: rgba(98, 39, 116, 1);
        font-size: 1.2em;
        margin-right: 3%;
    }
    .left-hr{
        float: left;
        width: 70%;
        border: 2px solid #a9a9a9;
        margin-top: 18px;
    }
    @media screen and (max-width: 600px){
        .project-title .project-title-imgbox{
            width: 13%;
            height: 65%;
        }
        .project-title-word{
            font-size: .4em;
        }
        .left-hr{
            width: 47%;
        }
    }
    @media screen and (max-width: 1200px){
        .project-title-imgbox{
            width: 7.3%;
        }
    }
    .project-body{
        width: 100%;
        height: auto;
        margin-top: 10px;
    }
    .project-body-title{
        margin-top: 10px;
        font-family:"Comic Sans MS","幼圆","黑体",sans-serif;
        font-size: 1em;
        font-weight: 500;
    }
    .project-body-word{
        font-size: .9em;
    }
    @media screen and (max-width: 600px){
        .project-body-title{
            font-size: .4em;
        }
        .project-body-word{
            font-size: .3em;
        }
    }
    .prize-body{
        margin-left: 20px;
    }
    .prize-body-li{
        margin-top: 17px;
    }
    @media screen and (max-width: 600px){
        .prize-body-li{
            font-size: .4em;
        }
    }
    .skill{
        margin-top: 20px;
    }
    .skill-body-keyword{
        border: 1px solid rgba(98, 39, 116, 1);
        border-radius: 10px;
        padding: 0 4px;
        margin-right: 2%;
        margin-top: 20px;
        float: left;
        list-style: none;
    }
    @media screen and (max-width: 600px){
        .skill-body-keyword{
            font-size: .4em;
        }
    }
    .resume-header{
        width: 50%;
        height: 25%;
        display: block;
        margin: 20px auto;
    }
    @media screen and (max-width: 600px){
        .resume-header{
            height: 10%;
        }
    }
    .resume-right-job{
        font-family:"Comic Sans MS","幼圆","黑体",sans-serif;
        color: rgba(98, 39, 116, 1);
        font-size: 1.2em;
    }
    .resume-img{
        width: 17px;
        height: 17px;
        display: block;
        float: left;
        margin-top: 3px;
        margin-right: 3px;
    }
    .resume-box{
        width: auto;
        height: auto;
        margin: 0 auto;
        margin-top: 10px;
    }
    @media screen and (max-width: 600px){
        .resume-box{
            width: 95px;
        }
        .resume-right-job{
            font-size: .4em;
        }
        .resume-img {
            width: 15px;
            height: 15px;
            margin-top: 5px;
        }
        .resume-msg{
            font-size: .4em;
        }
        .resume-email{
            margin: 0;
        }
        .resume-email-display{
            display: none;
        }
        .resume-font{
            font-size: .4em;
        }
    }
    .resume-my-box{
        width: auto;
        height: auto;
        margin-top: 15px;
    }
    .resume-my-img{
        width: 20px;
        height: 20px;
        display: block;
        float: left;
        margin-right: 5px;
    }
    .resume-msg-keyword{
        margin-top: 10px;
    }
</style>