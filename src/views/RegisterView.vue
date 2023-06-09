<template>
    <div class="RegisterView">
    <div class="RegisterWindow">
    <RegisterWindow></RegisterWindow>
    </div>
    </div>
</template>
  
  <script>
  import RegisterWindow from '@/components/RegisterWindow.vue';
  export default {
    name: "RegisterView",
    components: { RegisterWindow }
}
  </script>

<style scoped>
.RegisterWindow
{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
  