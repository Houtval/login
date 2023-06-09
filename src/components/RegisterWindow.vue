<template>
    <div class="registerwindow">
      <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>注册</span>
  
    </div>
    <div class="login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" show-password></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="confirmpassword">
      <el-input v-model="ruleForm.confirmpassword" show-password></el-input>
    </el-form-item>
    <el-form-item>
      <div class="button">
        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
        <el-button type="primary" @click="login">登录</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </div>
    </el-form-item>
   </el-form>
    </div>
  </el-card>
    </div>
  </template>
  
  <script>
  import {getRegister} from '../api/user.js'
  export default {
    data(){
      var  confirmpasswordvalidator= (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
            name: '',
            password:'',
            confirmpassword:''
          },
          rules: {
          name: [
              { required: true, message: '请输入用户名', trigger: 'blur' },
            ],
            password: [
              { required: true, message: '请输入密码', trigger: 'blur' },
            ],
            confirmpassword:[
            { validator: confirmpasswordvalidator, trigger: 'blur' }
            ]
          }
      }
    },
    name: 'RegisterWindow',
    props: {
  
    },
    methods:{
      login(){
        this.$router.push('login')
      },
      submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              let json={
              "username":this.ruleForm.name,
              "password":this.ruleForm.password
            }
            getRegister(JSON.stringify(json)).then(function(res){
              if(res.data.code=="2000")
              {
                this.$message({
                message: "注册成功"+",用户名:"+this.ruleForm.name+",密码:"+this.ruleForm.password,
                type: 'success'
                });
                this.$router.push('login');
              }
              else{
                this.$message({
                message: res.data.message,
                type: 'error'
                });
              }
            }.bind(this))
            } else {
              console.log('error submit!!');
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
  