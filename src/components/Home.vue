<template>
    <div>
        <h2>我是首页</h2>
        <p>我是首页内容哈哈哈</p>
     <router-link to="/home/news">news</router-link>
     <router-link to="/home/message">message</router-link>

    
             <router-view/>
    
    
    </div>
</template>

<script>
    export default {
        data() {
            return {
                path: '/home/news'
            }
        },
        created () {
            console.log('created');;
        },
        // kepp-alive当前管理状态活跃时就去跳转到指定路由地址，这样也是一种保持状态的方式
        activated(){
            this.$router.push(this.path)
        },
        // 离开的时候保存这个路由地址，下一次活跃的时候重新赋值上就好了
        beforeRouteLeave(to, from, next) {
            console.log(this.$route.path);
            this.path = this.$route.path
            next();
        },
        
    }
</script>

<style scoped>

</style>