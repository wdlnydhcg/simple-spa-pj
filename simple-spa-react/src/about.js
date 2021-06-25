/*
 * @Author: MrAlenZhong
 * @Date: 2021-06-24 14:31:46
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-06-24 19:58:11
 * @Description:
 */
import React, { useEffect, useState } from "react";

// 自定义钩子函数
function useToolsModule() {
  const [toolsModule, setToolsModule] = useState();
  useEffect(() => {
    // 导入，异步promise返回
    System.import("@study/tools").then(setToolsModule);
  }, []);
  return toolsModule;
}

function about() {
  var back = "";
  // 调用钩子函数
  const toolsModule = useToolsModule();
  if (toolsModule) {
    // 调用共享逻辑的方法
    back = toolsModule.happyStar("React todo");
  }
  return (
    <div>
      <h2>快乐星球就是学习微前端--{back}</h2>
    </div>
  );
}

export default about;
