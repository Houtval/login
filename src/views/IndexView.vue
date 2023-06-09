<template>
  <div class="index">
    <el-container class="el-container">
  <el-header height="100px"><HeaderView></HeaderView></el-header>
  <el-container>
<AsideView></AsideView>
    <el-main><MainView></MainView></el-main>
  </el-container>
</el-container>
  </div>
  </template>
  
  <script>
  import HeaderView from './Layout/HeaderView.vue';
  import AsideView from './Layout/AsideView.vue';
  import MainView from './Layout/MainView.vue';
  export default {
    name: 'IndexView',
    components: { HeaderView,AsideView,MainView },
    created(){
      
       localStorage.getItem('isCollapse')?this.$store.dispatch('getisCollapse',localStorage.getItem('isCollapse')=="true"?true:false):true
      
    }
  }
  </script>

<style scoped>
.el-container
{
  height: 100%;
}
.index
{
  height: 100%;
}
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    height: 100%;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    height: 100%;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>