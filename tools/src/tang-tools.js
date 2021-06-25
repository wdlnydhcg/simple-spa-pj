/*
 * @Author: MrAlenZhong
 * @Date: 2021-06-24 17:43:59
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-06-24 20:21:49
 * @Description:
 */
// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction() {}

export function happyStar(params) {
  console.log(`${params} hahaha`);
  return `这是publicApiFuncTest的参数`;
}
