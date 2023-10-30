import { router } from "../routs"

/*
 * @Author: xxs
 * @Date: 2023-10-30 10:18:35
 * @LastEditTime: 2023-10-30 10:40:48
 * @FilePath: \newpark_native\src\config\routs\lib\filter\TestFilter.tsx
 * @Description: 拦截器测试
 */
export class LoginInterceptor {
    intercept() {
      console.log("拦截器执行")
    }
  }