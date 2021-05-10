<template>
  <div class="home">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '../common/components/tab/Tabbar';

export default {
  name: 'Home',
  components: {
    Tabbar,
  },
};
</script>
<style lang="less" scoped>
  .home {
    position: relative;
  }
</style>