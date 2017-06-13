<template>
    <div class="head">
        <img src="../src/assets/coder.jpg" alt="logo" class="logo">
        <ul class="head-ul">
            <li>首页</li>
            <li>简历</li>
            <li>GitHub</li>
            <li>博客</li>
            <li>Error</li>
        </ul>
        <span class="coco">这是一个自适应的网站哦！缩小屏幕再试试</span>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .head{
        height: 40px;
        width: 100%;
        padding-left: 5%;
        padding-top: 10px;
    }
    .logo{
        height: 27px;
        max-width: 100px;
        float: left;
    }
    .head-ul{
        list-style: none;
        margin-left: 10%;
        margin-top: 3px;
    }
    .head-ul li{
        float: left;
        margin-left: 8%;
    }
    .coco{
        margin-left: 10%;
    }

    @media screen and (max-width: 1130px){
        .coco{
            display: none;
        }
        .head-ul li{
            margin-left: 10%;
        }
    }
    @media screen and (max-width: 600px){
        .coco{
            display: none;
        }
        .head-ul li{
            margin-left: 3%;
        }
    }
    @media screen and (max-width: 320px){
        .coco{
            display: none;
        }
        .head-ul li{
            margin-left: 1%;
        }
    }
</style>
