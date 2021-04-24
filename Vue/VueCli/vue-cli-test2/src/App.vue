<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <!-- 导航 -->
      <router-link to='/'>首页</router-link>
      <router-link to='/Hi'>Hi页面</router-link>
      <router-link to='/love'>我的心</router-link>
      <!-- 我的理解：路径用name代替了 -->
      <router-link :to='{name:"hi1",params:{username:"jspang"}}'>--hi页面1</router-link>
      <router-link :to='{name:"hi2"}'>-hi页面2</router-link>
      </div>
      <p>{{$route.name}}</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
