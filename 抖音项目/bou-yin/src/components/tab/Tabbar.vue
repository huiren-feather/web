<!-- <template>
    <div class="tab-bar">
      <div class="item" @click="changeTab(0)">
        <router-link to="/index" tag="span" :class="tabIndex === 0 ? 'active':''">首页</router-link>
      </div>
      <div class="item" @click="changeTab(1)">
        <router-link to="/follow" tag="span" :class="tabIndex === 1 ? 'active':''">沈阳</router-link>
      </div>
      <div class="item" @click="changeTab(2)">
        <router-link to="/index" tag="span" :class="tabIndex === 2 ? 'active':''"><img class="dy-btn"
                                                                                       alt=""
                                                                                       src="../../assets/img/dy-btn.png">
        </router-link>
      </div>
      <div class="item" @click="changeTab(3)">
        <router-link to="index" tag="span" :class="tabIndex === 3 ? 'active':''">消息</router-link>
      </div>
      <div class="item" @click="changeTab(4)">
        <router-link to="index" tag="span" :class="tabIndex === 4 ? 'active':''">我的</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tabbar',
    data() {
      return {
        tabIndex: 0,
      };
    },
    methods: {
      changeTab(index) {
        this.tabIndex = index;
      },
    },
  };
  </script>
  
  <style lang="less" scoped>
    .tab-bar {
      height: 50px;
      line-height: 50px;
      width: 100%;
      background: #000000;
      position: fixed;
      bottom: 0;
      left: 0;
      color: #cccccc;
      font-size: 16px;
      display: flex;
      justify-content: center;
    }
      .item {
        flex: 1;
        text-align: center;
      }
  
      .active {
        color: #ffff;
      }
  
      .dy-btn {
        display: inline-block;
        width: 50px;
        height: 30px;
        margin: 10px;
      }
    
  </style> -->


  <template>
    <div class="tab-bar" >
    <tab tab-title="首页" nav-path="/index"></tab>
    <tab tab-title="朋友" nav-path="/friends"></tab>
      <tab nav-path="/publish">
        <img class="dy-btn" alt="" src="../../assets/img/dy-btn.png">
      </tab>
    <tab tab-title="消息" nav-path="/msg"></tab>
    <tab tab-title="我的" nav-path="/me"></tab>
    </div>
  </template>
  
  <script>
  import Tab from './Tab';
  
  export default {
    name: 'Tabbar',
    components: {
      Tab,
    },
  };
  </script>
  
  <style lang="less" scoped>
    .tab-bar {
      height: 50px;
      line-height: 50px;
      width: 100%;
      background: #000000;
      position: fixed;
      bottom: 0;
      left: 0;
      color: #cccccc;
      font-size: 16px;
      display: flex;
      justify-content: center;
      z-index: 9;
    
      .item {
        flex: 1;
        text-align: center;
      }
      .dy-btn {
        display: inline-block;
        width: 50px;
        height: 30px;
        margin: 10px;
      }
    }
  </style>