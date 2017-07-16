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

                <li class="assembly-li">
                    <div class="face-box">
                        <img src="../src/assets/img/face.png" class="face">
                        <div class="face-left-eye perplex-eye-expression"></div>
                        <div class="face-right-eye perplex-eye-expression"></div>
                        <div class="face-left-eyelid perplex-eyelid-expression"></div>
                        <div class="face-right-eyelid perplex-eyelid-expression"></div>
                    </div>
                    <p>这是一个XXX组件</p>
                </li>

                <li class="assembly-li">
                    <div class="face-box">
                        <img src="../src/assets/img/face.png" class="face">
                        <div class="face-left-eye thoughtful-left-expression"></div>
                        <div class="face-right-eye thoughtful-right-expression"></div>
                    </div>
                    <p>这是一个XXX组件</p>
                </li>

                <li class="assembly-li">
                    <div class="face-box">
                        <img src="../src/assets/img/face.png" class="face">
                        <div class="face-left-eye sad-eye-expression"></div>
                        <div class="face-right-eye sad-eye-expression"></div>
                        <div class="face-left-eyelid sad-eyelid-expression"></div>
                        <div class="face-right-eyelid sad-eyelid-expression"></div>
                    </div>
                    <p>这是一个XXX组件</p>
                </li>

                <li class="assembly-li">
                    <div class="face-box">
                        <img src="../src/assets/img/face.png" class="face">
                        <div class="face-left-eye focussed-eye-expression"></div>
                        <div class="face-right-eye focussed-eye-expression"></div>
                    </div>
                    <p>这是一个XXX组件</p>
                </li>

                <li class="assembly-li">
                    <div class="face-box">
                        <img src="../src/assets/img/face.png" class="face">
                        <div class="face-left-eye angry-eye-left-expression"></div>
                        <div class="face-right-eye angry-eye-right-expression"></div>
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
            margin-left: 16px;
            margin-top: -65px;
        }
        .face-right-eyelid{
            height: 15px;
            width: 15px;
            float: left;
            background-color: rgba(255, 86, 107, 1);
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
        .perplex-eye-expression{
            animation: perplex-eye 5s;
            animation-delay: 2s;
            animation-iteration-count: infinite;
        }
        .perplex-eyelid-expression{
            animation: perplex-eyelid 5s;
            animation-delay: 2s;
            animation-iteration-count: infinite;
        }
        .thoughtful-left-expression{
            animation: thoughtful-left 5s;
            animation-delay: 2s;
            animation-iteration-count: infinite;
        }
        .thoughtful-right-expression{
            animation: thoughtful-right 5s;
            animation-delay: 2s;
            animation-iteration-count: infinite;
        }
        .sad-eye-expression{
            animation: sad-eye 5s;
            animation-delay: 2s;
            animation-iteration-count: infinite;
        }
        .sad-eyelid-expression{
            animation: sad-eyelid 5s;
            animation-delay: 2s;
            animation-iteration-count: infinite;
        }
        .focussed-eye-expression{
            animation: focussed 5s;
            animation-delay: 2s;
            animation-iteration-count: infinite;
        }
        .angry-eye-left-expression{
            animation: angry-left 7s;
            animation-delay: 2s;
            animation-iteration-count: infinite;
        }
        .angry-eye-right-expression{
            animation: angry-right 7s;
            animation-delay: 2s;
            animation-iteration-count: infinite;
        }

        //这里是css3的动画表情，实现的是一个normal表情，10秒完成，眨眼睛动画。
        @keyframes normal {
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

        /* 用css3实现的joyful表情，因为此表情涉及到上面和下面的遮盖，
                                * 发现用css3无法单独操作（不配合js）display 属性，并且本人不想画
                                * 两个颜色快去遮盖，因此折中想了一个办法，将一个颜色块先移动到下面遮盖，
                                * 然后迅速移动到上面遮盖，但因为有两只眼睛，移动的距离不同，所以动画在
                                * 写的时候分左右眼写的。
                                */
        @keyframes joyful-left{
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


        /*这里完成了perplex表情，此表情要求眼睛与眼皮一起动，
                                *因此设定了两个动画，一个是眼睛动作的，另一个是眼皮的动作。
                                */
        @keyframes perplex-eye{
            0% {margin-top: -50px;}
            10%,40% {margin-top: -30px;}
            41%,100% {margin-top: -50px;}
        }
        @keyframes perplex-eyelid{
            0% {margin-top: -65px;}
            11%,40% {margin-top: -40px;}
            41%,100% {margin-top: -65px;}
        }

        /*此处完成了thoughtful的表情，没有用遮挡实现眼部的变化，而是使用了border-radius属性，
        *用属性画出一个半圆，再进行移动，因为涉及到两只眼睛不同的magin-left因此两只眼睛分别写的代码。
        */
        @keyframes thoughtful-left{
            0% {margin-top: -50px;width: 15px; height: 10px; border-radius: 0 0 7.5px 7.5px;}
            10%,25% {margin-top: -30px; margin-left: 12px;width: 15px; height: 10px; border-radius: 0 0 7.5px 7.5px;}
            30%,45% {margin-top: -53px; margin-left: 12px;width: 15px; height: 10px; border-radius: 0 0 7.5px 7.5px;}
            50%,65% {margin-top: -40px; margin-left: 22px;width: 15px; height: 10px; border-radius: 0 0 7.5px 7.5px;}
            66% {margin-top: -50px;margin-left: 16px; height: 15px; width: 15px; border-radius: 20px;}
            80%,100% {margin-top: -50px;}
        }
        @keyframes thoughtful-right{
            0% {margin-top: -50px;width: 15px; height: 10px; border-radius: 0 0 7.5px 7.5px;}
            10%,25% {margin-top: -30px; margin-left: 40px;width: 15px; height: 10px; border-radius: 0 0 7.5px 7.5px;}
            30%,45% {margin-top: -53px; margin-left: 40px;width: 15px; height: 10px; border-radius: 0 0 7.5px 7.5px;}
            50%,65% {margin-top: -40px; margin-left: 50px;width: 15px; height: 10px; border-radius: 0 0 7.5px 7.5px;}
            66% {margin-top: -50px;margin-left: 44px; height: 15px; width: 15px; border-radius: 20px;}
            80%,100% {margin-top: -50px;}
        }

        /*sad表情完成，应用眼睛移动以及眼皮遮挡进行实现。
         *
         */
        @keyframes sad-eye{
            0% {margin-top: -50px;}
            10%,77% {margin-top: -30px;}
            78%,100% {margin-top: -50px;}
        }
        @keyframes sad-eyelid{
            0% {margin-top: -65px;}
            11%,40% {margin-top: -40px;}
            45% {margin-top: -30px;}
            46%,56% {margin-top: -40px;}
            61% {margin-top: -30px;}
            62%,77% {margin-top: -40px;}
            78%,100% {margin-top: -65px;}
        }


        /*foussed表情完成，只是进行眼睛的简单移动以及变形即可。
         *
        */
        @keyframes focussed {
            0% {margin-top: -50px}
            10%,40% {margin-top: -60px; width: 15px; height: 10px; border-radius: 0 0 7.5px 7.5px;}
            45% {margin-top: -50px; width: 15px; height: 15px; border-radius: 20px}
            100% {margin-top: -50px}
        }

        /*angry表情完成，利用了眼睛的变化，以及css3旋转图像，
         *因为两只眼睛的旋转角度不同，因此用两段代码进行实现。
         */
        @keyframes angry-left {
            0% {margin-top: -50px}
            10%,40% {margin-top: -35px;width: 15px; height: 10px; border-radius: 0 0 7.5px 7.5px;transform:rotate(8deg);}
            44% {margin-top: -50px;width: 15px; height: 15px; border-radius: 20px;}
            100% {margin-top: -50px;}
        }
        @keyframes angry-right {
            0% {margin-top: -50px}
            10%,40% {margin-top: -35px;width: 15px; height: 10px; border-radius: 0 0 7.5px 7.5px;transform:rotate(-8deg);}
            44% {margin-top: -50px;width: 15px; height: 15px; border-radius: 20px;}
            100% {margin-top: -50px;}
        }
    }

    @media screen and (max-width: 600px){

    }
</style>