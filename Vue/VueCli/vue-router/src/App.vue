<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goBack">后退</button>
      <button @click="forward">前进</button>
      <button @click="gohome">返回首页</button>
    </div>
    <router-link to='/'>Home</router-link>
    <router-link to='/params/1/hhhhh'>Params</router-link>
    <router-link to='/goHome'>goHome</router-link>
    <router-link to='/goParams/34/vuvv'>goParams</router-link>
    <router-link to='/hi1'>--hi1</router-link>
    <router-link to='/jspang'>--jspang</router-link>
    
    
    <transition name='fade' mode="out-in">
      <router-view/>

    </transition>
 
 
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      // 后退
      this.$router.go(-1);
    },
    forward(){
      // 前进
      this.$router.go(1);
    },
    gohome(){
      // 想返回到哪里就填路径
      this.$router.push('/');
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
