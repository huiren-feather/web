<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>{{$route.params.username}}</h2>
    </div>
</template>

<script>
    export default {
        name:'hi',
        data(){
            return {msg:"hi,i'm hi1"};
        }
    }
</script>