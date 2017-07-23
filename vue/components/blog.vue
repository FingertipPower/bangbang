<template>
    <div class="blog">
        <div class="vertical"></div>
        <div class="article font">
            <div class="article-float article-left-box">
                <p>{{title1}}</p>
                <p class="article-word">{{introduction1}}</p>
            </div>
            <div class="article-float">
                <p class="time">{{time1}}</p>
            </div>
        </div>

        <div class="article font">
            <div class="article-float article-left-box">
                <p>这是一个我的关于阿里云的博客</p>
                <p class="article-word">稻盛和夫撒娇的客户飞机上的匡扶汉室就看京东卡萨吵架时看到你曾经哭撒的好处就能撒德川家康很上档次到你曾经的卡水寒风似刀你吵架就是独家开发活动时间看哪合适的房间看书的年纪手机的好处就开始对你吵架可是多哈参加考试呢手机的车牛山岛进出口哈萨克觉得你吵架撒的课程</p>
            </div>
            <div class="article-float">
                <p class="time">2017.3.4</p>
            </div>
        </div>

        <div class="article font">
            <div class="article-float article-left-box">
                <p>这是一个我的关于阿里云的博客</p>
                <p class="article-word">稻盛和夫撒娇的客户飞机上的匡扶汉室就看京东卡萨吵架时看到你曾经哭撒的好处就能撒德川家康很上档次到你曾经的卡水寒风似刀你吵架就是独家开发活动时间看哪合适的房间看书的年纪手机的好处就开始对你吵架可是多哈参加考试呢手机的车牛山岛进出口哈萨克觉得你吵架撒的课程</p>
            </div>
            <div class="article-float">
                <p class="time">2017.3.4</p>
            </div>
        </div>

        <div class="article font">
            <div class="article-float article-left-box">
                <p>这是一个我的关于阿里云的博客</p>
                <p class="article-word">稻盛和夫撒娇的客户飞机上的匡扶汉室就看京东卡萨吵架时看到你曾经哭撒的好处就能撒德川家康很上档次到你曾经的卡水寒风似刀你吵架就是独家开发活动时间看哪合适的房间看书的年纪手机的好处就开始对你吵架可是多哈参加考试呢手机的车牛山岛进出口哈萨克觉得你吵架撒的课程</p>
            </div>
            <div class="article-float">
                <p class="time">2017.3.4</p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        data:function(){
            return{
                title1:"",
                introduction1:"",
                time1:""
            }
        },
        created(){
            axios.get('http://localhost/mywebsite/index.php/index/main').then((res)=>{
                this.title1 = res.data[0].title;
                this.introduction1 = res.data[0].introduction;
                this.time1 = res.data[0].time;

            })
        }
    }
</script>

<style lang="scss" scoped>
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