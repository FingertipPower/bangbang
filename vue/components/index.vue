<template>
  <div>
    <index-head></index-head>
    <router-view></router-view>
  </div>
</template>

<script>
  import head from './head.vue'
  export default{
      components:{
          'indexHead':head
      }
  }
</script>

<style lang="scss" scoped>

</style>
