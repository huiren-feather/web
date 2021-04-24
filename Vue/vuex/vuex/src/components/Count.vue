<template>
    <div>
        <h2>{{msg}}</h2>
        <hr>
        <!--  -->
        <h3>{{$store.state.count}}--{{count}}</h3>
        <h3>{{$store.state.a.count}}</h3>
        <p>
            <!-- $store.commit('add',10) -->
            <button @click="add(10)">+</button>
            <!--  $store.commit('reduce')-->
            <button @click="reduce">-</button>
        </p>
        <p>
      
            <button @click="addAction">+</button>
      
            <button @click="reduceAction">-</button>
        </p>
    </div>
</template>

<script>
    import store from '@/vuex/store';
    // 为了简写
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default {
        
        data(){
            return {
                msg:'Hello Vuex'
            }
        },
        // computed:{
        //     // 目的：插值形式使用count
        //     //1. 直接用插值形式，计算属性
        //     // count(){
        //     //     return this.$store.state.count;
        //     // }

        // },
        // 2.用mapState
        // computed:mapState({
        //     count:state=>state.count
        // }),
        // 3.用数组
        computed:{
          ...mapState(['count']), 
        //   count(){
        //     return   this.$store.getters.count;
        //   }
        // 简写
        // ...mapGetters(['count'])
        },
    
        // 改变click事件中的方法 
        // methods:mapMutations(['add','reduce']),
        methods:{
           ...mapMutations(['add','reduce']),
            ...mapActions(['addAction','reduceAction'])
        },
     

        store
    }
</script>