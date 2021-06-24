<!--
 * @Author: MrAlenZhong
 * @Date: 2021-06-24 15:33:37
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-06-24 16:08:43
 * @Description: 
-->
<template>
 <div id="app">
   <div>
     <router-link to="/foo">Goto Foo</router-link> |
     <router-link to="/bar">Goto Bar</router-link>
   </div>
   <div>
     <router-view></router-view>
   </div>
 </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
