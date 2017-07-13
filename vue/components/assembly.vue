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
                        <div class="face-left-eyelid"></div>
                        <div class="face-right-eyelid"></div>
                    </div>
                    <p>这是一个XXX组件</p>
                </li>

                <li class="assembly-li">
                    <div class="face-box">
                        <img src="../src/assets/img/face.png" class="face">
                        <div class="face-left-eye"></div>
                        <div class="face-right-eye"></div>
                        <div class="face-left-eyelid"></div>
                        <div class="face-right-eyelid"></div>
                    </div>
                    <p>这是一个XXX组件</p>
                </li>

                <li class="assembly-li">
                    <div class="face-box">
                        <img src="../src/assets/img/face.png" class="face">
                        <div class="face-left-eye"></div>
                        <div class="face-right-eye"></div>
                        <div class="face-left-eyelid"></div>
                        <div class="face-right-eyelid"></div>
                    </div>
                    <p>这是一个XXX组件</p>
                </li>

                <li class="assembly-li">
                    <div class="face-box">
                        <img src="../src/assets/img/face.png" class="face">
                        <div class="face-left-eye"></div>
                        <div class="face-right-eye"></div>
                        <div class="face-left-eyelid"></div>
                        <div class="face-right-eyelid"></div>
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
            animation: normal 10s;
            animation-delay: 2s;
            animation-iteration-count: infinite;
            height: 15px;
            width: 15px;
            float: left;
            background-color: rgba(255, 86, 107, 1);
            margin-left: 16px;
            margin-top: -65px;
        }
        .face-right-eyelid{
            animation: normal 10s;
            animation-delay: 2s;
            animation-iteration-count: infinite;
            height: 15px;
            width: 15px;
            float: left;
            background-color: rgba(255, 86, 107, 1);
            margin-left: 44px;
            margin-top: -65px;
        }
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
    }

    @media screen and (max-width: 600px){

    }
</style>