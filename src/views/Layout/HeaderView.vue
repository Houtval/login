<template>
 <div style="display: flex;justify-content: space-between;align-items: center;height: 100%;">

    <i :class="!this.$store.state.isCollapse?'el-icon-s-fold':'el-icon-s-unfold'" @click="updateisCollapse" style="cursor:pointer"></i>
   <span>您好!用户:{{ username }}</span> 
    <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    <i class="el-icon-s-tools"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="usermessage">个人中心</el-dropdown-item>
    <el-dropdown-item command="close">注销</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</div>
</template>
<script>
export default {
  data(){
    return {
      username:localStorage.getItem('username')?localStorage.getItem('username'):'xxx'
    }
  },
    name: 'HeaderView',
    methods:{
      updateisCollapse(){
      this.$store.commit('updateisCollapse')
      },
      handleCommand(command) {
        if(command=='close')
        {
          localStorage.clear('username')
          this.$message({
                message: "注销成功",
                type: 'success'
                });
          this.$router.push('/login')
        }
        if(command=="usermessage")
        {
          this.$router.push('/usermessage');
        }
      }
      
      
    }
  }
</script>
<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-dropdown-link {
    cursor: pointer;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>