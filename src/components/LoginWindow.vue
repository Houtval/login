<template>
  <div class="loginWindow">
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>登录</span>
  </div>
  <div class="login">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input v-model="ruleForm.password" show-password></el-input>
  </el-form-item>
  <el-form-item>
    <div class="button">
      <el-button type="primary" @click="register">注册</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </div>
  </el-form-item>
 </el-form>
  </div>
</el-card>
  </div>
</template>

<script>
import {getLogin} from '../api/user.js'
export default {
  data(){
    return {
      ruleForm: {
          name: '',
          password:''
        },
        rules: {
        name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        }
    }
  },
  name: 'LoginWindow',
  props: {

  },
  methods:{
    register(){
      this.$router.push('register')
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push('index');
          let json={
            "username":this.ruleForm.name,
            "password":this.ruleForm.password
          }
          getLogin(JSON.stringify(json)).then(function(res){
            if(res.data.code=="2000")
            {
              this.$message({
              message: "登录成功",
              type: 'success'
              });

              localStorage.setItem("username",this.ruleForm.name)
            }
            else{
              this.$message({
              message: res.data.message,
              type: 'error'
              });
            }
          }.bind(this))
          } else {
            
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
}
</script>


<style scoped>
.box-card{
  width: 500px;
}
.button{
  display: flex;
  justify-content: space-between;
}
</style>
