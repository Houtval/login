<template>
   <el-aside :width="this.$store.state.isCollapse?'64px':'250px'" style="transition: all 1s;">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="this.$store.state.isCollapse"
      background-color="#D3DCE6"
      router
      >

      <el-menu-item index="one">
        <i class="el-icon-setting"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-menu-item index="two">
        <i class="el-icon-setting"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>


      <el-menu-item index="three">
        <i class="el-icon-setting"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>

      <el-menu-item index="four">
        <i class="el-icon-setting"></i>
        <span slot="title">库存管理</span>
      </el-menu-item>

    </el-menu>
   </el-aside>
</template>
<script>
export default {
    name: 'AsideView',
    data(){
     
      return {
        
      }
    },
    mounted() {
      
    },
  }
</script>
<style scoped>
::v-deep .el-menu{
  border-right: none;
}
</style>