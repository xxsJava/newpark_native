import routsConfig from '../../routs-config';
import { FilterManager } from './filter-manager';
import { navigationRefs } from '../NavigationContainer';


/*
 * @Author: xxs
 * @Date: 2023-10-30 09:48:45
 * @LastEditTime: 2023-11-03 12:27:36
 * @FilePath: \newpark_native\src\config\routs\lib\routs.tsx
 * @Description: 路由跳转
 */
export default class Router {
    filterManager!: FilterManager;
    startLen!: number;
  
    //跳转函数	
    navigateRout(name: string, params?: any){
        // 声明目标函数
        function targetFun() {
          console.log('执行跳转')
          navigationRefs.current?.navigate(name, params);
        }
        this.execute(name, targetFun);
    }
    
    execute(name: string, targetFun: { (): void; (): void; }) {  
      //放行路由 
      let route = routsConfig.Record;
  
      if (route) {
        const interceptors = route.interceptors;
  
        if (interceptors) {
          let interceptorClazzs: any[] = [];
          interceptors.forEach((element: { [x: string]: any; }) => {
            interceptorClazzs.push(element["clazz"]);
          });
  
          // 过滤管理器
          this.filterManager = new FilterManager(interceptorClazzs, targetFun);
          this.filterManager.execute();
  
        } else {
          targetFun();
        }
      }
    }
  
    /**
     * 执行下一个拦截器
     */
    interceptNext() {
      this.clearStack();
      this.filterManager.execute();
    }
  
    /**
     * 清栈
     */
    clearStack() {
      
    }
  }
  
