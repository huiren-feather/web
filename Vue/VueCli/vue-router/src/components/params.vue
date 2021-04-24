<template>
    <div>
        <h2>{{msg}}</h2>
        <p>新闻ID：{{$route.params.newId}}</p>
        <p>新闻标题：{{$route.params.newsTitle}}</p>
    </div>
</template>

<script>
    export default {
        name:'Params',
        data(){
            return {
                msg:'params page'
            }
        },
        beforeRouteEnter:(to,from,next)=>{
            console.log("准备进入params");
            next();
        },
        beforeRouteLeave:(to,from,next)=>{
            console.log("准备离开params");
            next();
        },
    }
</script>