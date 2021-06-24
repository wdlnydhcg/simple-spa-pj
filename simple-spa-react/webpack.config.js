/*
 * @Author: MrAlenZhong
 * @Date: 2021-06-24 09:05:20
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-06-24 14:33:03
 * @Description: 
 */
const { merge }  = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "tang",
    projectName: "simple-spa-react",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals: ["react-router-dom"]
  });
};
