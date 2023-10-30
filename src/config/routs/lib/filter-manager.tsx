/*
 * @Author: xxs
 * @Date: 2023-10-30 09:57:32
 * @LastEditTime: 2023-10-30 10:04:55
 * @FilePath: \newpark_native\src\config\routs\lib\filter-manager.tsx
 * @Description: 拦截管理器
 */
export class FilterManager {
    index: number;
    targetFun: any;
    interceptorClazzs: any;
    constructor(interceptorClazzs: any, targetFun: any) {
      this.index = 0;
      this.targetFun = targetFun;
      this.interceptorClazzs = interceptorClazzs;
    }
  
    /**
     * 执行拦截器
     */
    execute(){
      if(this.index == this.interceptorClazzs.length){
        // 执行目标函数	
        this.targetFun();
      }else{
        // 获取下一个拦截器
        let interceptor = new this.interceptorClazzs[this.index]();
        this.index++;
        interceptor.intercept();
      }
    }
  }
