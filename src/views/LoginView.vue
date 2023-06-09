<template>
    <div class="LoginView">
    <div class="LoginWindow">
     <LoginWindow></LoginWindow>
    </div>
    </div>
</template>
  
  <script>
import LoginWindow from '@/components/LoginWindow.vue';
  export default {
    name: "LoginView",
    components: { LoginWindow }
}
  </script>

<style scoped>
.LoginWindow
{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
  