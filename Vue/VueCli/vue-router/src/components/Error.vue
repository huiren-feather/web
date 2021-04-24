<template>
    <div>
        {{msg}}
        此页面不存在，请检查网络地址
    </div>
</template>
<script>
    export default {
        data(){
            return {
                msg:"Error",
            }
        }
    }
</script>