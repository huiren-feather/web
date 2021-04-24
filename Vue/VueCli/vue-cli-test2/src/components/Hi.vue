<template>
    <div>
        <h2>{{msg}}</h2>

        <!-- 给子模版提供插入位置 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'Hi',
        data(){
            return {
                msg:"i'm huiren"
            }
        }
    }
</script>