import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const state={
    count:3
}
// 改变:同步修改状态
const mutations={
    // n是传递的参数
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count--;
    }
}

const getters={
    count: function(state){
        return state.count+=100;
    }
         
    
}
// 异步执行
const actions={
    // context：上下文，包含所有包括state
    addAction(context){
        context.commit('add',10);
        setTimeout(()=>{context.commit('reduce')},2000);
        console.log('我比reduce先执行');
    },
    reduceAction({commit}){
        commit('reduce');
    }
}

const moduleA={
    state,
    mutations,
    getters,
    actions
}

export default new Vuex.Store({
    // state,
    // mutations,
    // getters,
    // actions
    modules:{a:moduleA}
})