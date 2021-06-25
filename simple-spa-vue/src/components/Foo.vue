<!--
 * @Author: MrAlenZhong
 * @Date: 2021-06-24 20:04:08
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-06-24 20:18:13
 * @Description: 
-->
/** * Description: */
<template>
  <div class="">
    <h2>什么是快乐星球 {{ msg }}</h2>
    <button @click="getHappy">点我获取答案</button>
  </div>
</template>

<script>
//例如：import '' from ''

export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    async getHappy() {
      let toolsModule = await window.System.import("@tang/tools");
      this.msg = toolsModule.happyStar("Vue");
    },
  },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>

<!-- Author zhongmingyuan -->
<!-- Created by preference on 2021/06/24  星期四 -->
