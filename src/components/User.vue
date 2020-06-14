<template>
    <div>
        <h2>我是用户相关专业</h2>
        <p>我是用户讯息相关页面，嘿嘿嘿嘿嘿</p>
        <h1>{{ $route.params.usermsg }}44</h1>
        <hr>
        <h2>{{username}}</h2>
    </div>
</template>

<script>
    export default {    
        name:'User',
    computed: {
      username() {
            return this.$route.params.usermsg
        }
    },
    created () {
        console.log('UserCreate');
    },
    }

</script>

<style >

</style>