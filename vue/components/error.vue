<template>
    <div class="blog">
        <ul class="li-style">
            <li>
                <div class="article font">
                    <div class="vertical"></div>
                    <div class="article-float article-left-box">
                        <p>这是一个关于VUE的一个错误的解释</p>
                        <p class="article-word">同年参演抗战题材的电视剧《雪豹》[4]  。2011年，主演的电视剧《裸婚时代》在各大卫视播出；[5]  2011年-2012年连续2年获得北京大学生电影节[6-7]  最受大学生欢迎男演员奖。2012年，凭借电影《失恋33天》获得第</p>
                    </div>
                    <div class="article-float">
                        <p class="time">2017.3.4</p>
                    </div>
                </div>
            </li>

            <li>
                <div class="article font">
                    <div class="vertical"></div>
                    <div class="article-float article-left-box">
                        <p>这是一个关于VUE的一个错误的解释</p>
                        <p class="article-word">同年参演抗战题材的电视剧《雪豹》[4]  。2011年，主演的电视剧《裸婚时代》在各大卫视播出；[5]  2011年-2012年连续2年获得北京大学生电影节[6-7]  最受大学生欢迎男演员奖。2012年，凭借电影《失恋33天》获得第</p>
                    </div>
                    <div class="article-float">
                        <p class="time">2017.3.4</p>
                    </div>
                </div>
            </li>

            <li>
                <div class="article font">
                    <div class="vertical"></div>
                    <div class="article-float article-left-box">
                        <p>这是一个关于VUE的一个错误的解释</p>
                        <p class="article-word">同年参演抗战题材的电视剧《雪豹》[4]  。2011年，主演的电视剧《裸婚时代》在各大卫视播出；[5]  2011年-2012年连续2年获得北京大学生电影节[6-7]  最受大学生欢迎男演员奖。2012年，凭借电影《失恋33天》获得第</p>
                    </div>
                    <div class="article-float">
                        <p class="time">2017.3.4</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

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
        height: auto;
        margin: 50px auto;
        padding-left: 40px;
        padding-top: 30px;
    }
    .vertical{
        background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(98, 39, 116, 1)), to(rgba(197, 51, 100, 1)));
        height: inherit;
        width: 7px;
        float: left;
        margin-right: 15px;
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
            width: 80%;
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
            margin-top: 50px;
        }
        .article{
            width: 100%;
            .article-left-box{
                width: 70%;
            }
        }
    }
</style>