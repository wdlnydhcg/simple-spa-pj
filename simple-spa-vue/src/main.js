/*
 * @Author: MrAlenZhong
 * @Date: 2021-06-24 15:33:37
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-06-24 20:06:12
 * @Description:
 */
import Vue from "vue";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";
import VueRouter from "vue-router";
import Foo from "./components/Foo";
Vue.use(VueRouter);

// 路由组件
// const Foo = { template: "<div>Foooooo</div>" }
const Bar = { template: "<div>Barrrrr</div>" };

// 路由规则
const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar },
];

// 路由实例
const router = new VueRouter({
  routes,
  mode: "history",
  base: "/simple-spa-vue",
});

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    // 注册路由
    router,
    render(h) {
      return h(App, {
        props: {
          // 组件传参
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecyle-props
          // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
          /*
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
          */
        },
      });
    },
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
