/*
 * @Author: MrAlenZhong
 * @Date: 2021-06-24 09:05:20
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-06-24 15:25:37
 * @Description: 
 */
// import React from "react";

// export default function Root(props) {
//   return <section>{props.name} is mounted!  我的react app</section>;
// }

import React from "react";
// 引入路由相关组件
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom"
// 引入组件
import Home from './home'
import About from './about'


export default function Root (props) {
  // return <section>{props.name} is mounted! && 拉勾大前端</section>;
  return (
    // 使用路由组件，设计基础路由路径
    <BrowserRouter basename="/simple-spa-react">
      {/* <div>{props.name}</div> */}
      {/* 设置点击链接，跳转路由 */}
      <div>
        <Link to="/home">Home</Link> |
        <Link to="/about">About</Link>
      </div>

      {/* 路由展示 */}
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/">
          {/* 路由重定向 */}
          <Redirect to="/home"></Redirect>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
