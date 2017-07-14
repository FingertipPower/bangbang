<template>
    <div class="assembly">
        <p class="assembly-title">这里是组件的样式库</p>
        <div class="assembly-box">
            <ul class="assembly-ul">
                <li class="assembly-li">
                    <div class="face-box">
                        <img src="../src/assets/img/face.png" class="face">
                        <div class="face-left-eye"></div>
                        <div class="face-right-eye"></div>
                        <div class="face-left-eyelid normal-expression"></div>
                        <div class="face-right-eyelid normal-expression"></div>
                    </div>
                    <p>这是一个XXX组件</p>
                </li>

                <li class="assembly-li">
                    <div class="face-box">
                        <img src="../src/assets/img/face.png" class="face">
                        <div class="face-left-eye"></div>
                        <div class="face-right-eye"></div>
                        <div class="face-left-eyelid joyful-expression-left"></div>
                        <div class="face-right-eyelid joyful-expression-right"></div>
                    </div>
                    <p>这是一个XXX组件</p>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .assembly{
        width: 90%;
        height: 900px;
        /*background-color: azure;*/
        margin-left: 5%;
        margin-top: 50px;
        .assembly-title{
            color: rgba(98, 39, 116, 1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(98, 39, 116, 1)), to(rgba(197, 51, 100, 1)));
            text-align: center;
            font-size: 1.2em;
        }
        .assembly-box{
            width: 100%;
            height: 500px;
            margin-top: 30px;
            .assembly-li{
                list-style: none;
                width: 23%;
                height: auto;
                float: left;
                border: 1px solid rgba(197, 51, 100, 1);
                margin-left: 1.6%;
                margin-bottom: 30px;
                text-align: center;
                padding-bottom: 10px;
            }
            @media screen and (max-width: 600px){
                .assembly-li{
                    width: 100%;
                }
            }
        }
    }
    .face-box{
        width: 76px;
        height: 74px;
        margin: 30px auto;
        .face{
            float: left;
        }
        .face-left-eye{
            height: 15px;
            width: 15px;
            background-color: #fff;
            float: left;
            margin-top: -50px;
            margin-left: 16px;
            border-radius: 20px;
        }
        .face-right-eye{
            height: 15px;
            width: 15px;
            background-color: #fff;
            float: left;
            margin-top: -50px;
            margin-left: 44px;
            border-radius: 20px;
        }
        .face-left-eyelid{
            height: 15px;
            width: 15px;
            float: left;
            background-color: rgba(255, 86, 107, 1);
            /*background-color: aqua;*/
            margin-left: 16px;
            margin-top: -65px;
        }
        .face-right-eyelid{
            height: 15px;
            width: 15px;
            float: left;
            background-color: rgba(255, 86, 107, 1);
            /*background-color: aqua;*/
            margin-left: 44px;
            margin-top: -65px;
        }
        .normal-expression{
            animation: normal 10s;
            animation-delay: 2s;
            animation-iteration-count: infinite;
        }
        .joyful-expression-left{
            animation: joyful-left 10s;
            animation-delay: 2s;
            animation-iteration-count: infinite;
        }
        .joyful-expression-right{
            animation: joyful-right 10s;
            animation-delay: 2s;
            animation-iteration-count: infinite;
        }
        @keyframes normal {//这里是css3的动画表情，实现的是一个normal表情，10秒完成，眨眼睛动画。
            0% {margin-top: -65px;}
            2% {margin-top: -50px;}
            3%,30% {margin-top: -65px;}
            31% {margin-top: -50px;}
            32% {margin-top: -65px;}
            33%,38% {margin-top: -65px;}
            38.1% {margin-top: -50px;}
            40.1% {margin-top: -65px;}
            41%,100% {margin-top: -65px;}
        }
        @keyframes joyful-left{/* 用css3实现的joyful表情，因为此表情涉及到上面和下面的遮盖，
                                * 发现用css3无法单独操作（不配合js）display 属性，并且本人不想画
                                * 两个颜色快去遮盖，因此折中想了一个办法，将一个颜色块先移动到下面遮盖，
                                * 然后迅速移动到上面遮盖，但因为有两只眼睛，移动的距离不同，所以动画在
                                * 写的时候分左右眼写的。
                                */
            0%,0.1% {width: 1px;height: 1px;margin-left: 12px;margin-top: -30px;}
            0.2%,0.3% {width: 15px;height: 15px;margin-left:16px;margin-top: -30px;}
            1% {width: 15px;height: 15px;margin-left:16px;margin-top: -30px;}
            4%,20% {width: 15px;height: 15px;margin-left:16px;margin-top: -38px;}
            20.1% {width: 1px;height: 1px;margin-left: 12px;margin-top: -65px;}
            20.2%,40% {width: 15px;height: 15px;margin-left: 16px;margin-top: -65px;}
            43% {margin-top: -50px;}
            44%,54% {margin-top: -65px;}
            55% {margin-top: -50px;}
            56%,100% {margin-top: -65px;}
        }
        @keyframes joyful-right{
            0%,0.1% {width: 1px;height: 1px;margin-left: 40px;margin-top: -30px;}
            0.2%,0.3% {width: 15px;height: 15px;margin-left:44px;margin-top: -30px;}
            1% {width: 15px;height: 15px;margin-left:44px;margin-top: -30px;}
            4%,20% {width: 15px;height: 15px;margin-left:44px;margin-top: -38px;}
            20.1% {width: 1px;height: 1px;margin-left: 40px;margin-top: -65px;}
            20.2%,40% {width: 15px;height: 15px;margin-left: 44px;margin-top: -65px;}
            43% {margin-top: -50px;}
            44%,54% {margin-top: -65px;}
            55% {margin-top: -50px;}
            56%,100% {margin-top: -65px;}
        }
    }

    @media screen and (max-width: 600px){

    }
</style>