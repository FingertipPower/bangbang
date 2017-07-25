<template>
    <div id="blogMsg">
        <p id="aa">124454yhtfdbf</p>
        <button @click="doqu">读取文件</button>
    </div>
</template>

<script>
    export default{
        methods:{
            doqu:function(){
                alert(1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    #blogMsg{
        width: 90%;
        height: 500px;
        margin-left: 5%;
        background-color: rgba(202,192,193,1);
        margin-top: 70px;
        text-align: center;
    }
</style>