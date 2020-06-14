<template>
  <div id="app">
    <!-- //这两个是一个全局祖册过着个组件，这个就是一个a标签 -->
    <!-- <router-link to='/home' tag='button' replace >首页</router-link>
    <router-link to='/about' tag='button' replace >关于</router-link> -->
  <button @click="routerHome"> 首页</button>
  <button @click="routerAbout"> 关于</button>
  <router-link :to="'/user/'+username">用户相关</router-link>
<!-- 路由出口,既：渲染的出口，这个就是一个占位符号 -->
<keep-alive exclude="User,About">
  <router-view/>
</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      username: 'lisi'
    }
  },
  methods: {
    routerHome() {
        this.$router.push('/home')
    },
    routerAbout(){
      this.$router.push('/about')
    }
  },
}
</script>

<style>
.router-link-active{
  /* 点击高亮的时候，使用这个样式做active操作是非常的方便的 */
  color: blue;
}
</style>
