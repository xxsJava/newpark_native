/*
 * @Author: xxs
 * @Date: 2023-10-30 09:57:32
 * @LastEditTime: 2023-11-03 12:33:29
 * @FilePath: \newpark_native\src\config\routs\lib\filter-manager.tsx
 * @Description: 拦截管理器
 */
export class FilterManager {
    index: number;
    targetFun: any;
    interceptorClazzs: any;

    constructor(interceptorClazzs: any, targetFun: any) {
      this.index = 1;
      this.targetFun = targetFun;
      this.interceptorClazzs = interceptorClazzs;
    }
  
    /**
     * 执行拦截器
     */
    execute(){
      console.log(this.interceptorClazzs.length)
      if(this.index == this.interceptorClazzs.length){
        // 执行目标函数	
        console.log("执行targetFun")
        this.targetFun();
      }else{
        // 获取下一个拦截器
        console.log("获取下一个拦截器")
        let interceptor = new this.interceptorClazzs[this.index]();
        this.index++;
        interceptor.intercept();
      }
    }
  }
