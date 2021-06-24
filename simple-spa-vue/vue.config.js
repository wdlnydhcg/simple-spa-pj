/*
 * @Author: MrAlenZhong
 * @Date: 2021-06-24 15:52:56
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-06-24 15:52:56
 * @Description: 
 */
module.exports = {
  chainWebpack: config => {
    // 配置不打包 Vue 及 vue-router
    config.externals(["vue", "vue-router"])
  }
}