<template>
  <div>
    <h1>这是.vue定义的登录组件-----{{msg}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    //组件中的data必须是function
    return{
      msg:'abc'
    };
  },
  methods:{
    show(){
      console.log('调用了login.vue中的show方法');
    }
  }

};
</script> 

<style>
  
</style>